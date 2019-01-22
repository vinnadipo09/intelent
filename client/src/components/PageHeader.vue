<template>
  <v-toolbar class="black">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <router-link class="mt-3 myrouterlink" to ="/">
        <v-toolbar-title class="mytitles">Artificial Intelligence Entertainment Center</v-toolbar-title>
      </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <router-link class="mt-3 myrouterlink" to ="/">
        <v-btn class="mybutton" flat dark>
          Home
        </v-btn>
      </router-link>
      <router-link class="mt-3 myrouterlink" to ="/register">
        <v-btn class="mybutton" flat dark>
          Music
        </v-btn>
      </router-link>
      <router-link class="mt-3 myrouterlink" to ="/register">
        <v-btn class="mybutton" flat dark>
          Movies
        </v-btn>
      </router-link>
      <router-link class="mt-3 myrouterlink" to ="/register">
        <v-btn class="mybutton" flat dark>
          Series
        </v-btn>
      </router-link>
      <router-link class="mt-3 myrouterlink" to ="/register">
        <v-btn class="mybutton" flat dark>
          Documentaries
        </v-btn>
      </router-link>
      <router-link class="mt-3 myrouterlink" to ="/register">
        <v-btn class="mybutton" flat dark>
          Top Rated
        </v-btn>
      </router-link>
      <router-link class="mt-3 myrouterlink" to ="/register">
        <v-btn class="mybutton" flat dark>
          About US
        </v-btn>
      </router-link>
      <router-link class="mt-3 myrouterlink" to ="/register">
        <v-btn class="mybutton" flat dark>
          Register
        </v-btn>
      </router-link>
      <router-link class="mt-3 myrouterlink" to ="/register">
        <v-btn class="mybutton" flat dark>
          Register
        </v-btn>
      </router-link>
      <router-link class="mt-3 myrouterlink" to ="/login">
        <v-btn class="mybutton" flat dark>
          Login
        </v-btn>
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'page-header'
}
</script>

<style scoped>
.cyan{
  text-decoration: none !important;
  text-transform: none! important;
}
.mybutton{
  text-decoration: none !important;
  text-transform: none! important;
}
.mytitles{
  text-decoration: none !important;
  text-transform: none! important;
}
.myrouterlink{
  text-decoration: none !important;
  text-transform: none! important;
  padding: 4px;
}
.myrouterlink:hover{
  color: aqua;
}
.mybutton:hover{
  color: aqua;
}
.mytitles:hover{
  color: aqua;
}
.mytitles{
  color: white;
}
router-link-exact-active{
  color:tomato;
}
</style>
