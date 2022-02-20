<template>
  <div>
    <common-header is-nav-light />
    <div>
      <!-- Home Start -->
      <section class="bg-half-170 bg-primary d-table w-100" style="background: url('/images/bg/bg-contact.png') center">
        <div class="container">
          <div class="row mt-5 justify-content-center">
            <div class="col-12">
              <div class="heading-title text-center">
                <h2 class="text-white title-dark title mb-3">联系我们</h2>
                <p class="para-desc mx-auto text-white-50">欢迎通过一下方式，与我们取得联系.</p>
              </div>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end container-->
      </section><!--end section-->
      <div class="position-relative">
        <div class="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <!-- Home End -->

      <!-- Start -->
      <section class="section pb-0">


        <div class="container mt-100 mt-60">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="card border-0 text-center features feature-primary">
                <div class="icon text-center mx-auto rounded-md">
                  <h3 class="mb-0"><i class="uil uil-phone"></i></h3>
                </div>

                <div class="card-body p-0 mt-4">
                  <h5 class="title fw-bold">业务联系方式</h5>
                  <p class="text-muted">点击发送邮件</p>
                  <a href="mailto:matrix-x@artisan-cloud.com" class="link">matrix-x@artisan-cloud.com</a>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div class="card border-0 text-center features feature-primary">
                <div class="icon text-center mx-auto rounded-md">
                  <h3 class="mb-0"><i class="uil uil-envelope"></i></h3>
                </div>

                <div class="card-body p-0 mt-4">
                  <h5 class="title fw-bold">技术联系方式</h5>
                  <p class="text-muted">点击发送邮件</p>
                  <a href="mailto:walle@artisan-cloud.com" class="link">walle@artisan-cloud.com</a>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <div class="card border-0 text-center features feature-primary">
                <div class="icon text-center mx-auto rounded-md">
                  <h3 class="mb-0"><i class="uil uil-map-marker"></i></h3>
                </div>

                <div class="card-body p-0 mt-4">
                  <h5 class="title fw-bold">Location</h5>
                  <p class="text-muted">C/54 Northwest Freeway, Suite 558, <br>Houston, USA 485</p>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#watchvideomodal" class="video-play-icon h6 link">View on Google map</a>
                </div>
              </div>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end container-->

        <div class="container-fluid mt-100 mt-60">
          <div class="row">
            <div class="col-12 p-0">
              <div class="card map border-0">
                <div class="card-body p-0">
                  <iframe width="100%" height="460" frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src="https://surl.amap.com/1pB8Z1As8TW"></iframe>
                </div>
              </div>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end container-->
      </section><!--end section-->
      <!-- End -->
    </div>
    <common-footer />
  </div>
</template>

<script>
export default {
  name: "contact-us"
}
</script>

<style scoped>

</style>
