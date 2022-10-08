<template>
  <QFooter elevated class="bg-blue-grey-10">
    <QToolbar>
      <QToolbarTitle>
        <div class="footer-container">
          <span class="footer-text">Created by&nbsp;</span>
          <a
            class="footer-text link-text"
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
    color: white;
  }

  .link-text {
    color: $teal-3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
