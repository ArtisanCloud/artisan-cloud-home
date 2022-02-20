<template>
  <layout-normal is-nav-light is-logo-light>
    <!-- Start -->
    <section class="bg-half-130 d-table w-100 bg-primary" style="background: url('/images/bg/bg-hosting.png') center center;">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="heading-title text-center">
              <h6 class="text-white-50">智能虚拟业务代表，24小时不间断服务</h6>
              <h2 class="heading text-white title-dark mb-3">智能品宣方案</h2>
              <div class="mt-4">
                <a href="javascript:void(0)" class="btn btn-icon btn-pills btn-lg btn-light"><i data-feather="arrow-down" class="icons"></i></a>
              </div>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

    <section class="bg-white">
        <div class="row justify-content-center bg-white p-5 pt-3 pb-2">
          <img src="/images/branding.jpg" >
        </div><!--end row-->
      
    </section><!--end section-->

  </layout-normal>

    

</template>

<script>
import LayoutNormal from "~/pages/layout/normal";
export default {
  name: "branding",
  components: {LayoutNormal}
}
</script>

<style scoped>

</style>
