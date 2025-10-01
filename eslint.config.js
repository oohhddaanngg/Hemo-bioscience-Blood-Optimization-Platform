export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        console: 'readonly',
        confirm: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        clearTimeout: 'readonly',
        setTimeout: 'readonly',
        alert: 'readonly',
        navigator: 'readonly',
        PerformanceObserver: 'readonly',
        indexedDB: 'readonly',
        self: 'readonly',
        crypto: 'readonly',
        Blob: 'readonly',
        URL: 'readonly',
        prompt: 'readonly',
        FileReader: 'readonly',
        location: 'readonly',
        Event: 'readonly',
        Node: 'readonly',
        fetch: 'readonly'
      }
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': ['error', { 'args': 'none', 'vars': 'local' }],
      'no-unexpected-multiline': 'error',
      'no-empty': ['error', { 'allowEmptyCatch': true }]
    }
  }
];
