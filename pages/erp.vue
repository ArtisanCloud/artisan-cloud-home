<template>
  <layout-normal is-nav-light is-logo-light>
    <!-- Start -->
    <section class="bg-half-170 d-table w-100 bg-primary" style="background: url('/images/bg/bg-broker.png') bottom;">
      <div class="container">
        <div class="row mt-5">
          <div class="col-12">
            <div class="heading-title">
              <h4 class="display-4 fw-bold text-white title-dark">企业资源规划 (ERP)</h4>
              <p class="text-white-50 para-desc mb-0">为当今企业创造机会</p>
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
    <!-- End -->


    <!-- Start -->
    <section class="section">
      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-left">
              <h2 class="mb-4">为您的行业而生</h2>
              <p class="text-muted para-desc mx-auto mb-0">充分利用内置的90%特定于行业的功能，这样您的企业就可以专注于开发独特的流程</p>
            </div>
            <div class="section-title text-center">
              <h2 class="mb-4">云与技术生态系统</h2>
              <p class="text-muted para-desc mx-auto mb-0">利用支持集成、工作流、上下文BI、可扩展性、物联网和AI的全球云基础设施</p>
            </div>
            <div class="section-title text-right">
              <h2 class="mb-4">数据和分析</h2>
              <p class="text-muted para-desc mx-auto mb-0">在整个企业中实现快速的、数据驱动的决策，并使关键kpi指标与部门目标保持一致</p>
            </div>

            <div class="section-title text-right">
              <h2 class="mb-4">安全及风险管理</h2>
              <p class="text-muted para-desc mx-auto mb-0">依靠基于标准的安全性、风险和故障转移管理、攻击预防和过程来提高安全性</p>
            </div>

            <div class="section-title text-right">
              <h2 class="mb-4">敏捷部署</h2>
              <p class="text-muted para-desc mx-auto mb-0">通过实现加速器 (IA) 加速实现价值的时间，并获得附加功能的可伸缩性</p>
            </div>

          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->

      <div class="container">
        <div v-if="false" class="row align-items-center">
          <div class="col-md-6 order-1 order-md-2 mt-5 mt-lg-0">
            <div class="section-title">
              <h4 class="title mb-4">Great Service and Big Savings</h4>
              <p class="para=desc text-muted">Regardless of how or what you trade, the broker you choose should be safe to use, affordable, and offer everything you need to trade at your best.</p>
              <p class="para-desc text-muted">That’s why we’re highly selective. We only feature brokers regulated by a trusted authority and we make it easy to compare their fees & features, so that you can make an informed choice.</p>
              <div class="mt-4">
                <a href="javascript:void(0)" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-md-6 order-2 order-md-1">
            <img src="/images/svg/business-deal.svg" class="img-fluid" alt="">
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->

      <div v-if="false" class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="section-title me-lg-5 mb-4 pt-2 mb-lg-0 pb-lg-0 text-lg-start text-center">
              <h4 class="title mb-4">Brokerage Calculator</h4>
              <p class="para-desc mx-auto ms-lg-0 text-muted">Use the brokerage calculator to calculate exactly how much you will pay in brokerage and your breakeven.</p>
            </div>
          </div><!--end col-->

          <div class="col-lg-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div class="p-4 shadow rounded" role="form">
              <ul class="list-unstyled d-flex justify-content-between mb-0">
                <li class="h6 mb-0">Min $ 10000</li>
                <li class="h6 mb-0">Max $ 200000</li>
              </ul>

              <div class="row">
                <div class="col-sm-12 mb-4">
                  <label for="slider" class="form-label"></label>
                  <input type="range" value="10000" min="10000" max="200000" class="form-range custom-range" id="slider">
                </div><!--end col-->
              </div><!--end row-->

              <ul class="list-unstyled text-center d-md-flex justify-content-between mb-0">
                <li>
                  <ul class="mb-0 text-md-start brokerage-form list-unstyled">
                    <li class="h5 mb-0"><label class="control-label">Total Value ($)</label></li>
                    <li class="h5 mb-0"><input type="hidden" id="amount" class="form-control"><span class="text-primary">$</span><p class="mb-0 d-inline-block h5 text-primary" id="amount-label"></p></li>
                  </ul>
                </li>

                <li class="mt-2 mt-sm-0">
                  <ul class="mb-0 text-md-end brokerage-form list-unstyled">
                    <li class="h5 mb-0"><label class="control-label">Brokerage Fee</label></li>
                    <li class="h5 mb-0"><input type="hidden" id="saving" class="form-control mb-0"> <p class="mb-0 d-inline-block h5 text-primary" id="saving-label"></p></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!---end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-md-6 order-1 order-md-2">
            <div class="section-title">
              <h4 class="title mb-4">我们让数据说话</h4>
              <p class="para=desc text-muted">我们提供丰富的数据报表</p>
              <ul class="list-unstyled text-muted h6 mb-0">
                <li class="list-inline-item me-lg-5 me-4"><span class="text-primary h3 me-2"><i class="uil uil-receipt"></i></span>客流统计</li>
                <li class="list-inline-item me-lg-5 me-4"><span class="text-primary h3 me-2"><i class="uil uil-file-shield-alt"></i></span>安全提示</li>
                <li class="list-inline-item me-lg-5 me-4"><span class="text-primary h3 me-2"><i class="uil uil-user"></i></span>用户跟踪</li>
                <li class="list-inline-item me-lg-5 me-4"><span class="text-primary h3 me-2"><i class="uil uil-meeting-board"></i></span>客户转化</li>
                <li class="list-inline-item me-lg-5 me-4"><span class="text-primary h3 me-2"><i class="uil uil-chart-bar"></i></span>预测分析</li>
              </ul>
              <div class="mt-4">
                <a href="javascript:void(0)" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="card border-0 shadow rounded me-lg-4">
              <div class="p-2">
                <a href="javascript:void(0)" class="text-danger"><i class="mdi mdi-circle"></i></a>
                <a href="javascript:void(0)" class="text-warning"><i class="mdi mdi-circle"></i></a>
                <a href="javascript:void(0)" class="text-success"><i class="mdi mdi-circle"></i></a>
              </div>
              <div class="bg-light card-body p-md-4 p-2">
                <img src="/images/saas/dashboard.png" alt="" class="img-fluid mx-auto d-block">
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
  name: "marketing",
  components: {LayoutNormal}
}
</script>

<style scoped>

</style>
