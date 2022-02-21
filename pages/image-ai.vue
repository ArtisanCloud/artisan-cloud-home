<template>
  <layout-normal is-nav-light>
    <!-- Hero Start -->
    <section class="home-slider position-relative" ref="testRef">
      <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <div class="bg-home bg-animation-left d-flex align-items-center" style="background-image:url('/images/business/bg1.jpg')">
              <div class="bg-overlay"></div>
              <div class="container">
                <div class="row justify-content-center mt-5">
                  <div class="col-12">
                    <div class="title-heading text-center mt-4">
                      <h1 class="display-4 text-white title-dark fw-bold mb-3">图像AI技术</h1>
                      <p class="para-desc text-white-50 mx-auto para-dark">多种图像处理模型</p>
                      <div class="mt-4">
                        <a href="#modelColorize" class="btn btn-primary">查看</a>
                      </div>
                    </div>
                  </div><!--end col-->
                </div><!--end row-->
              </div><!--end container-->
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </section><!--end section-->
    <!-- Hero End -->

    <section class="section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title mb-4 pb-2" id="modelColorize">
              <span class="badge rounded-pill bg-soft-primary h6">模型</span>
              <h4 class="title mt-2 mb-4">图像模型</h4>
              <p class="para-desc text-muted mb-0">当下流行的ai图像技术</p>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->

      <div class="container-fluid mt-4 pt-2" id="slider-container">
        <div class="row slider-row-width">
          <div class="col-12">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="card border-0 work-container m-3 work-primary work-border overflow-hidden rounded-md">
                    <div class="card-body p-0">
                      <a href="javascript:void(0)"><img src="/images/ai-image/upresolution.png" class="img-fluid work-image" alt=""></a>
                      <div class="content p-4">
                        <h5 class="mb-0"><a href="javascript:void(0)" class="text-dark title">照片升清晰度</a></h5>
                        <h6 class="text-muted tag mb-0">修复</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="card border-0 work-container m-3 work-danger work-border overflow-hidden rounded-md">
                    <div class="card-body p-0">
                      <img src="/images/ai-image/children-bw.png" style="display: none"/>
                      <img src="/images/ai-image/children-color.png" style="display: none"/>
                      <client-only placeholder="">
                        <vue-compare-image class="image-compare" leftImage="/images/ai-image/children-bw.png" rightImage="/images/ai-image/children-color.png"/>
                      </client-only>
                      <div class="content p-4">
                        <h5 class="mb-0"><a href="javascript:void(0)" class="text-dark title">黑白照上色</a></h5>
                        <h6 class="text-muted tag mb-0">艺术</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide" v-if="false">
                  <div class="card border-0 work-container m-3 work-info work-border overflow-hidden rounded-md">
                    <div class="card-body p-0">
                      <no-ssr>
                        <vue-compare-image class="image-compare" leftImage="/images/ai-image/children-bw.png" rightImage="/images/ai-image/children-color.png"/>
                      </no-ssr>
                      <a href="javascript:void(0)"><img src="/images/ai-image/key.png" class="img-fluid work-image" alt=""></a>
                      <div class="content p-4">
                        <h5 class="mb-0"><a href="javascript:void(0)" class="text-dark title">AI扣像</a></h5>
                        <h6 class="text-muted tag mb-0">特效</h6>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->

      <div v-if="false" class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h6 class="text-primary">News</h6>
              <h4 class="title mb-4">Latest News or Blogs</h4>
              <p class="text-muted para-desc mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
            </div>
          </div><!--end col-->
        </div><!--end row-->

        <div class="row">
          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary border-0 shadow rounded overflow-hidden">
              <div class="position-relative overflow-hidden">
                <img src="/images/blog/1.jpg" class="img-fluid" alt="">
                <a href="javascript:void(0)" class="tag py-1 px-4 d-inline-block h6 mb-0 text-white rounded-lg">Software</a>
              </div>
              <div class="card-body p-4">
                <ul class="list-unstyled mb-2">
                  <li class="list-inline-item text-muted small me-3"><i class="uil uil-calendar-alt text-dark h6 me-1"></i>20th September, 2020</li>
                  <li class="list-inline-item text-muted small"><i class="uil uil-clock text-dark h6 me-1"></i>5 min read</li>
                </ul>
                <a href="javascript:void(0)" class="text-dark title h5">A place where technology meets craftsmanship</a>

                <div class="mt-2">
                  <a href="javascript:void(0)" class="link">Read more <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                </div>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary border-0 shadow rounded overflow-hidden">
              <div class="position-relative overflow-hidden">
                <img src="/images/blog/2.jpg" class="img-fluid" alt="">
                <a href="javascript:void(0)" class="tag py-1 px-4 d-inline-block h6 mb-0 text-white rounded-lg">Designer</a>
              </div>
              <div class="card-body p-4">
                <ul class="list-unstyled mb-2">
                  <li class="list-inline-item text-muted small me-3"><i class="uil uil-calendar-alt text-dark h6 me-1"></i>20th September, 2020</li>
                  <li class="list-inline-item text-muted small"><i class="uil uil-clock text-dark h6 me-1"></i>5 min read</li>
                </ul>
                <a href="javascript:void(0)" class="text-dark title h5">Talisker bay on the isle of skye in scotland</a>

                <div class="mt-2">
                  <a href="javascript:void(0)" class="link">Read more <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                </div>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary border-0 shadow rounded overflow-hidden">
              <div class="position-relative overflow-hidden">
                <img src="/images/blog/3.jpg" class="img-fluid" alt="">
                <a href="javascript:void(0)" class="tag py-1 px-4 d-inline-block h6 mb-0 text-white rounded-lg">Developer</a>
              </div>
              <div class="card-body p-4">
                <ul class="list-unstyled mb-2">
                  <li class="list-inline-item text-muted small me-3"><i class="uil uil-calendar-alt text-dark h6 me-1"></i>20th September, 2020</li>
                  <li class="list-inline-item text-muted small"><i class="uil uil-clock text-dark h6 me-1"></i>5 min read</li>
                </ul>
                <a href="javascript:void(0)" class="text-dark title h5">A beginner’s guide to customer journey maps</a>

                <div class="mt-2">
                  <a href="javascript:void(0)" class="link">Read more <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                </div>
              </div>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </section><!--end section-->


    <!-- End -->
  </layout-normal>
</template>

<script>
import LayoutNormal from "~/pages/layout/normal";
export default {
  name: "ai-image",
  components: {
    LayoutNormal,
    VueCompareImage: () => import("vue-compare-image")
  },
  mounted() {
    console.log('mount...', this.$refs.testRef);
  },
}
</script>

<style scoped>
.image-compare {
  width: 800px !important;
  max-width: 100% !important;
}
</style>
