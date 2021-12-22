<template>
  <div class="w-110 shadow-md h-183 rounded-lg bg-white pt-24 px-14 pb-6">
    <!-- asana logo png -->
    <img
      src="../assets/logo.png"
      alt="Logo"
      width="121px"
      height="24px"
      class="mx-auto mb-12"
    />

    <!-- login with google button -->
    <button
      class="flex items-center rounded-md px-4 py-2 mb-8 mx-auto w-full border hover:bg-secondary transition-all"
    >
      <icon name="google" class="ml-4"></icon>

      <span class="mx-auto"> Log in with Google </span>
    </button>

    <!-- separator -->
    <div
      class="w-full flex justify-center mb-10"
      :style="{
        backgroundColor: '#edeae9',
        height: '1px',
      }"
    >
      <div
        class="relative bg-white z-10 w-8 h-5 text-center"
        :style="{
          color: '#cfcbcb',
          bottom: '13px',
        }"
      >
        or
      </div>
    </div>

    <!-- login form -->
    <form>
      <div>
        <label for="" class="text-xs text-text-weak">Email address</label>
        <input
          type="email"
          class="flex border px-3 py-1.5 w-full rounded-lg mt-2 outline-none focus:border focus:border-black"
        />
      </div>
      <div class="mt-8">
        <label for="" class="text-xs">Password</label>
        <input
          type="password"
          class="flex border px-3 py-1.5 w-full rounded-lg mt-2 text-text-weak outline-none outline-none focus:border focus:border-black"
        />
      </div>
    </form>

    <!-- forgot password -->
    <router-link to="#" class="text-text-weak text-xs underline block mt-1">
      Forgot your password?
    </router-link>
    <!-- login button -->
    <router-link to="/home">
      <button
        class="bg-purple mt-8 rounded-md w-full text-white px-3 py-1.5 text-sm hover:bg-dark-purple transition-all"
        @click="submit"
      >
        Log in
      </button>
    </router-link>
    <span class="text-text-weak text-sm mt-6 block text-center">
      Don't have an account?
      <a href="#" class="text-link ml-2">Sign up</a>
    </span>
    <!-- privacy and policy -->
    <p class="mt-12 text-xs text-text-weak text-center">
      This site is protected by reCAPTCHA and the Google
      <span class="underline cursor-pointer"> Privacy Policy</span> and
      <span class="underline cursor-pointer">Terms of Service</span> apply.
    </p>
  </div>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  methods: {
    submit() {
      const userColor = this.randomColor();
      return this.$store.commit("userColor", { userColor });
    },
  },
};
</script>
