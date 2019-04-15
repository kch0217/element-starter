import * as api from './services'

export default {
  install (Vue, options) {
    Vue.$api = api
    Vue.prototype.$api = api

    registerComponents(
      Vue,
      // https://webpack.js.org/guides/dependency-management/#require-context
      require.context(
        // Look for files in the components directory
        './components',
        // Do not look in subdirectories
        false,
        // The regular expression used to match deserved component filenames
        /Base[\w-]+\.vue$/
      )
    )

    registerComponents(
      Vue,
      // https://webpack.js.org/guides/dependency-management/#require-context
      require.context(
        // Look for files in the components directory
        './components',
        // Do not look in subdirectories
        false,
        // The regular expression used to match deserved component filenames
        /App[\w-]+\.vue$/
      )
    )
  }
}

function registerComponents (Vue, requireComponent) {
  // For each matching file name...
  requireComponent.keys().forEach(fileName => {
    // Get the component config
    const componentConfig = requireComponent(fileName)
    // Get the PascalCase version of the component name
    const componentName = pascalCase(
      fileName
      // Strip the leading `'./` and extension from the filename
        .replace(/^\.\/(.*)\.\w+$/, '$1')
        // remove app prefix
        .replace(/^App/, '')
    )
    // Globally register the component
    console.log('register', componentName)
    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}
