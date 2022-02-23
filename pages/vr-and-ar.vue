<template>
  <div>
    <common-header is-nav-light is-logo-light/>
    <div>
      <!-- Hero Start -->
      <section class="home-slider position-relative">
        <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
              <div class="bg-home bg-animation-left d-flex align-items-center" style="background-image:url('/images/business/bg1.jpg')">
                <div class="bg-overlay"></div>
                <div class="container">
                  <div class="row justify-content-center mt-5">
                    <div class="col-12">
                      <div class="title-heading text-center mt-4">
                        <h1 class="display-4 text-white title-dark fw-bold mb-3">VR & AR</h1>
                        <p class="para-desc text-white-50 mx-auto para-dark">探索虚拟世界的新玩法</p>
                        <div class="mt-4">
                          <a href="javascript:void(0)" class="btn btn-primary">添加企业微信</a>
                        </div>
                        <div class="mt-4">
                          <img src="/images/contactus/contact-qr-matrix-x.a5ec6a09.png" class="img-fluid m-2" style="width: 20%" alt="">
                          <img src="/images/contactus/contact-qr-walle.b970715f.png" class="img-fluid m-2" style="width: 20%" alt="">
                        </div>
                      </div>
                    </div><!--end col-->
                  </div><!--end row-->
                </div><!--end container-->
              </div>
            </div>
            <div v-if="false" class="carousel-item" data-bs-interval="3000">
              <div class="bg-home bg-animation-left d-flex align-items-center" style="background-image:url('/images/business/bg2.jpg')">
                <div class="bg-overlay"></div>
                <div class="container">
                  <div class="row justify-content-center mt-5">
                    <div class="col-12">
                      <div class="title-heading text-center mt-4">
                        <h1 class="display-4 text-white title-dark fw-bold mb-3">Start your successful <br> business with landflow</h1>
                        <p class="para-desc text-white-50 mx-auto para-dark">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        <div class="mt-4">
                          <a href="javascript:void(0)" class="btn btn-primary">Contact Now</a>
                        </div>
                      </div>
                    </div><!--end col-->
                  </div><!--end row-->
                </div><!--end container-->
              </div>
            </div>

            <div v-if="false" class="carousel-item" data-bs-interval="3000">
              <div class="bg-home bg-animation-left d-flex align-items-center" style="background-image:url('/images/business/bg3.jpg')">
                <div class="bg-overlay"></div>
                <div class="container">
                  <div class="row justify-content-center mt-5">
                    <div class="col-12">
                      <div class="title-heading text-center mt-4">
                        <h1 class="display-4 text-white title-dark fw-bold mb-3">Join best enterprises <br> in france and europe</h1>
                        <p class="para-desc text-white-50 mx-auto para-dark">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        <div class="mt-4">
                          <a href="javascript:void(0)" class="btn btn-primary">Learn More</a>
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

      <!-- Start -->
      <section v-if="false" class="section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="position-relative me-lg-5">
                <img src="/images/business/about.png" class="img-fluid" alt="">
                <div class="play-icon">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#watchvideomodal" class="play-btn video-play-icon">
                    <i class="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                  </a>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-md-6 mt-4 mt-sm-0 pt-4 pt-sm-0">
              <div class="section-title">
                <span class="badge rounded-pill bg-soft-primary">Who we are ?</span>
                <h4 class="title mt-3 mb-4">Professional Investment & <br> strategy company</h4>
                <p class="text-muted para-desc mb-0">Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
                <ul class="list-unstyled text-muted mb-0 mt-4">
                  <li class="list-inline-item me-lg-5 me-4"><span class="text-primary h5 me-2"><i class="uil uil-check-circle align-middle"></i></span>Organize your data</li>
                  <li class="list-inline-item me-lg-5 me-4"><span class="text-primary h5 me-2"><i class="uil uil-check-circle align-middle"></i></span>Work with any team</li>
                  <li class="list-inline-item me-lg-5 me-4"><span class="text-primary h5 me-2"><i class="uil uil-check-circle align-middle"></i></span>Business analytics</li>
                </ul>
                <div class="mt-4">
                  <a href="javascript:void(0)" class="btn btn-primary">See More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                </div>
              </div>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="section-title text-center mb-4 pb-2">
                <h4 class="title mb-4">Our Services</h4>
                <p class="text-muted para-desc mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
              </div>
            </div><!--end col-->
          </div><!--end row-->

          <div class="row">
            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="card features feature-primary rounded p-4 text-center border-0">
                <div class="icon text-center rounded-md mx-auto">
                  <h3 class="mb-0"><i class="uil uil-airplay"></i></h3>
                </div>
                <div class="card-body p-0 mt-4">
                  <h5>Responsive Design</h5>
                  <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                  <div class="mt-2">
                    <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                  </div>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="card features feature-primary rounded p-4 text-center border-0">
                <div class="icon text-center rounded-md mx-auto">
                  <h3 class="mb-0"><i class="uil uil-browser"></i></h3>
                </div>
                <div class="card-body p-0 mt-4">
                  <h5>Browser Compatibility</h5>
                  <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                  <div class="mt-2">
                    <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                  </div>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="card features feature-primary rounded p-4 text-center border-0">
                <div class="icon text-center rounded-md mx-auto">
                  <h3 class="mb-0"><i class="uil uil-eye"></i></h3>
                </div>
                <div class="card-body p-0 mt-4">
                  <h5>Retina Ready</h5>
                  <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                  <div class="mt-2">
                    <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                  </div>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="card features feature-primary rounded p-4 text-center border-0">
                <div class="icon text-center rounded-md mx-auto">
                  <h3 class="mb-0"><i class="uil uil-heart"></i></h3>
                </div>
                <div class="card-body p-0 mt-4">
                  <h5>Free Icons</h5>
                  <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                  <div class="mt-2">
                    <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                  </div>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="card features feature-primary rounded p-4 text-center border-0">
                <div class="icon text-center rounded-md mx-auto">
                  <h3 class="mb-0"><i class="uil uil-bolt-alt"></i></h3>
                </div>
                <div class="card-body p-0 mt-4">
                  <h5>Unlimited Power</h5>
                  <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                  <div class="mt-2">
                    <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                  </div>
                </div>
              </div>
            </div><!--end col-->

            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="card features feature-primary rounded p-4 text-center border-0">
                <div class="icon text-center rounded-md mx-auto">
                  <h3 class="mb-0"><i class="uil uil-pentagon"></i></h3>
                </div>
                <div class="card-body p-0 mt-4">
                  <h5>Professional Design</h5>
                  <p class="text-muted mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                  <div class="mt-2">
                    <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                  </div>
                </div>
              </div>
            </div><!--end col-->
          </div><!--end row-->
        </div><!--end container-->

        <div class="container-fluid mt-100 mt-60">
          <div class="py-5 rounded" style="background: url('/images/bg/testi.jpg') center left;">
            <div class="container">
              <div class="row py-md-5 py-4">
                <div class="col-lg-4 col-md-6">
                  <div class="bg-white rounded px-4 py-5">
                    <div class="tiny-single-item">
                      <div class="tiny-slide">
                        <div class="customer-testi">
                          <p class="text-muted fst-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                          <div class="d-flex align-items-center mt-4">
                            <img src="/images/client/01.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="">
                            <div class="flex-1 ms-3">
                              <h6 class="text-primary mb-0">Thomas Israel</h6>
                              <small class="text-muted">C.E.O</small>
                            </div>
                          </div>
                        </div><!--end customer testi-->
                      </div>

                      <div class="tiny-slide">
                        <div class="customer-testi">
                          <p class="text-muted fst-italic">" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout. "</p>
                          <div class="d-flex align-items-center mt-4">
                            <img src="/images/client/02.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="">
                            <div class="flex-1 ms-3">
                              <h6 class="text-primary mb-0">Carl Oliver</h6>
                              <small class="text-muted">P.A</small>
                            </div>
                          </div>
                        </div><!--end customer testi-->
                      </div>

                      <div class="tiny-slide">
                        <div class="customer-testi">
                          <p class="text-muted fst-italic">" There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories. "</p>
                          <div class="d-flex align-items-center mt-4">
                            <img src="/images/client/03.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="">
                            <div class="flex-1 ms-3">
                              <h6 class="text-primary mb-0">Barbara McIntosh</h6>
                              <small class="text-muted">M.D</small>
                            </div>
                          </div>
                        </div><!--end customer testi-->
                      </div>

                      <div class="tiny-slide">
                        <div class="customer-testi">
                          <p class="text-muted fst-italic">" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find "</p>
                          <div class="d-flex align-items-center mt-4">
                            <img src="/images/client/04.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="">
                            <div class="flex-1 ms-3">
                              <h6 class="text-primary mb-0">Christa Smith</h6>
                              <small class="text-muted">Manager</small>
                            </div>
                          </div>
                        </div><!--end customer testi-->
                      </div>

                      <div class="tiny-slide">
                        <div class="customer-testi">
                          <p class="text-muted fst-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                          <div class="d-flex align-items-center mt-4">
                            <img src="/images/client/05.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="">
                            <div class="flex-1 ms-3">
                              <h6 class="text-primary mb-0">Dean Tolle</h6>
                              <small class="text-muted">Developer</small>
                            </div>
                          </div>
                        </div><!--end customer testi-->
                      </div>

                      <div class="tiny-slide">
                        <div class="customer-testi">
                          <p class="text-muted fst-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. "</p>
                          <div class="d-flex align-items-center mt-4">
                            <img src="/images/client/06.jpg" class="img-fluid avatar avatar-small rounded-circle shadow" alt="">
                            <div class="flex-1 ms-3">
                              <h6 class="text-primary mb-0">Jill Webb</h6>
                              <small class="text-muted">Designer</small>
                            </div>
                          </div>
                        </div><!--end customer testi-->
                      </div>
                    </div><!--end owl carousel-->
                  </div>
                </div><!--end col-->
              </div><!--end row-->
            </div><!--end container-->
          </div>
        </div><!--end container-->

        <div class="container mt-100 mt-60">
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

        <div class="container mt-100 mt-60">
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

      <div v-if="false" class="container-fluid px-0">
        <div class="py-5 bg-footer">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-8">
                <div class="section-title">
                  <div class="d-flex">
                    <i class="uil uil-envelope-star display-4 text-white title-dark"></i>
                    <div class="flex-1 ms-md-4 ms-3">
                      <h4 class="fw-bold text-light title-dark mb-1">Subscribe to our newsletters</h4>
                      <p class="text-white-50 mb-0">Sign up and receive the latest tips via email.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mt-4 mt-sm-0">
                <div class="text-md-end ms-5 ms-sm-0">
                  <a href="javascript:void(0)" class="btn btn-primary">Subscribe Now</a>
                </div>
              </div><!--end col-->
            </div><!--end row-->
          </div><!--end container-->
        </div><!--end div-->
      </div><!--end container-->
      <!-- End -->
    </div>
    <common-footer />
  </div>
</template>

<script>
export default {
  name: "vr-and-ar"
}
</script>

<style scoped>

</style>
