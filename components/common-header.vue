<template>
  <!-- Navbar STart -->
  <header id="topnav" class="defaultscroll sticky">
    <div class="container">
      <!-- Logo container-->
      <div>
        <a class="logo" href="index.html">
          <img src="https://powerwechat.artisan-cloud.com/images/at-logo-2-slim.svg" height="22" class="logo-light-mode" alt="">
          <img src="https://powerwechat.artisan-cloud.com/images/at-logo-2-slim-light.svg" height="22" class="logo-dark-mode" alt="">
        </a>
      </div>
      <div v-if="isNotContactUS" class="buy-button">
        <a href="/contact-us" class="btn btn-primary">联系我们</a>
      </div><!--end login button-->
      <!-- End Logo container-->
      <div class="menu-extras">
        <div class="menu-item">
          <!-- Mobile menu toggle-->
          <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <!-- End mobile menu toggle-->
        </div>
      </div>

      <div id="navigation">
        <!-- Navigation Menu-->
        <ul class="navigation-menu nav-left" :class="{'nav-light': isNavLight}">
          <li><a href="/" class="sub-menu-item">首页</a></li>
          <li class="has-submenu parent-parent-menu-item"><a href="javascript:void(0)">人工智能</a><span class="menu-arrow"></span>
            <ul class="submenu megamenu">
              <li>
                <ul>
                  <li><a href="/branding" class="sub-menu-item">智能品宣方案</a></li>
                  <li><a href="/image-ai" class="sub-menu-item">图像AI技术</a></li>
                  <li><a href="/voice-ai" class="sub-menu-item">语音AI识别</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="has-submenu parent-parent-menu-item"><a href="javascript:void(0)">虚拟影像</a><span class="menu-arrow"></span>
            <ul class="submenu megamenu">
              <li>
                <ul>
                  <li><a href="/vtuber" class="sub-menu-item">虚拟主播方案</a></li>
                  <li><a href="/vr-and-ar" class="sub-menu-item">VR & AR</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="has-submenu parent-parent-menu-item"><a href="javascript:void(0)">企业数字服务</a><span class="menu-arrow"></span>
            <ul class="submenu megamenu">
              <li>
                <ul>
                  <li><a href="/marketing#home" class="sub-menu-item">数字营销活动</a></li>
                  <li><a href="/marketing#b2" class="sub-menu-item">企业福利代发放</a></li>
                  <li><a href="/a-d" class="sub-menu-item">微信广告</a></li>
                  <li v-if="false"><a href="index-software.html" class="sub-menu-item">客户关系管理CRM</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="about" class="sub-menu-item">关于我们</a></li>
        </ul><!--end navigation menu-->
<!--        <div v-if="false" class="buy-menu-btn d-none">-->
<!--          <a href="https://wrapbootstrap.com/theme/landflow-landing-template-dark-rtl-WB0SL3408?ref=shreethemesstudio" target="_blank" class="btn btn-primary">Buy Now</a>-->
<!--        </div>-->
        <!--end login button-->
      </div><!--end navigation-->
    </div><!--end container-->
  </header><!--end header-->
  <!-- Navbar End -->
</template>

<script>
export default {
  name: "common-header",
  props: {
    isNavLight: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    isNotContactUS() {
      return this.$route.name !== 'contact-us';
    }
  },
}
</script>

<style scoped>

</style>
