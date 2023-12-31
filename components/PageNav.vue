<template>
  <nav class="navbar">
    <div class="navbar-elements">
      <nuxt-link to="/" class="logo">
        <img alt="Logo" class="logo">
      </nuxt-link>
      <div class="right-side">
        <input type="search" placeholder="Search" class="search-bar" v-model="searchContent" @keyup.enter="search">
        <div class="account-icon">
          <img ref="usericon" src="~/assets/svg/user-circle.svg" alt="Account" class="account-icon" width="32"
            height="32">
          <div v-if="signedIn" class="dropdown">
            <a href="#" class="dropdown-content">
              <img src="~/assets/svg/user.svg" alt="">
              Profile
            </a>
            <a href="#" class="dropdown-content">
              <img src="~/assets/svg/settings.svg" alt="">
              Settings
            </a>
            <a @click="deleteAccessTokenCookie" class="dropdown-content">
              <img src="~/assets/svg/arrow-out.svg" alt="">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import Cookies from 'js-cookie';

const usericon = ref();

const userdata = ref({});
const signedIn = ref(false);
const searchContent = ref('');

const router = useRouter();

const themeFileName = inject('themeFileName');

useHead(() => ({
  link: [
    {
      rel: 'stylesheet',
      href: `/themes/${themeFileName}.css`
    }
  ]
}));

onMounted(() => {
  getUserData();
});

function search() {
  router.push(`/search/${searchContent.value}`);
}

async function getUserData() {
  const access_token = Cookies.get('access_token');

  const query = `
            query {
                Viewer {
                    name
                    avatar {
                        large
                    }
                }
            }
        `;

  const variables = {
  };

  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${access_token}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    userdata.value = data.data.Viewer;
    usericon.value.src = data.data.Viewer.avatar.large;
    signedIn.value = true;
  }

}

const deleteAccessTokenCookie = () => {
  Cookies.remove('access_token');
  window.location.reload();
};

</script>

<style lang="sass">
.navbar 
  height: 50px
  display: flex
  justify-content: space-between
  align-items: center
  background-color: #ddddddaa
  backdrop-filter: blur(10px)
  

  .navbar-elements 
    height: 50px
    width: 100%
    padding: 0 10px
    display: flex
    justify-content: space-between
    align-items: center
    max-width: 800px
    margin: auto

    .logo 
      height: 100%

    .right-side 
      display: flex
      align-items: center

      .search-bar
        margin-right: 10px
        border-radius: 15px
        outline: none
        border: 2px solid #afafaf
        padding: 3px 5px

      .account-icon 
        height: 32px
        width: 32px
        border-radius: 50%

        .dropdown
          display: none
          transform: translateX(-80%)
          background-color: #f9f9f9
          min-width: 160px
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)
          border-radius: 20px

          .dropdown-content
            color: #000
            padding: 12px 16px
            text-decoration: none
            display: block
            cursor: pointer

          .dropdown-content:nth-child(1),
          .dropdown-content:nth-child(2)
            color: #ccc
            cursor: default
          
        
        &:hover .dropdown
          display: block

</style>