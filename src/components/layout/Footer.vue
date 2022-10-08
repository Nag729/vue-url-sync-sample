<template>
  <QFooter elevated class="bg-blue-grey-10">
    <QToolbar>
      <QToolbarTitle>
        <div class="footer-container">
          <a
            class="footer-text"
            href="https://github.com/Nag729"
            target="_blank"
          >
            @Nag729 😎
          </a>
        </div>
      </QToolbarTitle>
    </QToolbar>
  </QFooter>
</template>

<style scoped lang="scss">
.footer-container {
  display: flex;
  justify-content: center;

  .footer-text {
    font-size: 16px;
    color: $teal-3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
