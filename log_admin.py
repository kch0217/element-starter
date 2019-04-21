import pymongo, json
from datetime import datetime

def connect_to_db():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    # mydb = myclient["openedx"]
    # mycol = mydb["comp102x2T2014"]
    mydb = myclient["learninglocker_v2"]
    mycol = mydb["statements"]
    return mycol

def aggregation_edx(conn):
    time_range = [datetime.strptime("2014-06-17".strip(),"%Y-%m-%d"), datetime.strptime("2014-09-06".strip(),"%Y-%m-%d")]

    pipeline = [{
        "$project": {
            "_id": 0,
            "date": {
                "$dateFromString":
                    {
                        "dateString":"$timestamp",
                    }
            },
        }
    },
    {
        "$match": {
            "date":{
                "$gte":time_range[0],
                "$lte":time_range[1]
            }
        }
    },
    {
        "$group":{
            "_id": {"year":{ "$year": "$date" }, "month": { "$month": "$date" }, "day": { "$dayOfMonth": "$date" }},
            "count": {"$sum":1}
        }
    }]

    return conn.aggregate(pipeline=pipeline, allowDiskUse=True)

def aggregation_moodle(conn):
    time_range = [datetime.strptime("2016-09-01".strip(),"%Y-%m-%d"), datetime.strptime("2016-11-04".strip(),"%Y-%m-%d")]

    pipeline = [{
        "$project": {
            "_id": 0,
            "date": "$timestamp"
        }
    },
    {
        "$match": {
            "date":{
                "$gte":time_range[0],
                "$lte":time_range[1]
            }
        }
    },
    {
        "$group":{
            "_id": {"year":{ "$year": "$date" }, "month": { "$month": "$date" }, "day": { "$dayOfMonth": "$date" }},
            "count": {"$sum":1}
        }
    }]

    return conn.aggregate(pipeline=pipeline, allowDiskUse=True)

def aggregation_trumptech(conn):


    pipeline = [{
        "$project": {
            "_id": 0,
            "date": "$timestamp"
        }
    },
    {
        "$group":{
            "_id": {"year":{ "$year": "$date" }, "month": { "$month": "$date" }, "day": { "$dayOfMonth": "$date" }},
            "count": {"$sum":1}
        }
    }]

    return conn.aggregate(pipeline=pipeline, allowDiskUse=True)

def extract_log_by_date():

    conn = connect_to_db()
    results = aggregation_trumptech(conn)

    my_results= []

    for result in results:
        my_results.append(result)

    with open("count_day.json", "w") as f:
        json.dump(my_results,f)


def aggregate_logs():
    files_handler = {}
    file_name = ["edx", "moodle", "trumptech"]
    max = 0
    for name in file_name:
        with open("{}_count_day.json".format(name)) as f:
            content = json.load(f)
            if len(content)>max:
                max = len(content)

            for each in content:
                each["date"] = datetime(each["_id"]["year"], each["_id"]["month"], each["_id"]["day"])

            dates = sorted([each["date"] for each in content])
            print("In", name, "the min date is", dates[0], "the max date is", dates[-1])

            sorted_content = []
            for each in dates:
                for each2 in content:
                    if each == each2["date"]:
                        sorted_content.append(each2["count"])

            files_handler[name] = sorted_content

    print("The max acount is ", max)
    for a in file_name:
        print("The count of", a, "is", len(files_handler[a]))
        if len(files_handler[a]) < max:
            for b in range(max-len(files_handler[a])):
                files_handler[a].append(0)


    with open("overall_count_day.json", "w") as f:
        json.dump(files_handler, f)

aggregate_logs()


