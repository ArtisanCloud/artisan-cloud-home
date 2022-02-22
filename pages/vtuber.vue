<template>
  <layout-normal>

    <!-- Start -->
    <section class="bg-hero pb-0 bg-light home-wrapper d-table w-100 overflow-hidden">
      <div class="container">
        <div class="row mt-5 align-items-center">
          <div class="col-md-6">
            <div class="heading-title">
              <h4>VTuber</h4>
              <h4 class="display-3 fw-bold mb-4">虚拟主播方案</h4>
              <p class="text-muted para-desc mb-0">品牌自创IP角色，手持元宇宙的门票</p>

              <div class="mt-4 align-items-center">
                <a href="javascript:void(0)" class="btn btn-primary">查看</a>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <img src="/images/vtuber/preview-h.png" class="img-fluid" alt="">
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
    <section class="section" id="about">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6 col-12">
            <div class="position-relative">
              <img src="/images/vtuber/aboutme.png" class="img-fluid rounded shadow-md" alt="">
              <div class="play-icon">
                <a href="#" data-bs-toggle="modal" data-bs-target="#watchvideomodal" class="play-btn video-play-icon">
                  <i class="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                </a>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-lg-7 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="ms-lg-5">
              <div class="section-title">
                <span class="badge rounded-pill bg-soft-primary h6">About Me</span>
                <h4 class="title fw-bold mt-2 mb-4">定制设计 <br> 2.5D 3D建模</h4>
                <p class="para-desc text-muted">虚拟主播可以活跃在任何时间，空间上</p>
              </div>

              <div class="progress-box">
                <h6 class="title text-muted">降低成本</h6>
                <div class="progress">
                  <div class="progress-bar position-relative bg-primary" style="width:84%;">
                    <div class="progress-value d-block text-muted h6"></div>
                  </div>
                </div>
              </div><!--end process box-->
              <div class="progress-box mt-4">
                <h6 class="title text-muted">灵活性强</h6>
                <div class="progress">
                  <div class="progress-bar position-relative bg-success" style="width:79%;">
                    <div class="progress-value d-block text-muted h6"></div>
                  </div>
                </div>
              </div><!--end process box-->
              <div class="progress-box mt-4">
                <h6 class="title text-muted">多渠道覆盖</h6>
                <div class="progress">
                  <div class="progress-bar position-relative bg-warning" style="width:95%;">
                    <div class="progress-value d-block text-muted h6"></div>
                  </div>
                </div>
              </div><!--end process box-->
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->

      <div v-if="false" class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h4 class="title mt-3 mb-4">What i offer ?</h4>
              <p class="para-desc mx-auto text-muted mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
            </div>
          </div><!--end col-->
        </div><!--end row-->

        <div class="row">
          <div class="col-lg-4 col-md-6 mt-4 pt-3">
            <div class="card border-0 text-center features feature-primary">
              <div class="icon text-center mx-auto rounded-md">
                <h3 class="mb-0"><i class="uil uil-airplay"></i></h3>
              </div>

              <div class="card-body p-0 mt-4">
                <h5>UX / UI Design</h5>
                <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-lg-4 col-md-6 mt-4 pt-3">
            <div class="card border-0 text-center features feature-primary">
              <div class="icon text-center mx-auto rounded-md">
                <h3 class="mb-0"><i class="uil uil-mobile-android"></i></h3>
              </div>

              <div class="card-body p-0 mt-4">
                <h5>Ios App Designer</h5>
                <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-lg-4 col-md-6 mt-4 pt-3">
            <div class="card border-0 text-center features feature-primary">
              <div class="icon text-center mx-auto rounded-md">
                <h3 class="mb-0"><i class="uil uil-shutter"></i></h3>
              </div>

              <div class="card-body p-0 mt-4">
                <h5>Photography</h5>
                <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-lg-4 col-md-6 mt-4 pt-3">
            <div class="card border-0 text-center features feature-primary">
              <div class="icon text-center mx-auto rounded-md">
                <h3 class="mb-0"><i class="uil uil-image-resize-square"></i></h3>
              </div>

              <div class="card-body p-0 mt-4">
                <h5>Graphic Designer</h5>
                <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-lg-4 col-md-6 mt-4 pt-3">
            <div class="card border-0 text-center features feature-primary">
              <div class="icon text-center mx-auto rounded-md">
                <h3 class="mb-0"><i class="uil uil-user"></i></h3>
              </div>

              <div class="card-body p-0 mt-4">
                <h5>Customer Care</h5>
                <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-lg-4 col-md-6 mt-4 pt-3">
            <div class="card border-0 text-center features feature-primary">
              <div class="icon text-center mx-auto rounded-md">
                <h3 class="mb-0"><i class="uil uil-shield-check"></i></h3>
              </div>

              <div class="card-body p-0 mt-4">
                <h5>Web Security</h5>
                <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
              </div>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

    <!-- Start -->
    <section v-if="false" class="section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title mb-4 pb-2">
              <span class="badge rounded-pill bg-soft-primary h6">Portfolio</span>
              <h4 class="title mt-2 mb-4">Latest Projects & Works</h4>
              <p class="para-desc text-muted mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
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
                      <a href="javascript:void(0)"><img src="/images/work/1.jpg" class="img-fluid work-image" alt=""></a>
                      <div class="content p-4">
                        <h5 class="mb-0"><a href="javascript:void(0)" class="text-dark title">Iphone mockup</a></h5>
                        <h6 class="text-muted tag mb-0">Branding</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="card border-0 work-container m-3 work-danger work-border overflow-hidden rounded-md">
                    <div class="card-body p-0">
                      <a href="javascript:void(0)"><img src="/images/work/2.jpg" class="img-fluid work-image" alt=""></a>
                      <div class="content p-4">
                        <h5 class="mb-0"><a href="javascript:void(0)" class="text-dark title">Iphone mockup</a></h5>
                        <h6 class="text-muted tag mb-0">Branding</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="card border-0 work-container m-3 work-info work-border overflow-hidden rounded-md">
                    <div class="card-body p-0">
                      <a href="javascript:void(0)"><img src="/images/work/3.jpg" class="img-fluid work-image" alt=""></a>
                      <div class="content p-4">
                        <h5 class="mb-0"><a href="javascript:void(0)" class="text-dark title">Iphone mockup</a></h5>
                        <h6 class="text-muted tag mb-0">Branding</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="card border-0 work-container m-3 work-success work-border overflow-hidden rounded-md">
                    <div class="card-body p-0">
                      <a href="javascript:void(0)"><img src="/images/work/4.jpg" class="img-fluid work-image" alt=""></a>
                      <div class="content p-4">
                        <h5 class="mb-0"><a href="javascript:void(0)" class="text-dark title">Iphone mockup</a></h5>
                        <h6 class="text-muted tag mb-0">Branding</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="card border-0 work-container m-3 work-warning work-border overflow-hidden rounded-md">
                    <div class="card-body p-0">
                      <a href="javascript:void(0)"><img src="/images/work/5.jpg" class="img-fluid work-image" alt=""></a>
                      <div class="content p-4">
                        <h5 class="mb-0"><a href="javascript:void(0)" class="text-dark title">Iphone mockup</a></h5>
                        <h6 class="text-muted tag mb-0">Branding</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="card border-0 work-container m-3 work-success work-border overflow-hidden rounded-md">
                    <div class="card-body p-0">
                      <a href="javascript:void(0)"><img src="/images/work/6.jpg" class="img-fluid work-image" alt=""></a>
                      <div class="content p-4">
                        <h5 class="mb-0"><a href="javascript:void(0)" class="text-dark title">Iphone mockup</a></h5>
                        <h6 class="text-muted tag mb-0">Branding</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="card border-0 work-container m-3 work-danger work-border overflow-hidden rounded-md">
                    <div class="card-body p-0">
                      <a href="javascript:void(0)"><img src="/images/work/7.jpg" class="img-fluid work-image" alt=""></a>
                      <div class="content p-4">
                        <h5 class="mb-0"><a href="javascript:void(0)" class="text-dark title">Iphone mockup</a></h5>
                        <h6 class="text-muted tag mb-0">Branding</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="card border-0 work-container m-3 work-info work-border overflow-hidden rounded-md">
                    <div class="card-body p-0">
                      <a href="javascript:void(0)"><img src="/images/work/8.jpg" class="img-fluid work-image" alt=""></a>
                      <div class="content p-4">
                        <h5 class="mb-0"><a href="javascript:void(0)" class="text-dark title">Iphone mockup</a></h5>
                        <h6 class="text-muted tag mb-0">Branding</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="card border-0 work-container m-3 work-warning work-border overflow-hidden rounded-md">
                    <div class="card-body p-0">
                      <a href="javascript:void(0)"><img src="/images/work/9.jpg" class="img-fluid work-image" alt=""></a>
                      <div class="content p-4">
                        <h5 class="mb-0"><a href="javascript:void(0)" class="text-dark title">Iphone mockup</a></h5>
                        <h6 class="text-muted tag mb-0">Branding</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

    <!-- Start Counter -->
    <section v-if="false" class="py-5 bg-primary" style="background: url('/images/bg/bg-lines-two.png') center center;">
      <div class="container">
        <div class="row" id="counter">
          <div class="col-lg-3 col-6">
            <div class="counter-box rounded py-3 text-center">
              <div class="counter-icon">
                <i data-feather="smile" class="fea icon-md text-white-50"></i>
              </div>
              <h3 class="counter-value mt-3 text-white title-dark" data-target="1251">95</h3>
              <h6 class="counter-head fw-normal mb-0 text-white-50 title-dark">Happy Client</h6>
            </div><!--end counter box-->
          </div><!--end col-->

          <div class="col-lg-3 col-6">
            <div class="counter-box rounded py-3 text-center">
              <div class="counter-icon">
                <i data-feather="award" class="fea icon-md text-white-50"></i>
              </div>
              <h3 class="counter-value mt-3 text-white title-dark" data-target="15">1</h3>
              <h6 class="counter-head fw-normal mb-0 text-white-50 title-dark">Award Won</h6>
            </div><!--end counter box-->
          </div><!--end col-->

          <div class="col-lg-3 col-6">
            <div class="counter-box rounded py-3 text-center">
              <div class="counter-icon">
                <i data-feather="coffee" class="fea icon-md text-white-50"></i>
              </div>
              <h3 class="counter-value mt-3 text-white title-dark" data-target="3261">30</h3>
              <h6 class="counter-head fw-normal mb-0 text-white-50 title-dark">Cup of Coffee</h6>
            </div><!--end counter box-->
          </div><!--end col-->

          <div class="col-lg-3 col-6">
            <div class="counter-box rounded py-3 text-center">
              <div class="counter-icon">
                <i data-feather="thumbs-up" class="fea icon-md text-white-50"></i>
              </div>
              <h3 class="counter-value mt-3 text-white title-dark" data-target="36">3</h3>
              <h6 class="counter-head fw-normal mb-0 text-white-50 title-dark">Project Complete</h6>
            </div><!--end counter box-->
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </section><!--end section-->
    <!-- End Counter -->

    <!-- Start Testi -->
    <section v-if="false" class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h4 class="title mb-4">Client's Review</h4>
              <p class="para-desc mx-auto text-muted mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
            </div>
          </div><!--end col-->
        </div><!--end row-->

        <div class="row">
          <div class="col-12 mt-4 pt-2">
            <div class="tiny-two-item">
              <div class="tiny-slide">
                <div class="card border-0 customer-testi p-4 pt-5 shadow rounded-md m-2 overflow-hidden">
                  <p class="text-muted fst-italic">" It seems that only fragments of the original text remain in the used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>

                  <div class="d-flex align-items-center mt-3">
                    <img src="/images/client/01.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="">
                    <div class="flex-1 ms-3">
                      <h6 class="text-primary mb-0">Thomas Israel</h6>
                      <small class="text-muted">C.E.O</small>
                    </div>
                  </div>
                  <div class="quote">
                    <i class="mdi mdi-format-quote-close"></i>
                  </div>
                </div><!--end customer testi-->
              </div>

              <div class="tiny-slide">
                <div class="card border-0 customer-testi p-4 pt-5 shadow rounded-md m-2 overflow-hidden">
                  <p class="text-muted fst-italic">" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout. "</p>
                  <div class="d-flex align-items-center mt-3">
                    <img src="/images/client/02.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="">
                    <div class="flex-1 ms-3">
                      <h6 class="text-primary mb-0">Carl Oliver</h6>
                      <small class="text-muted">P.A</small>
                    </div>
                  </div>
                  <div class="quote">
                    <i class="mdi mdi-format-quote-close"></i>
                  </div>
                </div><!--end customer testi-->
              </div>

              <div class="tiny-slide">
                <div class="card border-0 customer-testi p-4 pt-5 shadow rounded-md m-2 overflow-hidden">
                  <p class="text-muted fst-italic">" There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories. "</p>
                  <div class="d-flex align-items-center mt-3">
                    <img src="/images/client/03.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="">
                    <div class="flex-1 ms-3">
                      <h6 class="text-primary mb-0">Barbara McIntosh</h6>
                      <small class="text-muted">M.D</small>
                    </div>
                  </div>
                  <div class="quote">
                    <i class="mdi mdi-format-quote-close"></i>
                  </div>
                </div><!--end customer testi-->
              </div>

              <div class="tiny-slide">
                <div class="card border-0 customer-testi p-4 pt-5 shadow rounded-md m-2 overflow-hidden">
                  <p class="text-muted fst-italic">" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find "</p>
                  <div class="d-flex align-items-center mt-3">
                    <img src="/images/client/04.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="">
                    <div class="flex-1 ms-3">
                      <h6 class="text-primary mb-0">Christa Smith</h6>
                      <small class="text-muted">Manager</small>
                    </div>
                  </div>
                  <div class="quote">
                    <i class="mdi mdi-format-quote-close"></i>
                  </div>
                </div><!--end customer testi-->
              </div>

              <div class="tiny-slide">
                <div class="card border-0 customer-testi p-4 pt-5 shadow rounded-md m-2 overflow-hidden">
                  <p class="text-muted fst-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                  <div class="d-flex align-items-center mt-3">
                    <img src="/images/client/05.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="">
                    <div class="flex-1 ms-3">
                      <h6 class="text-primary mb-0">Dean Tolle</h6>
                      <small class="text-muted">Developer</small>
                    </div>
                  </div>
                  <div class="quote">
                    <i class="mdi mdi-format-quote-close"></i>
                  </div>
                </div><!--end customer testi-->
              </div>

              <div class="tiny-slide">
                <div class="card border-0 customer-testi p-4 pt-5 shadow rounded-md m-2 overflow-hidden">
                  <p class="text-muted fst-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. "</p>
                  <div class="d-flex align-items-center mt-3">
                    <img src="/images/client/06.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="">
                    <div class="flex-1 ms-3">
                      <h6 class="text-primary mb-0">Jill Webb</h6>
                      <small class="text-muted">Designer</small>
                    </div>
                  </div>
                  <div class="quote">
                    <i class="mdi mdi-format-quote-close"></i>
                  </div>
                </div><!--end customer testi-->
              </div><!--end owl carousel-->
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
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
    <!-- End Testi -->
  </layout-normal>
</template>

<script>
import LayoutNormal from "~/pages/layout/normal";
export default {
  name: "vtuber",
  components: {LayoutNormal}
}
</script>

<style scoped>

</style>
