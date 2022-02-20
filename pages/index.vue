<template>
  <div>
    <common-header/>
    <div>
      <!-- Hero Start -->
      <section class="bg-half-130 d-table w-100 overflow-hidden" style="background: url('/images/bg/bg-index.png');">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-7">
              <div class="heading-title">
                <h1 class="heading fw-bold mb-3"> 秉持元匠精神 <br>打造数字产品</h1>
                <p class="para-desc text-muted">企业数字化服务商</p>
                <div v-if="false" class="watch-video mt-4 pt-2">
                  <a href="javascript:void(0)" class="btn btn-primary mb-2">Get Started</a>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#watchvideomodal"
                     class="video-play-icon watch text-dark mb-2 ms-2"><i
                    class="mdi mdi-play play-icon-circle text-center d-inline-block me-2 rounded-circle text-white title-dark position-relative play play-iconbar"></i>
                    Watch Now !</a>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-lg-6 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div class="bg-saas-shape position-relative">
                <img src="/images/home1.png" class="mx-auto d-block" alt="">
              </div>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end container-->
      </section><!--end section-->
      <!-- Hero End -->

      <div v-if="false" class="container py-4">
        <div class="row justify-content-center">
          <div class="col-lg-2 col-md-2 col-6 text-center py-4 py-md-0">
            <img src="/images/client/amazon.svg" class="avatar avatar-client" alt="">
          </div><!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4 py-md-0">
            <img src="/images/client/google.svg" class="avatar avatar-client" alt="">
          </div><!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4 py-md-0">
            <img src="/images/client/lenovo.svg" class="avatar avatar-client" alt="">
          </div><!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4 py-md-0">
            <img src="/images/client/paypal.svg" class="avatar avatar-client" alt="">
          </div><!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4 py-md-0">
            <img src="/images/client/shopify.svg" class="avatar avatar-client" alt="">
          </div><!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4 py-md-0">
            <img src="/images/client/spotify.svg" class="avatar avatar-client" alt="">
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->

      <!-- Start -->
      <section v-if="false" class="section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="section-title text-center mb-4 pb-2">
                <h6 class="text-primary">Our Principles</h6>
                <h4 class="title mb-4">Explore our awesome features</h4>
                <p class="text-muted para-desc mx-auto mb-0">Explore and learn more about everything from machine
                  learning and global payments to scaling your team.</p>
              </div>
            </div><!--end col-->
          </div><!--end row-->

          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="row">
                <div class="col-md-6 mt-4 pt-2">
                  <div class="d-flex features feature-primary core-feature rounded p-4">
                    <div class="icon text-center rounded-circle me-3 mt-2">
                      <h3 class="mb-0"><i class="uil uil-airplay"></i></h3>
                    </div>
                    <div class="flex-1">
                      <h5>Responsive Design</h5>
                      <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin
                        language corresponds.</p>
                      <div class="mt-2">
                        <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right"
                                                                               class="fea icon-sm"></i></a>
                      </div>
                    </div>
                  </div>
                </div><!--end col-->

                <div class="col-md-6 mt-4 pt-2">
                  <div class="d-flex features feature-primary core-feature rounded p-4">
                    <div class="icon text-center rounded-circle me-3 mt-2">
                      <h3 class="mb-0"><i class="uil uil-browser"></i></h3>
                    </div>
                    <div class="flex-1">
                      <h5>Browser Compatibility</h5>
                      <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin
                        language corresponds.</p>
                      <div class="mt-2">
                        <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right"
                                                                               class="fea icon-sm"></i></a>
                      </div>
                    </div>
                  </div>
                </div><!--end col-->

                <div class="col-md-6 mt-4 pt-2">
                  <div class="d-flex features feature-primary core-feature rounded p-4">
                    <div class="icon text-center rounded-circle me-3 mt-2">
                      <h3 class="mb-0"><i class="uil uil-eye"></i></h3>
                    </div>
                    <div class="flex-1">
                      <h5>Retina Ready</h5>
                      <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin
                        language corresponds.</p>
                      <div class="mt-2">
                        <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right"
                                                                               class="fea icon-sm"></i></a>
                      </div>
                    </div>
                  </div>
                </div><!--end col-->

                <div class="col-md-6 mt-4 pt-2">
                  <div class="d-flex features feature-primary core-feature rounded p-4">
                    <div class="icon text-center rounded-circle me-3 mt-2">
                      <h3 class="mb-0"><i class="uil uil-heart"></i></h3>
                    </div>
                    <div class="flex-1">
                      <h5>Free Icons</h5>
                      <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin
                        language corresponds.</p>
                      <div class="mt-2">
                        <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right"
                                                                               class="fea icon-sm"></i></a>
                      </div>
                    </div>
                  </div>
                </div><!--end col-->
              </div><!--end row-->
            </div><!--end col-->

            <div class="col-12 mt-4 pt-2 text-center">
              <a href="javascript:void(0)" class="text-primary h6 mb-0">Explore all features <i
                data-feather="arrow-right" class="fea icon-sm"></i></a>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-5">
              <img src="/images/svg/coworking.svg" alt="">
            </div><!--end col-->

            <div class="col-lg-6 col-md-7">
              <div class="section-title">
                <h1 class="title mb-3">Measure to decide, <br> not just to measure.</h1>
                <p class="para-desc text-muted">Explore and learn more about everything from machine learning and global
                  payments to scaling your team.</p>
                <ul class="list-unstyled text-muted">
                  <li class="mb-0"><span class="text-primary h5 me-2"><i class="uil uil-check-circle align-middle"></i></span>Digital
                    Marketing Solutions for Tomorrow
                  </li>
                  <li class="mb-0"><span class="text-primary h5 me-2"><i class="uil uil-check-circle align-middle"></i></span>Our
                    Talented & Experienced Marketing Agency
                  </li>
                  <li class="mb-0"><span class="text-primary h5 me-2"><i class="uil uil-check-circle align-middle"></i></span>Create
                    your own skin to match your brand
                  </li>
                </ul>
                <div class="mt-4">
                  <a href="javascript:void(0)" class="btn btn-primary">Learn more</a>
                </div>
              </div>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
          <div class="row align-items-center">
            <div class="col-md-5 order-1 order-md-2">
              <img src="/images/1.png" class="img-fluid" alt="">
            </div><!--end col-->

            <div class="col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1">
              <div class="section-title">
                <h1 class="title mb-3">Collaborate with your <br> team anytime, anywhere.</h1>
                <p class="para-desc text-muted">Explore and learn more about everything from machine learning and global
                  payments to scaling your team.</p>
                <ul class="list-unstyled text-muted">
                  <li class="mb-0"><span class="text-primary h5 me-2"><i class="uil uil-check-circle align-middle"></i></span>Digital
                    Marketing Solutions for Tomorrow
                  </li>
                  <li class="mb-0"><span class="text-primary h5 me-2"><i class="uil uil-check-circle align-middle"></i></span>Our
                    Talented & Experienced Marketing Agency
                  </li>
                  <li class="mb-0"><span class="text-primary h5 me-2"><i class="uil uil-check-circle align-middle"></i></span>Create
                    your own skin to match your brand
                  </li>
                </ul>
                <div class="mt-4">
                  <a href="javascript:void(0)" class="btn btn-primary">Learn more</a>
                </div>
              </div>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
          <div class="bg-light rounded-md shadow px-4 py-5">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="section-title text-center">
                  <h4 class="title mb-4">Subscribe Our News!</h4>

                  <div class="subcribe-form mt-4 pt-2">
                    <form>
                      <div class="mb-0">
                        <input type="email" id="email" name="email" class="border bg-white rounded-pill" required
                               placeholder="Email Address">
                        <button type="submit" class="btn btn-pills btn-primary">Get Started</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div><!--end col-->
            </div><!--end row-->
          </div>
        </div><!--end container-->

        <div class="container mt-100 mt-60">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="section-title text-center mb-4 pb-2">
                <h6 class="text-primary">Our Pricing</h6>
                <h4 class="title mb-4">Comfortable Plans</h4>
                <p class="text-muted para-desc mx-auto mb-0">Explore and learn more about everything from machine
                  learning and global payments to scaling your team.</p>
              </div>
            </div><!--end col-->
          </div><!--end row-->

          <div class="row justify-content-center">
            <div class="col-lg-9">
              <div class="mt-4 pt-2">
                <div class="rounded shadow p-4">
                  <div class="row align-items-center">
                    <div class="col-md-3">
                      <h5>Free</h5>
                      <div class="d-flex text-primary">
                        <span class="h6 mb-0 mt-2">$</span>
                        <span class="price h2 mb-0">0</span>
                        <span class="h6 align-self-end mb-1"> /month</span>
                      </div>
                    </div><!--end col-->

                    <div class="col-md-6 mt-4 mt-sm-0">
                      <p class="text-muted mb-0">This is required when, for example, the final text is not yet
                        available. Dummy text is also known as 'fill text'. </p>
                    </div><!--end col-->

                    <div class="col-md-3 mt-4 mt-sm-0 text-center text-md-end">
                      <div class="d-grid">
                        <a href="javascript:void(0)" class="btn btn-outline-primary">Free</a>
                      </div>
                    </div><!--end col-->
                  </div><!--end row-->
                </div>
              </div>

              <div class="pt-2">
                <div class="rounded shadow p-4">
                  <div class="row align-items-center">
                    <div class="col-md-3">
                      <h5>Standard</h5>
                      <div class="d-flex text-primary">
                        <span class="h6 mb-0 mt-2">$</span>
                        <span class="price h2 mb-0">19</span>
                        <span class="h6 align-self-end mb-1"> /month</span>
                      </div>
                    </div><!--end col-->

                    <div class="col-md-6 mt-4 mt-sm-0">
                      <p class="text-muted mb-0">This is required when, for example, the final text is not yet
                        available. Dummy text is also known as 'fill text'. </p>
                    </div><!--end col-->

                    <div class="col-md-3 mt-4 mt-sm-0 text-center text-md-end">
                      <div class="d-grid">
                        <a href="javascript:void(0)" class="btn btn-soft-primary">Buy Now</a>
                      </div>
                    </div><!--end col-->
                  </div><!--end row-->
                </div>
              </div>

              <div class="pt-2">
                <div class="rounded shadow p-4">
                  <div class="row align-items-center">
                    <div class="col-md-3">
                      <h5>Business</h5>
                      <div class="d-flex text-primary">
                        <span class="h6 mb-0 mt-2">$</span>
                        <span class="price h2 mb-0">49</span>
                        <span class="h6 align-self-end mb-1"> /month</span>
                      </div>
                    </div><!--end col-->

                    <div class="col-md-6 mt-4 mt-sm-0">
                      <p class="text-muted mb-0">This is required when, for example, the final text is not yet
                        available. Dummy text is also known as 'fill text'. </p>
                    </div><!--end col-->

                    <div class="col-md-3 mt-4 mt-sm-0 text-center text-md-end">
                      <div class="d-grid">
                        <a
                          href="https://wrapbootstrap.com/theme/landflow-landing-template-dark-rtl-WB0SL3408?ref=shreethemesstudio"
                          target="_blank" class="btn btn-primary">Buy Now</a>
                      </div>
                    </div><!--end col-->
                  </div><!--end row-->
                </div>
              </div>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end container-->
      </section><!--end section-->
      <!-- End -->
    </div>
    <common-footer/>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
