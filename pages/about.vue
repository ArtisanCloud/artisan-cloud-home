<template>
  <div>
    <common-header is-nav-light is-logo-light/>
    <div>
      <!-- Home Start -->
      <section class="bg-half-170 d-table w-100" style="background: url('/images/bg/bg-about.jpg') center center">
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row mt-5 justify-content-center">
            <div class="col-12">
              <div class="heading-title text-center">
                <h2 class="text-white title  title-dark mb-3">关于我们</h2>
                <p class="para-desc mx-auto text-white-50">一切源于我们的梦想，对数字世界的憧憬</p>
                <div class="mt-4 pt-2">
                  <a href="about/#ourStory" class="btn btn-light">我们的故事</a>
                </div>
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
      <section class="section" id="ourStory">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="section-title mb-4 pb-2 mb-sm-0 pb-sm-0 me-lg-5">
                <h6 class="text-primary">我们的故事</h6>
                <h4 class="title mb-0 me-lg-5">以人为本，科技创造生活</h4>
              </div>
            </div><!--end col-->

            <div class="col-md-6">
              <div class="section-title">
                <p class="text-muted para-desc">我们团队主要有资深从事金融保险基金，影视设备和内容制作，体育AI品牌的技术团队</p>
                <p class="text-muted para-desc mb-0">0-1搭建CRM系统</p>
              </div>
            </div><!--end col-->
          </div><!--end row-->

          <div class="row mt-4 pt-2">
            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="card border-0 text-center features feature-primary rounded">
                <div class="icon text-center mx-auto rounded-md">
                  <h3 class="mb-0"><i class="uil uil-chart-pie"></i></h3>
                </div>

                <div class="card-body p-0 mt-4">
                  <h5>愿景</h5>
                  <p class="text-muted mb-0">让所有企业都实现数字化</p>
                  <div v-if="false" class="mt-2">
                    <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                  </div>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="card border-0 text-center features feature-primary rounded">
                <div class="icon text-center mx-auto rounded-md">
                  <h3 class="mb-0"><i class="uil uil-crosshair"></i></h3>
                </div>

                <div class="card-body p-0 mt-4">
                  <h5>目标</h5>
                  <p class="text-muted mb-0">降本增效，品效合一</p>
                  <div v-if="false" class="mt-2">
                    <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                  </div>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="card border-0 text-center features feature-primary rounded">
                <div class="icon text-center mx-auto rounded-md">
                  <h3 class="mb-0"><i class="uil uil-airplay"></i></h3>
                </div>

                <div class="card-body p-0 mt-4">
                  <h5>使命</h5>
                  <p class="text-muted mb-0">秉持匠心精神，打造极致服务产品</p>
                  <div v-if="false" class="mt-2">
                    <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                  </div>
                </div>
              </div>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
          <div class="row mt-5" data-masonry='{"percentPosition": true }'>
            <div class="col-md-3 col-4 spacing">
              <div class="card border-0 position-relative d-block shadow overflow-hidden rounded">
                <div class="card-body p-0">
                  <img src="/images/about/1.jpg" class="img-fluid" alt="work-image">
                </div>
              </div>
            </div><!--end col-->

            <div class="col-md-3 col-4 spacing">
              <div class="card border-0 position-relative d-block shadow overflow-hidden rounded">
                <div class="card-body p-0">
                  <img src="/images/about/2.jpg" class="img-fluid" alt="work-image">
                </div>
              </div>
            </div><!--end col-->

            <div class="col-md-3 col-4 spacing">
              <div class="card border-0 position-relative d-block shadow overflow-hidden rounded">
                <div class="card-body p-0">
                  <img src="/images/about/3.jpg" class="img-fluid" alt="work-image">
                </div>
              </div>
            </div><!--end col-->

            <div class="col-md-3 col-4 spacing">
              <div class="card border-0 position-relative d-block shadow overflow-hidden rounded">
                <div class="card-body p-0">
                  <img src="/images/about/4.jpg" class="img-fluid" alt="work-image">
                </div>
              </div>
            </div><!--end col-->

            <div class="col-md-3 col-4 spacing">
              <div class="card border-0 position-relative d-block shadow overflow-hidden rounded">
                <div class="card-body p-0">
                  <img src="/images/about/8.jpg" class="img-fluid" alt="work-image">
                </div>
              </div>
            </div><!--end col-->

            <div class="col-md-3 col-4 spacing">
              <div class="card border-0 position-relative d-block shadow overflow-hidden rounded">
                <div class="card-body p-0">
                  <img src="/images/about/6.jpg" class="img-fluid" alt="work-image">
                </div>
              </div>
            </div><!--end col-->

            <div class="col-md-3 col-4 spacing">
              <div class="card border-0 position-relative d-block shadow overflow-hidden rounded">
                <div class="card-body p-0">
                  <img src="/images/about/5.jpg" class="img-fluid" alt="work-image">
                </div>
              </div>
            </div><!--end col-->

            <div class="col-md-3 col-4 spacing">
              <div class="card border-0 position-relative d-block shadow overflow-hidden rounded">
                <div class="card-body p-0">
                  <img src="/images/about/7.jpg" class="img-fluid" alt="work-image">
                </div>
              </div>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end container-->

        <div v-if="false" class="container mt-100 mt-60">
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <div class="row" id="counter">
                <div class="col-md-4 col-6">
                  <div class="counter-box text-center">
                    <h1 class="mb-0"><span class="counter-value" data-target="9">1</span></h1>
                    <h6 class="counter-head text-muted">Year of business</h6>
                  </div><!--end counter box-->
                </div>

                <div class="col-md-4 col-6">
                  <div class="counter-box text-center">
                    <h1 class="mb-0"><span class="counter-value" data-target="106">1</span>k+</h1>
                    <h6 class="counter-head text-muted">Number of Sales</h6>
                  </div><!--end counter box-->
                </div>

                <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div class="counter-box text-center">
                    <h1 class="mb-0"><span class="counter-value" data-target="93">9</span>%</h1>
                    <h6 class="counter-head text-muted">Happy Customers</h6>
                  </div><!--end counter box-->
                </div>
              </div><!--end row-->
            </div>
          </div>
        </div><!--end container-->

        <div v-if="false" class="container mt-100 mt-60">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="section-title text-center mb-4 pb-2">
                <h6 class="text-primary">Our Team</h6>
                <h4 class="title mb-4">Creative Team Members</h4>
                <p class="text-muted para-desc mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
              </div>
            </div><!--end col-->
          </div><!--end row-->

          <div class="row">
            <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div class="card text-center team border-0 shadow rounded overflow-hidden">
                <img src="/images/client/01.jpg" class="img-fluid" alt="">
                <div class="card-body py-3 content">
                  <h5 class="mb-0">Calvin Carlo</h5>
                  <h6 class="text-muted mb-0">Founder / C.E.O</h6>
                </div>
                <ul class="list-unstyled team-social mb-0">
                  <li><a href="mailto:contact@example.com" class="btn btn-icon btn-pills btn-soft-primary"><i data-feather="mail" class="icons"></i></a></li>
                </ul>
              </div>
            </div><!--end col-->


            <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div class="card text-center team border-0 shadow rounded overflow-hidden">
                <img src="/images/client/02.jpg" class="img-fluid" alt="">
                <div class="card-body py-3 content">
                  <h5 class="mb-0">Janalia Joseph</h5>
                  <h6 class="text-muted mb-0">Co-Founder</h6>
                </div>
                <ul class="list-unstyled team-social mb-0">
                  <li><a href="mailto:contact@example.com" class="btn btn-icon btn-pills btn-soft-primary"><i data-feather="mail" class="icons"></i></a></li>
                </ul>
              </div>
            </div><!--end col-->


            <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div class="card text-center team border-0 shadow rounded overflow-hidden">
                <img src="/images/client/03.jpg" class="img-fluid" alt="">
                <div class="card-body py-3 content">
                  <h5 class="mb-0">Miriam Coll</h5>
                  <h6 class="text-muted mb-0">C.O.O</h6>
                </div>
                <ul class="list-unstyled team-social mb-0">
                  <li><a href="mailto:contact@example.com" class="btn btn-icon btn-pills btn-soft-primary"><i data-feather="mail" class="icons"></i></a></li>
                </ul>
              </div>
            </div><!--end col-->


            <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div class="card text-center team border-0 shadow rounded overflow-hidden">
                <img src="/images/client/04.jpg" class="img-fluid" alt="">
                <div class="card-body py-3 content">
                  <h5 class="mb-0">Cristino Murphy</h5>
                  <h6 class="text-muted mb-0">Marketing</h6>
                </div>
                <ul class="list-unstyled team-social mb-0">
                  <li><a href="mailto:contact@example.com" class="btn btn-icon btn-pills btn-soft-primary"><i data-feather="mail" class="icons"></i></a></li>
                </ul>
              </div>
            </div><!--end col-->

            <div class="col-12 text-center mt-4 pt-2">
              <div class="alert alert-light alert-pills" role="alert">
                <span class="badge bg-danger rounded-pill me-1">Jobs</span>
                <span class="content">We Are Hiring <a href="javascript:void(0)" class="text-primary"> Send your CV / Resume</a></span>
              </div>
            </div>
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
  name: "about.vue"
}
</script>

<style scoped>

</style>
