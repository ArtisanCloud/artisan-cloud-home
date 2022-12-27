<template>
  <div>
    <common-header is-nav-light is-logo-light/>
    <div>
      <!-- Home Start -->
      <section class="bg-half-170 d-table w-100" style="background: url('/images/erp/bg.jpg') center center">
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row mt-5 justify-content-center">
            <div class="col-12">
              <div class="heading-title text-center">
                <h2 class="text-white title  title-dark mb-3">行业特定的 ERP 解决方案</h2>
                <p class="para-desc mx-auto text-white-50">使用现代化、专业化的ERP 解决方案提升企业的关键业务运营</p>
                <div class="mt-4 pt-2">
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
                <h6 class="text-primary">我们秉持的价值观</h6>
                <h4 class="title mb-0 me-lg-5">用科技与创新为企业创造价值</h4>
              </div>
            </div><!--end col-->

            <div class="col-md-6">
              <div class="section-title">
                <p class="text-muted para-desc">通过行业顾问多年的专业经验，能够充分满足细分行业的各类需求，匹配快速发展的业务，将更多时间专注于业务本身</p>
                <p class="text-muted para-desc mb-0"></p>
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
                  <h5>专业的顾问团队</h5>
                  <p class="text-muted mb-0">我们专业的顾问团队具有优秀的学历与行业工作背景，致力于充分了解客户的需求和偏好，为客户量身定做专业方案建议，与客户建立长期的互信合作关系。</p>
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
                  <h5>强大的技术能力</h5>
                  <p class="text-muted mb-0"> 整体技术团队具有多年的技术积累，具备较强执行力，在不断优化现有产品线的同时，还对互联网领域的前瞻性技术进行深入地研究与应用。</p>
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
                  <h5>广泛的行业经验</h5>
                  <p class="text-muted mb-0">公司团队成员深耕企业信息化行业近十五年，始终服务于各行业的大中型企业，具有行业先发和经验优势。</p>
                  <div v-if="false" class="mt-2">
                    <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                  </div>
                </div>
              </div>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end container-->


        <div class="container"  style="margin-top:150px; margin-bottom: 50px;">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-6 col-12">
              <div class="position-relative">
                <img src="/images/erp/bg2.jpg" class="img-fluid rounded shadow-md" alt="">
                <div class="play-icon">
                </div>
              </div>
            </div><!--end col-->

            <div class="col-lg-7 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div class="ms-lg-5">
                <div class="section-title">
                  <h4 class="title fw-bold mt-2 mb-4">仓储物流解决方案</h4>
                  <p class="para-desc text-muted"> 专业的供应链物流一体化解决方案，覆盖常温、冷链、生鲜等物流中心及以仓配为中心上下游供应链的移动化协同作业，全面助力企业打造规范、高效、智能的物流信息化系统。</p>
                </div>

              </div>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end container-->

        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-6 col-12">
              <div class="position-relative">
                <img src="/images/erp/bg1.jpg" class="img-fluid rounded shadow-md" alt="">
                <div class="play-icon">
                </div>
              </div>
            </div><!--end col-->

            <div class="col-lg-7 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div class="ms-lg-5">
                <div class="section-title">
                  <h4 class="title fw-bold mt-2 mb-4">文旅行业解决方案 </h4>
                  <p class="para-desc text-muted">通过一体化的信息化平台，整合各经营业态，向游客提供优质的客户体验，形成大数据为管理与决策提供支撑，协助文旅企业有序发展。</p>
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
