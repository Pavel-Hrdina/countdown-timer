<template>
  <div class="navbar bg-base-200">
    <div class="flex-1">
      <router-link to="/" aria-label="Home">
        <a href="/" aria-label="Home" class="btn btn-ghost normal-case text-xl">
          Pause timer
        </a>
      </router-link>
    </div>
    <div class="flex-none mr-5">
      <button class="btn btn-square btn-ghost" aria-label="Home">
        <router-link to="/" aria-label="Home">
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
            />
          </svg>
        </router-link>
      </button>
    </div>
  </div>
</template>
