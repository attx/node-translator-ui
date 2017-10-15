<template>
  <div class="container mt-5 mb-5 p-4">
    
    <div class="row">
      <div class="col-md-6">
        <h2 class="mb-0">node-translator</h2>
      </div>
      <div class="col-md-6 text-right">
        <button type="button" v-if="submitted && translations.length" v-on:click="reset" class="btn btn-sm btn-primary mt-2">new</button>
      </div>
    </div>

    <p class="small text-muted">Translate any word or text to 100+ languages</p>
    <div class="row" v-if="!submitted">
      
      <div class="col-md-12">
        <div class="form-group">
          <label>Input Text</label>
          <input type="text" class="form-control" v-model="inputText">
        </div>
      </div>

      <div class="col-md-12 text-right">
        <button type="button" v-on:click="submit" class="btn btn-sm btn-primary">submit</button>
      </div>
    </div>

    <div v-if="submitted && !translations.length" class="text-center">
      <div class="loading">
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
      </div>
      <p class="mt-3 text-muted">This process can take a while..</p>
    </div>
  
    <div v-show="submitted && translations.length">

      <div class="container-fluid table-wrapper">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Language</th>
              <th>Translation</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="translation in orderedTranslations" v-bind:key="translation.translatedText">
              <td>
                <span class="badge">{{translation.code.substr(0, 2)}}</span>
                {{ translation.language }}
              </td>
              <td>
                {{ translation.translatedText }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      apiUrl: 'http://localhost:3000',
      inputText: '',
      submitted: false,
      translations: []
    }
  },
  computed: {
    orderedTranslations: function () {
      return this.translations.sort(function(a, b) {
        return (a.language < b.language) ? -1 : (a.language > b.language) ? 1 : 0
      })
    }
  },
  methods: {
    submit: function () {
     const vm = this
      this.submitted = true
      this.$http.get(this.apiUrl + '/translate', {
        params: { 
          inputText: vm.inputText
        }
      }).then((response) => {
        this.setTranslations(response.data)
      })
    },
    setTranslations: function(translations) {
      this.translations = translations
    },
    reset: function () {
      this.submitted = false
      while (this.translations.length > 0) {
        this.translations.pop()
      }
      this.translations = []
    }
  }
}
</script>