/* INFOSITE JSON SKELETON*/
let json = {
	"app": {
		"app-server": {
			"path": "/infosites/IS-template-22.14"
		},
		"image-server": {
			"path": "/pi/sites/infosite/IS-template-22.14"
		}
	},
	"tracking": {
		"RTS-timer": 5,
		"SF-Number": "123456.25",
		"brandName": "Medscape",
		"brandId": "3001",
		"productName": "infosite",
		"productId": "19",
		"partnerCreativeId": "",
		"CP": {
			"appName": "infosite",
			"activityId": "82043",
			"activityName": "infosite",
			"tacticId": "69420"
		}
	},
	"templates": [{
			"name": "default",
			"type": "",
			"nav-anchor": "",
			"modal": {
				"enable": false,
				"config-id": "indications"
			},
			"indications": {
				"path": "",
				"header": "",
				"article": false,
				"drawer": false
			},
			"isi": {
				"path": "/templates/isi",
				"header": "<span id='isi'>Important Safety Information</span>",
				"article": true,
				"drawer": true
			},
			"header": {
				"path": "/templates/header"
			},
			"footer": {
				"path": "/templates/footer"
			},
			"side-drawer": {
				"path": "/templates/side-drawer"
			},
			"classes": {
				"main-content": "",
				"navigation": "",
				"article": ""
			}
		},
		{
			"name": "doubleScroll",
			"type": "",
			"nav-anchor": "",
			"modal": {
				"enable": false,
				"config-id": "indications"
			},
			"indications": {
				"path": "/templates/indications",
				"header": "Indications",
				"article": true,
				"drawer": true
			},
			"isi": {
				"path": "/templates/isi",
				"header": "<span id='isi' class='jumpTarget'>Important Safety Information</span>",
				"article": true,
				"drawer": true
			},
			"header": {
				"path": "/templates/header"
			},
			"footer": {
				"path": "/templates/footer"
			},
			"side-drawer": {
				"path": "/templates/side-drawer"
			},
			"classes": {
				"main-content": "container",
				"navigation": "",
				"article": ""
			}
		}
	],
	"pages": [{
			"route": "/",
			"path": "/articles/home",
			"template": "default",
			"meta-data": {
				"title": "Homepage",
				"titleTag": "Information from Industry",
				"description": "Homepage"
			}
		},
		{
			"route": "/isarticle-1",
			"path": "/articles/article-1",
			"template": "default",
			"meta-data": {
				"title": "Treatment Guidelines",
				"titleTag": "Information from Industry",
				"description": "Treatment Guidelines"
			}
		},
		{
			"route": "/isarticle-2",
			"path": "/articles/article-2",
			"template": "default",
			"meta-data": {
				"title": "Clinical Data",
				"titleTag": "Information from Industry",
				"description": "Clinical Data"
			}
		},
		{
			"route": "/isarticle-3",
			"path": "/articles/article-3",
			"template": "default",
			"meta-data": {
				"title": "Efficacy and Safety Data",
				"titleTag": "Information from Industry",
				"description": "Efficacy and Safety Data"
			}
		},
		{
			"route": "/isarticle-4",
			"path": "/articles/article-4",
			"template": "default",
			"meta-data": {
				"title": "Video: MOA",
				"titleTag": "Information from Industry",
				"description": "Video: MOA"
			}
		},
		{
			"route": "/isarticle-5",
			"path": "/articles/article-5",
			"template": "default",
			"meta-data": {
				"title": "iframe",
				"titleTag": "Information from Industry",
				"description": "iframe"
			}
		},
		{
			"route": "/isarticle-6",
			"path": "/articles/article-6",
			"template": "doubleScroll",
			"meta-data": {
				"title": "Media: Podcast",
				"titleTag": "Information from Industry",
				"description": "Media: Podcast"
			}
		},
		{
			"route": "/isarticle-7",
			"path": "/articles/article-7",
			"template": "default",
			"meta-data": {
				"title": "iframe test",
				"titleTag": "Information from Industry",
				"description": "iframe test"
			}
		}
	],
	"navigation": {
		"links": [{
				"label": "Infosite Home",
				"url": "/",
				"target": "_self",
				"module": "RouterLink"
			},
			{
				"label": "Treatment Guidelines",
				"url": "/isarticle-1",
				"target": "_self",
				"module": "RouterLink"
			},
			{
				"label": "Clinical Data",
				"url": "/isarticle-2",
				"target": "_self",
				"module": "RouterLink"
			},
			{
				"label": "Efficacy and Safety Data",
				"url": "/isarticle-3",
				"target": "_self",
				"module": "RouterLink"
			},
			{
				"label": "Video: MOA",
				"url": "/isarticle-4",
				"target": "_self",
				"module": "RouterLink"
			},
			{
				"label": "Modal link",
				"url": "",
				"target": "_self",
				"module": "ModalLink",
				"config-id": "indications"
			},
			{
				"label": "Submenu demo",
				"url": "/isarticle-4",
				"target": "_self",
				"module": "SubMenu",
				"submenu": {
					"side-drawer": {
						"module": "Accordion",
						"ui-config": {
							"expanded": true,
							"disabled": false
						}
					},
					"side-article": {
						"module": "Accordion",
						"ui-config": {
							"expanded": false,
							"disabled": false
						}
					},
					"top-article": {
						"module": "Popper",
						"ui-config": {
							"placement": "bottom-start"
						}
					},
					"links": [{
							"label": "Sub-link 1",
							"url": "https://www.google.com/",
							"target": "_blank",
							"module": "HtmlLink"
						},
						{
							"label": "Sub-link 2",
							"url": "https://www.google.com/",
							"target": "_blank",
							"module": "HtmlLink"
						},
						{
							"label": "Sub-link 3",
							"url": "https://www.google.com/",
							"target": "_blank",
							"module": "HtmlLink"
						}
					]
				}
			}
		]

	},
	"medscape-header": {
		"container": {
			"className": "",
			"styles": ""
		},
		"logo": {
			"className": "",
			"styles": ""
		},
		"sponsored-message": {
			"html-content": "Developed under the direction and sponsorship of <span class='nobr'>Pharma Co.</span>",
			"className": "",
			"styles": ""
		}
	},
	"side-drawer": {
		"anchor": "right"
	},
	"isi": {
		"article": {

			"intersection-observer": {
				"enable": true,
				"rootMargin": "0px 0px 0px 0px"
			},
			"classes": {
				"intersection-observer": "",
				"head": "",
				"html-content": ""
			}
		},
		"drawer": {
			"open": false,
			"classes": {
				"drawer-content": "",
				"head": "",
				"head-container": ""
			},
			"accept": {
				"enable": false,
				"button": ""
			},
			"auto-close": {
				"enable": false,
				"timer": 2000
			},
			"auto-scroll": {
				"enable": false,
				"speed": 100
			},
			"buttons": {
				"expand": "",
				"collapse": ""
			}
		}
	},
	"polls": [{
			"config-id": "test",
			"title": "Poll",
			"questionnaire-id": "60635",
			"form-id": "1",
			"ui-configs": {
				"question-numbers": {
					"enable": false,
					"text": "{{counter}}."
				},
				"select": {
					"label": true,
					"props": {
						"autoWidth": true,
						"variant": "standard"
					}
				},
				"textfield": {
					"label": true,
					"props": {
						"variant": "standard",
						"rows": 4
					}
				},
				"response-message": {
					"enable": false,
					"text": "Thank You"
				},
				"submit-button": {
					"label": "Submit"
				}
			}
		},
		{
			"config-id": "test2",
			"title": "Poll2",
			"questionnaire-id": "60635",
			"form-id": "2",
			"ui-configs": {
				"question-numbers": {
					"enable": false,
					"text": "{{counter}}."
				},
				"select": {
					"label": true,
					"props": {
						"autoWidth": true,
						"variant": "standard"
					}
				},
				"textfield": {
					"label": true,
					"props": {
						"variant": "standard",
						"rows": 4
					}
				},
				"response-message": {
					"enable": false,
					"text": ""
				},
				"submit-button": {
					"label": "Submit"
				}
			}
		}
	],
	"media-player": {
		"playlists": [{
			"config-id": "playlist-1",
			"bookmark": {
				"enable": false,
				"notification": {
					"enable": false,
					"content": "You last viewed this program on<br>{{date}}",
					"display-timer": 2000
				}
			},
			"playlist-items": [{
					"media-id": "video1",
					"title": "Video 1",
					"thumbnail": "/pi/sites/infosite/IS-template-22.14/images/template/mediaFPO.png",
					"description": "This is a description 1"
				},
				{
					"media-id": "video2",
					"title": "Video 2",
					"thumbnail": "/pi/sites/infosite/IS-template-22.14/images/template/mediaFPO.png",
					"description": "This is a description 2"
				},
				{
					"media-id": "video3",
					"title": "Video 3",
					"thumbnail": "/pi/sites/infosite/IS-template-22.14/images/template/mediaFPO.png",
					"description": "This is a description 3"
				},
				{
					"media-id": "video4",
					"title": "Video 4",
					"thumbnail": "/pi/sites/infosite/IS-template-22.14/images/template/mediaFPO.png",
					"description": "This is a description 4"
				},
				{
					"media-id": "video5",
					"title": "Video 5",
					"thumbnail": "/pi/sites/infosite/IS-template-22.14/images/template/mediaFPO.png",
					"description": "This is a description 5"
				},
				{
					"media-id": "audio1",
					"title": "Audio 1",
					"thumbnail": "/pi/sites/infosite/IS-template-22.14/images/template/mediaFPO.png",
					"description": "This is audio-only media"
				}
			],
			"ui-configs": {
				"playlist-item": {
					"classes": {
						"root": "",
						"thumbnail-image": "",
						"meta-info": ""
					},
					"play-tag": {
						"playing": {
							"enable": true,
							"html-text": "NOW PLAYING"
						},
						"played": {
							"enable": true,
							"html-text": "WATCHED"
						}
					},
					"duration": {
						"enable": true
					}
				},
				"carousel": {
					"adaptiveHeight": false,
					"arrows": true,
					"accessibility": false,
					"centerMode": false,
					"centerPadding": "0px",
					"className": "",
					"dots": false,
					"draggable": false,
					"easing": "",
					"fade": false,
					"focusOnSelect": false,
					"initialSlide": 0,
					"infinite": false,
					"lazyLoad": false,
					"slidesToShow": 3,
					"slidesToScroll": 3,
					"speed": 500,
					"swipeToSlide": true,
					"vertical": false,
					"responsive": [{
							"breakpoint": 1280,
							"settings": {
								"vertical": false,
								"slidesToShow": 4,
								"slidesToScroll": 1
							}
						},
						{
							"breakpoint": 400,
							"settings": {
								"vertical": false,
								"slidesToShow": 2,
								"slidesToScroll": 1
							}
						}
					]
				}
			}
		}],
		"medias": [{
				"config-id": "video1",
				"media": {
					"title": "Video 1 Title",
					"medium": "video",
					"autoplay": false,
					"source": "/delivery/aws/a8/4e/a84e7cd9-a7ed-34fc-8215-4e5f32a87c6d/FPOv1_640x480_1_,4500k,4500k-mbr,4500k-mbr10k,3000k,2500k,1000k,750k,450k,a96k,.mp4",
					"poster": "/pi/sites/infosite/IS-template-22.14/images/template/mediaFPO.png",
					"duration": "00:30",
					"ccFileRoot": "",
					"ccInfo": []
				},
				"html-title": {
					"enable": true,
					"title": "Video 1 Html Title"
				},
				"controls": {
					"fullscreen": true
				},
				"tracking-pixels": {
					"start": "",
					"25pct": "",
					"50pct": "",
					"75pct": "",
					"100pct": ""
			},
            "chapters": {
                "enable": false,
                "ui-configs": {
                     "anchor": "left",
                    "always-visible": {
                        "enable": true,
                        "auto-open": {
                            "enable": false,
                            "timer": 1000,
                            "auto-hide": {
                                "enable": false,
                                "timer": 6000
                            }
                        }
                    },
                    "menu": {
                        "hide-on-chapter-click": false,
                        "heading": {
                            "enable": true,
                            "html-content": ""
                        },
                        "hide-icon": {
                            "use-default": true,
                            "html-content": ""
                        }
                    }
                },
                "items": [
                    {
                        "chapterName": "Introduction",
                        "startTime": "00:05"
                    },
                    {
                        "chapterName": "Chapter 1",
                        "startTime": "00:10"
                    },
                    {
                        "chapterName": "Chapter 2",
                        "startTime": "00:15"
                    },
                    {
                        "chapterName": "Chapter 3",
                        "startTime": "00:20"
                    },
                    {
                        "chapterName": "Chapter 4",
                        "startTime": "00:25"
                    }
                ]
            }
        },
			{
				"config-id": "video2",
				"media": {
					"title": "Video 2 Title",
					"medium": "video",
					"autoplay": true,
					"source": "/delivery/aws/a8/4e/a84e7cd9-a7ed-34fc-8215-4e5f32a87c6d/FPOv1_640x480_2_,4500k,4500k-mbr,4500k-mbr10k,3000k,2500k,1000k,750k,450k,a96k,.mp4",
					"poster": "/pi/sites/infosite/IS-template-22.14/images/template/mediaFPO.png",
					"duration": "00:30",
					"ccFileRoot": "",
					"ccInfo": []
				},
				"html-title": {
					"enable": true,
					"title": "Video 2 Html Title"
				},
				"controls": {
					"fullscreen": true
				},
				"tracking-pixels": {
					"start": "",
					"25pct": "",
					"50pct": "",
					"75pct": "",
					"100pct": ""
				}
			},
			{
				"config-id": "video3",
				"media": {
					"title": "Video 3 Title",
					"medium": "video",
					"autoplay": true,
					"source": "/delivery/aws/a8/4e/a84e7cd9-a7ed-34fc-8215-4e5f32a87c6d/FPOv1_640x480_3_,4500k,4500k-mbr,4500k-mbr10k,3000k,2500k,1000k,750k,450k,a96k,.mp4",
					"poster": "/pi/sites/infosite/IS-template-22.14/images/template/mediaFPO.png",
					"duration": "00:30",
					"ccFileRoot": "",
					"ccInfo": []
				},
				"html-title": {
					"enable": true,
					"title": "Video 3 Html Title"
				},
				"controls": {
					"fullscreen": true
				}
			},
			{
				"config-id": "video4",
				"media": {
					"title": "Video 4 Title",
					"medium": "video",
					"autoplay": true,
					"source": "/delivery/aws/a8/4e/a84e7cd9-a7ed-34fc-8215-4e5f32a87c6d/FPOv1_640x480_4_,4500k,4500k-mbr,4500k-mbr10k,3000k,2500k,1000k,750k,450k,a96k,.mp4",
					"poster": "/pi/sites/infosite/IS-template-22.14/images/template/mediaFPO.png",
					"duration": "00:30",
					"ccFileRoot": "",
					"ccInfo": []
				},
				"html-title": {
					"enable": true,
					"title": "Video 4 Html Title"
				},
				"controls": {
					"fullscreen": true
				}
			},
			{
				"config-id": "video5",
				"media": {
					"title": "Vide&#337; 5 Title",
					"medium": "video",
					"autoplay": true,
					"source": "/delivery/aws/a8/4e/a84e7cd9-a7ed-34fc-8215-4e5f32a87c6d/FPOv1_640x480_5_,4500k,4500k-mbr,4500k-mbr10k,3000k,2500k,1000k,750k,450k,a96k,.mp4",
					"poster": "/pi/sites/infosite/IS-template-22.14/images/template/mediaFPO.png",
					"duration": "00:30",
					"ccFileRoot": "",
					"ccInfo": []
				},
				"html-title": {
					"enable": true,
					"title": "Vide&#337; 5 Html Title"
				},
				"controls": {
					"fullscreen": true
				},
				"tracking-pixels": {
					"start": "",
					"25pct": "",
					"50pct": "",
					"75pct": "",
					"100pct": ""
				}
			},
			{
				"config-id": "audio1",
				"media": {
					"title": "Audio 1 Title",
					"medium": "audio",
					"autoplay": true,
					"source": "/delivery/d8/8d/d88d89b7-b333-4374-934d-5c0b57087d18/267440_ITP_S2_Ep1_V4_Approved_2018-12-10_,4500k,a96k,1000k,750k,3000k,400k,2500k,.mp4",
					"poster": "/pi/sites/infosite/IS-template-22.14/images/template/mediaFPO.png",
					"duration": "05:48",
					"ccFileRoot": "",
					"ccInfo": []
				},
				"html-title": {
					"enable": true,
					"title": "Audio 1 Html Title"
				},
				"controls": {
					"fullscreen": false
				},
				"tracking-pixels": {
					"start": "",
					"25pct": "",
					"50pct": "",
					"75pct": "",
					"100pct": ""
				}
			}
		]
	},
	"carousel": [{
		"config-id": "carousel-1",
		"slide-counter": {
			"enable": true,
			"className": "",
			"html": "{{index}} of {{totalSlides}}"
		},
		"icons": {
			"nextArrow": "<img src='{{imageServer.path}}/images/template/right-arrow.svg' alt='graphic'>",
			"prevArrow": "<img src='{{imageServer.path}}/images/template/left-arrow.svg' alt='graphic'>"
		},
		"carousel-widgets": {
			"enable": false,
			"className": "",
			"links": {
				"enable": true,
				"className": "",
				"html": ""
			},
			"notes": {
				"className": "",
				"html": "carousel note"
			}
		},
		"links-layer": {
			"className": "",
			"html": "<div class='references'><h3>Links Layer</h3><ol><li>Auctor tincidunt nunc purus penatibus duis tempor adipiscing porta non ut magna rhoncus amet</li><li>Vel nisi natoque ridiculus platea urna eu habitasse dis, proin velit rhoncus augue</li><li>Risus auctor a rhoncus a nisi cum nascetur ut nunc ultricies dis</li><li>Nunc integer massa aliquet, turpis sit</li><li>Montes arcu enim, nec, scelerisque diam, eu natoque.</li></ol></div>",
			"close-button": {
				"enable": true,
				"html": ""
			}
		},
		"slides": [{
				"slide-id": "slide-1",
				"className": "content-top",
				"poll": {
					"enable": false
				},
				"html-content": {
					"className": "",
					"html": "<img src='{{imageServer.path}}/images/instance/carousel-image-1-690x460@2x.png' alt='graphic'>"
				},
				"meta-info": {
					"enable": true,
					"className": "",
					"label": "Slide 1 label",
					"caption": "Information about the slide, description here."
				},
				"notes-layer": {
					"enable": true,
					"className": "",
					"html": "<p>Slide 1 notes layer</p>",
					"close-button": {
						"enable": true,
						"html": ""
					}
				}
			}, {
				"slide-id": "slide-2",
				"className": "content-top",
				"poll": {
					"enable": false
				},
				"html-content": {
					"className": "",
					"html": "<img src='{{imageServer.path}}/images/instance/carousel-image-2-690x460@2x.png' alt='graphic'>"
				},
				"meta-info": {
					"enable": true,
					"className": "",
					"label": "Slide 2 label",
					"caption": "Information about the slide, description here."
				},
				"notes-layer": {
					"enable": true,
					"className": "",
					"html": "<p>Slide 2 notes layer</p>",
					"close-button": {
						"enable": true,
						"html": ""
					}
				}
			},
			{
				"slide-id": "slide-3",
				"className": "content-top",
				"poll": {
					"enable": false
				},
				"html-content": {
					"className": "",
					"html": "<img src='{{imageServer.path}}/images/instance/carousel-image-3-690x460@2x.png' alt='graphic'>"
				},
				"meta-info": {
					"enable": true,
					"className": "",
					"label": "Slide 3 label meta-info",
					"caption": "Slide 3 Captions meta-info"
				},
				"notes-layer": {
					"enable": false,
					"className": "",
					"html": "<h3>Slide-3 Notes Layer</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis interdum cursus. Sed faucibus placerat sollicitudin. Nullam porta enim a nunc cursus placerat. Maecenas luctus nisi non condimentum faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dapibus ac erat ut pellentesque. Phasellus urna ipsum, tincidunt et commodo ut, accumsan vel dui. Etiam venenatis massa vitae sem ornare, ut dignissim nunc feugiat. Nam nec dui vitae libero faucibus venenatis. Suspendisse dictum nunc sed tellus efficitur finibus. Praesent vestibulum nunc quis orci posuere, et posuere tortor varius. Cras rutrum turpis et elementum pulvinar. In id fringilla lectus. Maecenas nec varius arcu, nec tincidunt velit. Mauris auctor imperdiet lacus vel aliquet. Phasellus justo diam, suscipit at ornare in, iaculis ac lectus.</p>",
					"close-button": {
						"enable": true,
						"html": "{{imageServer.path}}/images/template/modal-exit.svg"
					}
				}
			}
		],
		"settings": {
			"accessibility": false,
			"adaptiveHeight": false,
			"arrows": true,
			"autoplay": false,
			"autoplaySpeed": 2000,
			"centerMode": false,
			"centerPadding": "0px",
			"className": "",
			"customPaging": "",
			"dots": false,
			"draggable": false,
			"easing": "",
			"fade": false,
			"focusOnSelect": false,
			"initialSlide": 0,
			"infinite": true,
			"lazyLoad": false,
			"pauseOnHover": false,
			"slidesToShow": 1,
			"slidesToScroll": 1,
			"speed": 500,
			"swipeToSlide": true,
			"responsive": []
		}
	}],
	"formulary": {
		"path": ""
	},
	"gift-manager": {
		"promo-activity-id": "",
		"package-id": "",
		"form": {
			"emailHide": false,
			"officeRoadHide": false,
			"officeCityHide": false,
			"stateHide": false,
			"zipHide": false,
			"countryHide": false
		}
	},
	"zoom-images": [{
			"config-id": "zoom-image-1",
			"image": {
				"src": "{{imageServer.path}}/images/instance/small-zoom-image-medicine-345x230@2x.png",
				"title": "Zoom 1 Title",
				"alt": "graphic",
				"className": "",
				"id": ""
			},
			"enlarged": {
				"enable": true,
				"zoom-icon": true,
				"image": {
					"src": "{{imageServer.path}}/images/instance/zoom-image-medicine-800x533@2x.png",
					"title": "Enlarged Zoom Image 1 Title",
					"alt": "graphic",
					"className": "",
					"id": ""
				},
				"label": "Slide Label",
				"caption": "Information about the slide, description here."
			},
			"responsive": []
		},
		{
			"config-id": "zoom-image-2",
			"image": {
				"src": "{{imageServer.path}}/images/instance/small-zoom-image-dr-345x230@2x.png",
				"title": "Zoom 2 Title",
				"alt": "graphic",
				"className": "",
				"id": ""
			},
			"enlarged": {
				"enable": true,
				"zoom-icon": true,
				"image": {
					"src": "{{imageServer.path}}/images/instance/zoom-image-dr-800x533@2x.png",
					"title": "Enlarged Zoom Image 2 Title",
					"alt": "graphic",
					"className": "",
					"id": ""
				},
				"label": "Slide Label",
				"caption": "Information about the slide, description here."
			},
			"responsive": []
		}
	],
	"uld-banner": {
		"enable": false,
		"html-content": "",
		"classes": {
			"uld-drawer": "",
			"uld-drawer-paper": "",
			"uld-banner": "",
			"html-content": "No ULD-banner on US demo",
			"buttons": ""
		},
		"buttons": {
			"accept": "",
			"decline": "",
			"classes": {
				"buttons-flex-container": "",
				"accept": "",
				"decline": ""
			}
		}
	},
	"resources": [],
	"additional-resources": [],
	"share-widgets": [],
	"twitter-timeline": {
		"account-name": "",
		"tweet-limit": 3,
		"chrome": {
			"noheader": true,
			"nofooter": true,
			"noborders": false,
			"noscrollbar": false,
			"transparent": true
		}
	},
	"consult-widget": [],
	"consult-ad": {
		"title": "",
		"items": []
	},
	"comments": [{
        "config-id": "comments-1",
        "viafoura-configs": {
            "container-id": "infosite-demo"
        },
        "widget":
        {
            "html": ""
        },
        "drawer":
        {
            "path": "/comments/comments-1",
            "header": "",
            "close-button": "",
            "terms": ""
        }
    }],
	"media-slides": [{
			"config-id": "media-slides-1",
			"vertical": false,
			"html-title": {
				"enable": true,
				"title": "Media Slides 1"
			},
			"media": {
				"settings": {
					"title": "Media Title",
					"medium": "video",
					"autoplay": false,
					"source": "/delivery/d3/b8/d3b820bf-d64e-418f-a0ec-a47c6dfb7c03/251893_MTV_BreastCancer_Ep1_V4_Approved_2018-07-25_,400k,a96k,1000k,750k,3000k,2500k,4500k,.mp4",
					"poster": "/pi/sites/infosite/IS-template-22.14/images/instance/media-slide-video-tn-450x253@2x.png",
					"duration": "05:31",
					"ccFileRoot": "",
					"ccInfo": []
				},
				"controls": {
					"fullscreen": true
				}
			},
			"slides": [{
					"startTime": "00:00",
					"html-content": "<h3>Slide 1</h3><img src='{{imageServer.host}}/pi/sites/infosite/IS-template-22.14/images/instance/media-slide-slide-1-260x161@2x.png'>"
				},
				{
					"startTime": "01:00",
					"html-content": "<h3>Slide 2</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>"
				},
				{
					"startTime": "03:00",
					"html-content": "<h3>Slide 3</h3><ol><li><a href='https://www.lipsum.com/' target='_blank'>External Link</a></li><li><a href='isarticle-3' data-module='RouterLink'>Internal Link</a></li></ol>"
				},
				{
					"startTime": "04:00",
					"html-content": "<h3>Slide 4</h3><img src='{{imageServer.host}}/pi/sites/infosite/IS-template-22.14/images/instance/media-slide-slide-2-260x167@2x.png'>"
				}
			],
			"navigation-bar": {
				"slide-counter": {
					"enable": true,
					"html": "Slide {{index}} of {{totalSlides}}"
				},
				"controls": {
					"enable": true,
					"icon": true,
					"next": "<img src='{{imageServer.host}}/pi/sites/infosite/IS-template-22.14/images/template/right-arrow.svg>",
					"previous": "<img src='{{imageServer.host}}/pi/sites/infosite/IS-template-22.14/images/template/left-arrow.svg>"
				}
			},
			"responsive": []
		},
		{
			"config-id": "media-slides-2",
			"vertical": true,
			"html-title": {
				"enable": true,
				"title": "Media Slides 2 - Vertical and with closed captioning"
			},
			"media": {
				"settings": {
					"title": "Tracking Title",
					"medium": "video",
					"autoplay": false,
					"source": "/delivery/d3/b8/d3b820bf-d64e-418f-a0ec-a47c6dfb7c03/251893_MTV_BreastCancer_Ep1_V4_Approved_2018-07-25_,400k,a96k,1000k,750k,3000k,2500k,4500k,.mp4",
					"poster": "/pi/editorial/studio/all_players_test/a__Start-end-bug/poster-1.jpg",
					"duration": "05:31",
					"ccFileRoot": "/mtv/metastatic-breast-cancer-s01/config/",
					"ccInfo": [{
						"lang": "en",
						"file": "mbc-ep01.xml"
					}]
				},
				"controls": {
					"fullscreen": true
				}
			},
			"slides": [{
					"startTime": "00:00",
					"html-content": "<h3>Slide 1</h3><img src='{{imageServer.host}}/pi/sites/infosite/IS-template-22.14/images/instance/media-slide-slide-1-260x161@2x.png'>"
				},
				{
					"startTime": "01:00",
					"html-content": "<h3>Slide 2</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>"
				},
				{
					"startTime": "03:00",
					"html-content": "<h3>Slide 3</h3><ol><li><a href='https://www.lipsum.com/' target='_blank'>External Link</a></li><li><a href='/isarticle-3' data-module='RouterLink'>Internal Link</a></li></ol>"
				},
				{
					"startTime": "04:00",
					"html-content": "<h3>Slide 4</h3><img src='{{imageServer.host}}/pi/sites/infosite/IS-template-22.14/images/instance/media-slide-slide-2-260x167@2x'>"
				}
			],
			"navigation-bar": {
				"slide-counter": {
					"enable": true,
					"html": "Slide {{index}} of {{totalSlides}}"
				},
				"controls": {
					"enable": true,
					"icon": false,
					"next": "next",
					"previous": "previous"
				}
			},
			"responsive": []
		}
	],
	"accordion": [{
			"config-id": "accordion-1",
			"header": {
				"image": {
					"enable": true,
					"src": "{{imageServer.host}}/pi/sites/infosite/IS-template-22.14/images/template/accordionArrow.png"
				},
				"html-content": "<h3>Treatment Discontinuation and Overall Response Rate Data from the Initial Analysis</h3>",
				"buttons": {
					"expand": "",
					"collapse": ""
				}
			}
		},
		{
			"config-id": "accordion-2",
			"header": {
				"image": {
					"enable": true,
					"src": "{{imageServer.host}}/pi/sites/infosite/IS-template-22.14/images/template/accordionArrow.png"
				},
				"html-content": "<h3>Accordion 2</h3>",
				"buttons": {
					"expand": "",
					"collapse": ""
				}
			}
		},
		{
			"config-id": "accordion-3",
			"header": {
				"image": {
					"enable": true,
					"src": "{{imageServer.host}}/pi/sites/infosite/IS-template-22.14/images/template/accordionArrow.png"
				},
				"html-content": "<h3>Accordion 3</h3>",
				"buttons": {
					"expand": "",
					"collapse": ""
				}
			}
		},
		{
			"config-id": "accordion-4",
			"index": 1,
			"header": {
				"image": {
					"enable": true,
					"src": "{{imageServer.host}}/pi/sites/infosite/IS-template-22.14/images/template/accordionArrow.png"
				},
				"html-content": "<h3>Accordion 4</h3>",
				"buttons": {
					"expand": "",
					"collapse": ""
				}
			}
		},
		{
			"config-id": "accordion-5",
			"header": {
				"image": {
					"enable": false,
					"src": ""
				},
				"html-content": "<h3>Accordion 5</h3>",
				"buttons": {
					"expand": "<img src='{{imageServer.host}}/pi/sites/infosite/IS-template-22.14/images/template/plus-accordion-icon.svg' />",
					"collapse": "<img src='{{imageServer.host}}/pi/sites/infosite/IS-template-22.14/images/template/minus-accordion-icon.svg' />"
				}
			}
		}
	],
	"modal": [{
			"config-id": "indications",
			"indications": false,
			"modalClassName": "indications-modal",
			"url": "{{app.app-server.path}}/modals/indications",
			"button": {
				"image": {
					"enable": true,
					"src": "/images/template/modal-exit.svg"
				},
				"text": ""
			}
		},
		{
			"config-id": "modal-2",
			"indications": false,
			"modalClassName": "modal-2",
			"url": "{{app.app-server.path}}/modals/modal-2",
			"button": {
				"image": {
					"enable": false,
					"src": ""
				},
				"text": "close"
			}
		}
	]
};


function pageObjUpdate(num, value) {
	const route = num === 0 ? "" : `isarticle-${num}`;
	const path = num === 0 ? "home" : `article-${num}`;
   
	return {
	   route: `/${route}`,
	   path: `/articles/${path}`,
	   template: "default",
	   "meta-data": {
		 title: value,
		 titleTag: num === 0 ? "Homepage" : `Article ${num}`,
		 description: value,
	   },
	};
   }

function navExternalPages(num, value, checked, url) {
 const isExternal = checked === "external";
 const targetUrl = isExternal ? url : num === 0 ? "/" : "/isarticle-" + num;
 const module = isExternal ? "HtmlContentLink" : "RouterLink";

 return {
    label: value,
    url: targetUrl,
    target: "_self",
    module: module,
 };
}

let polls = {
  "config-id": "test",
  title: "Poll",
  "questionnaire-id": "60635",
  "form-id": "1",
  "ui-configs": {
    "question-numbers": {
      enable: false,
      text: "{{counter}}.",
    },
    select: {
      label: true,
      props: {
        autoWidth: true,
        variant: "standard",
      },
    },
    textfield: {
      label: true,
      props: {
        variant: "standard",
        rows: 4,
      },
    },
    "response-message": {
      enable: false,
      text: "Thank You",
    },
    "submit-button": {
      label: "Submit",
    },
  },
};

var imageFolder = "";

function imageDir(imageName) {
	const imageFolder = imageName === "mediaFPO.png" ? "template" : "instance";
	return imageFolder;
   }

function videoThumbnailUpdate(num, sf, videoTitleName, thumbnail) {
  imageDir(thumbnail);

  let videoThumbnail = {
    "media-id": "video" + num,
    title: videoTitleName,
    thumbnail: `/pi/sites/infosite/${sf}/images/${imageFolder}/${thumbnail}`,
    description: videoTitleName,
  };

  return videoThumbnail;
}

function videoPosterUpdate(
  numPoster,
  sfNumber,
  videoPosterTitleName,
  posterName,
  videoTime,
  vURL
) {
  imageDir(posterName);

  let videoPoster = {
    "config-id": "video" + numPoster,
    media: {
      title: videoPosterTitleName,
      medium: "video",
      autoplay: false,
      source: vURL,
      poster: `/pi/sites/infosite/${sfNumber}/images/${imageFolder}/${posterName}`,
      duration: videoTime,
      ccFileRoot: "",
      ccInfo: [],
    },
    "html-title": {
      enable: true,
      title: videoPosterTitleName,
    },
    controls: {
      fullscreen: true,
    },
    "tracking-pixels": {
      "start": "",
      "25pct": "",
      "50pct": "",
      "75pct": "",
      "100pct": ""
  },
        "chapters": {
            "enable": true,
            "ui-configs": {
                "always-visible": {
                    "enable": true,
                    "auto-open": {
                        "enable": false,
                        "timer": 1000,
                        "auto-hide": {
                            "enable": false,
                            "timer": 6000
                        }
                    }
                },
                "menu": {
                    "hide-on-chapter-click": false,
                    "heading": {
                        "enable": true,
                        "html-content": ""
                    },
                    "hide-icon": {
                        "use-default": true,
                        "html-content": ""
                    }
                }
            },
            "items": [
                {
                    "chapterName": "Introduction",
                    "startTime": "00:05"
                },
                {
                    "chapterName": "Chapter 1",
                    "startTime": "00:10"
                },
                {
                    "chapterName": "Chapter 2",
                    "startTime": "00:15"
                },
                {
                    "chapterName": "Chapter 3",
                    "startTime": "00:20"
                },
                {
                    "chapterName": "Chapter 4",
                    "startTime": "00:25"
                }
            ]
        }
  };

  return videoPoster;
}

function audioThumbnailUpdate(num, sfAudioNum, audioTitleName, thumbnail) {
  imageDir(thumbnail);

  let audioThumbnail = {
    "media-id": "audio" + num,
    title: audioTitleName,
    thumbnail: `/pi/sites/infosite/${sfAudioNum}/images/${imageFolder}/${thumbnail}`,
    description: audioTitleName,
  };

  return audioThumbnail;
}

function audioPosterUpdate(
  numAudioPoster,
  sfAudioNumber,
  audioPosterTitleName,
  audioPosterName,
  audioTime,
  aURL
) {
  imageDir(audioPosterName);

  let audioPoster = {
    "config-id": "audio" + numAudioPoster,
    media: {
      title: audioPosterTitleName,
      medium: "audio",
      autoplay: true,
      source: aURL,
      poster: `/pi/sites/infosite/${sfAudioNumber}/images/${imageFolder}/${audioPosterName}`,
      duration: audioTime,
      ccFileRoot: "",
      ccInfo: [],
    },
    "html-title": {
      enable: true,
      title: audioPosterTitleName,
    },
    controls: {
      fullscreen: false,
    },
    "tracking-pixels": {
      "start": "",
      "25pct": "",
      "50pct": "",
      "75pct": "",
      "100pct": ""
    }
  };

  return audioPoster;
}

// ONSUBMIT BEGINS HERE

const form = document.getElementById("infosite_starter_form");

form.addEventListener("submit", function (e) {
  /* Declarations */

  const sfnumber = document.getElementById("tracking_sfnumber").value;
  let brandName = document.getElementById("tracking_brandName").value;
  const brandId = document.getElementById("tracking_brandId").value;
  const tcid = document.getElementById("tracking_CP_tcid").value;
  const activityId = document.getElementById("tracking_CP_activityId").value;

  // Get all input elements with the name "description"
  const descriptionInputs = document.getElementsByName("description");
  // Get all input elements with the name "internal" or "external"
  const radioInputs = document.querySelectorAll("input[type='radio']:checked");
  // Get all input elements with the name "page_url"
  const urlInputs = document.getElementsByName("page_url");

  //Sponsor Text
  let sponsorText = document.getElementById("sponsorship").value;

  //Polls
  const pollNoCheckbox = document.getElementById("poll-no");

  if (pollNoCheckbox !== null && !pollNoCheckbox.checked) {
    var numberOfPolls = parseFloat(form.elements.form_ids.value);
  } else {
    json.polls = [];
  }
  const qNaID = form.elements.poll_id.value;

  // Videos

  const titleOfVideoInputs = document.getElementsByName("video_title");
  const thumbnailImageInputs = document.getElementsByName(
    "video_thumbnail_image_name"
  );
  const posterImageInputs = document.getElementsByName(
    "video_poster_image_name"
  );
  const videoDurationInputs = document.getElementsByName("video_duration");
  const videoFragmentURLInput = document.getElementsByName("video__url");

  // Audio/Podcast
  const titleOfAudioInputs = document.getElementsByName("audio_title");
  const audioThumbnailImageInputs = document.getElementsByName(
    "audio_thumbnail_image_name"
  );
  const audioPosterImageInputs = document.getElementsByName(
    "audio_poster_image_name"
  );
  const audioDurationInputs = document.getElementsByName("audio_duration");
  const audioFragmentURLInput = document.getElementsByName("audio__url");

  //Accordions
  const accordionNoCheckbox = document.getElementById("accordion-no");

  if (accordionNoCheckbox !== null && !accordionNoCheckbox.checked) {
    var numberOfAccordions = parseInt(form.elements.accordion_ids.value);
  } else {
    json.accordion = [];
  }

  e.preventDefault(); // Prevent the default form submission behavior

  //Error HTML Block
  const errorBlock = document.querySelector(".error-block");
  const messageHeader = document.querySelector(".messages-header");

  let errors = [];

  if (!testSFNumber(sfnumber)) {
    errors.push("Invalid SF-Number<br>Number format: xxxxxx.xx");
  }

  if (!isValidBrandName(brandName)) {
    errors.push(
      "Invalid Brand Name<br>Alphanumeric<br>and must begin<br>with a capital letter."
    );
  }

  if (!isValidDepartmentID(brandId)) {
    errors.push("Invalid Department ID<br>4 digits only.");
  }

  if (!isValidTacticID(tcid)) {
    errors.push("Invalid Tactic ID<br>5 to 6 numbers only.");
  }

  if (!isValidPromoID(activityId)) {
    errors.push("Invalid Promo Activity ID<br>5 to 6 numbers only.");
  }

  if (!isValidPharma(sponsorText)) {
    errors.push("Invalid Sponsorship text<br>Letters only.");
  }

  if (!isValidPollID(qNaID)) {
    errors.push("Invalid Poll ID<br>Numbers only<br>Max 5.");
  }

  if (radioInputs[0].value === "external") {
    errors.push("Homepage can not be external");
  }

  // Define a multidimensional array to store the values
  const values = [];

  const checkTitles = (titleDescription) => {
    if (!isTitleCase(titleDescription)) {
      return [
        "Please enter a title<br>that is Title Case."
      ];
    } else {
      return [];
    }
 }

  const checkUrl = (externalURL) => isValidURL(externalURL);

  checkUrl(urlInputs[1]);

  // Loop through all the "description" inputs and push their values to the array
  for (let i = 0; i < descriptionInputs.length; i++) {
    const descriptionValue = descriptionInputs[i].value.trim();
    try {
      checkTitles(descriptionValue);
      values.push([descriptionValue]);
    } catch (error) {
      break;
    }
  }

  // Loop through all the radio inputs and push their values to the array
  for (let i = 0; i < radioInputs.length; i++) {
    const radioValue = radioInputs[i].value;
    // Check if the array already contains an element for the current "description" input
    const index = i % (descriptionInputs.length * 2);
    if (values[index]) {
      values[index].push(radioValue);
    } else {
      values.push([null, radioValue]);
    }
  }

  // Loop through all the "page_url" inputs and add their values to the array

  for (let i = 0; i < urlInputs.length; i++) {
    const urlValue = urlInputs[i].value.trim();

    try {
      checkUrl(urlValue);
      const index = i % (descriptionInputs.length * 2);
      if (values[index]) {
        values[index].push(urlValue);
      } else {
        values.push([null, null, urlValue]);
      }
    } catch (error) {
      break;
    }
  }

  function isStringNullOrEmpty(str) {
    return str === null || str.trim() === "";
  }

  for (let i = 0; i < Object.keys(values).length; i++) {
    let buttonCheck = values[i];
    let buttonChecked = buttonCheck[1];
    let urlisEntered = buttonCheck[2];
    if (buttonChecked === "external" && isStringNullOrEmpty(urlisEntered)) {
      errors.push(
        "Please enter a valid URL<br>starting with<br>http:// or https://"
      );
    }
  }

  // Playlist Video and Audio Section //

  function checkTitle(playlistTitle) {
    if (!isValidTitle(playlistTitle)) {
      errors.push("Invalid title<br>Must begin<br>with a capital letter.");
      return errors;
    } else {
      return true;
    }
  }

  function checkImage(imageFile) {
    if (!isImageFile(imageFile)) {
      errors.push(
        "Invalid image format<br>Must end with .png, .jpg, or .jpeg."
      );
      return errors;
    } else {
      return true;
    }
  }

  function checkMedia(mediaLength) {
    if (!isValidMediaLength(mediaLength)) {
      errors.push("Invalid media time<br>Format 00:00.");
      return errors;
    } else {
      return true;
    }
  }

  function checkFragmentURL(fragmentURL) {
    if (!isValidFragmentURL(fragmentURL)) {
      errors.push("Invalid media time<br>Format 00:00.");
      return errors;
    } else {
      return true;
    }
  }

  const videoThumbnails = [];
  const videoPosters = [];

  for (let i = 0; i < titleOfVideoInputs.length; i++) {
    const titleOfVideoValue = titleOfVideoInputs[i].value.trim();
    try {
      checkTitle(titleOfVideoValue);
      videoThumbnails.push([titleOfVideoValue]);
      videoPosters.push([titleOfVideoValue]);
    } catch (error) {
      break;
    }
  }

  for (let i = 0; i < thumbnailImageInputs.length; i++) {
    const thumbnailValue = thumbnailImageInputs[i].value;
    try {
      checkImage(thumbnailValue);

      const index = i % thumbnailImageInputs.length;
      videoThumbnails[index].push(thumbnailValue);
    } catch (error) {
      break;
    }
  }

  for (let i = 0; i < posterImageInputs.length; i++) {
    const posterValue = posterImageInputs[i].value;

    try {
      checkImage(posterValue);

      const index = i % posterImageInputs.length;
      videoPosters[index].push(posterValue);
    } catch (error) {
      break;
    }
  }

  for (let i = 0; i < videoDurationInputs.length; i++) {
    const durationValue = videoDurationInputs[i].value;

    try {
      checkMedia(durationValue);

      const index = i % videoDurationInputs.length;
      videoPosters[index].push(durationValue);
    } catch (error) {
      break;
    }
  }

  for (let i = 0; i < videoFragmentURLInput.length; i++) {
    const videoURL = videoFragmentURLInput[i].value;

    try {
      checkFragmentURL(videoURL);

      const index = i % videoFragmentURLInput.length;
      videoPosters[index].push(videoURL);
    } catch (error) {
      break;
    }
  }

  const allaudioThumbnails = [];
  const allaudioPosters = [];

  for (let i = 0; i < titleOfAudioInputs.length; i++) {
    const titleOfAudioValue = titleOfAudioInputs[i].value.trim();
    try {
      checkTitle(titleOfAudioValue);
      allaudioThumbnails.push([titleOfAudioValue]);
      allaudioPosters.push([titleOfAudioValue]);
    } catch (error) {
      break;
    }
  }

  for (let i = 0; i < audioThumbnailImageInputs.length; i++) {
    const thumbnailValue = audioThumbnailImageInputs[i].value;
    try {
      checkImage(thumbnailValue);

      const index = i % audioThumbnailImageInputs.length;
      allaudioThumbnails[index].push(thumbnailValue);
    } catch (error) {
      break;
    }
  }

  for (let i = 0; i < audioPosterImageInputs.length; i++) {
    const audioposterValue = audioPosterImageInputs[i].value;
    try {
      checkImage(audioposterValue);

      const index = i % audioPosterImageInputs.length;
      allaudioPosters[index].push(audioposterValue);
    } catch (error) {
      break;
    }
  }

  for (let i = 0; i < audioDurationInputs.length; i++) {
    const audiodurationValue = audioDurationInputs[i].value;

    try {
      checkMedia(audiodurationValue);

      const index = i % audioDurationInputs.length;
      allaudioPosters[index].push(audiodurationValue);
    } catch (error) {
      break;
    }
  }

  for (let i = 0; i < audioFragmentURLInput.length; i++) {
    const audioURL = audioFragmentURLInput[i].value;

    try {
      checkFragmentURL(audioURL);

      const index = i % audioFragmentURLInput.length;
      allaudioPosters[index].push(audioURL);
    } catch (error) {
      break;
    }
  }

  if (errors.length > 0) {
    messageHeader.style.display = "block";
    errorBlock.style.display = "block";

    errorBlock.innerHTML = errors
      .map((error) => `<p class="errors">${error}</p>`)
      .join("");
    document.getElementById("jsonOutput").innerHTML = "";
    window.scrollTo({ top: 0, behavior: "smooth" });

    errors = [];
  } else {
    // App JSON Object

    messageHeader.style.display = "none";
    errorBlock.style.display = "none";

    errors = [];
    errorBlock.innerHTML = errors;

	json.app["app-server"]["path"] = json.app["app-server"]["path"].replace(
		/IS([^"]|\\")*/g,
		sfnumber
	  );
	  json.app["image-server"]["path"] = json.app["image-server"]["path"].replace(
		/IS([^"]|\\")*/g,
		sfnumber
	  );
	  
    // Tracking JSON Object
    json.tracking["SF-Number"] = sfnumber;
    json.tracking.brandName = brandName.trim();
    json.tracking.brandId = brandId;
    json.tracking.CP["tacticId"] = tcid;
    json.tracking.CP["activityId"] = activityId;

    //Format the JSON
    let jsonArticleAllPages = [];
    let jsonAllPages = [];

    function jsonPages() {
      for (let i = 0; i < Object.keys(values).length; i++) {
        let value = values[i];
        let title = value[0];
        let radio = value[1];
        let url = value[2];

        let jsonPages = pageObjUpdate(i, title);
        jsonArticleAllPages.push(jsonPages);

        let navExternalPage = navExternalPages(i, title, radio, url);
        jsonAllPages.push(navExternalPage);
      }

      return [jsonArticleAllPages, { links: jsonAllPages }];
    }

    jsonPages();

    jsonArticleAllPages = jsonArticleAllPages.filter(
      (page) => page["meta-data"].title !== null
    );
    json.pages = jsonArticleAllPages;
    json.navigation = { links: jsonAllPages };
    json.navigation.links = json.navigation.links.filter(
      (link) => link.label !== null
    );

    let questionnaire = [];

    function createPollJson(num) {
      let polls = {
        "config-id": "poll" + num,
        title: "Poll",
        "questionnaire-id": qNaID,
        "form-id": num,
        "ui-configs": {
          "question-numbers": {
            enable: false,
            text: "{{counter}}.",
          },
          select: {
            label: true,
            props: {
              autoWidth: true,
              variant: "standard",
            },
          },
          textfield: {
            label: true,
            props: {
              variant: "standard",
              rows: 4,
            },
          },
          "response-message": {
            enable: false,
            text: "Thank You",
          },
          "submit-button": {
            label: "Submit",
          },
        },
      };

      return polls;
    }

    for (let i = 1; i <= numberOfPolls; i++) {
      let pollObject = createPollJson(i);
      questionnaire.push(pollObject);
    }

    json.polls = questionnaire;

    // // Replace all occurrences of "Pharma Co." with the sponsor text
    json["medscape-header"]["sponsored-message"]["html-content"] = json[
      "medscape-header"
    ]["sponsored-message"]["html-content"].replace(/Pharma Co/g, sponsorText);

    // Videos

    let numberVideoThumbs = 1;
    let jsonAllVideoThumbs = [];
    let jsonAllVideoPosters = [];

    function allVideoThumbnails() {
      for (let i = 0; i < videoThumbnails.length; i++) {
        let videoThumbnail = videoThumbnails[i];
        let videoTitle = videoThumbnail[0];
        let thumb = videoThumbnail[1];

        let videoThumbs = videoThumbnailUpdate(
          numberVideoThumbs,
          sfnumber,
          videoTitle,
          thumb
        );
        jsonAllVideoThumbs.push(videoThumbs);
        numberVideoThumbs++;
      }
      return jsonAllVideoThumbs;
    }

    let numberVideoPosters = 1;
    function allVideoPosters() {
      for (let i = 0; i < videoPosters.length; i++) {
        let videoPoster = videoPosters[i];
        let videoPosterTitle = videoPoster[0];
        let poster = videoPoster[1];
        let videoDuration = videoPoster[2];
        let videoFragmentURL = videoPoster[3];

        let videoMediaPosters = videoPosterUpdate(
          numberVideoPosters,
          sfnumber,
          videoPosterTitle,
          poster,
          videoDuration,
          videoFragmentURL
        );
        jsonAllVideoPosters.push(videoMediaPosters);
        numberVideoPosters++;
      }
      return jsonAllVideoPosters;
    }

    allVideoThumbnails();
    allVideoPosters();

    let jsonAllAudioThumbs = [];
    let jsonAllAudioPosters = [];

    let numberaudioThumbs = 1;
    function allAudioThumbnails() {
      for (let i = 0; i < allaudioThumbnails.length; i++) {
        let audioThumbnail = allaudioThumbnails[i];
        let audioTitle = audioThumbnail[0];
        let audioThumb = audioThumbnail[1];

        let audioThumbs = audioThumbnailUpdate(
          numberaudioThumbs,
          sfnumber,
          audioTitle,
          audioThumb
        );
        jsonAllAudioThumbs.push(audioThumbs);
        numberaudioThumbs++;
      }
      return jsonAllAudioThumbs;
    }

    let numberaudioPosters = 1;
    function allAudioPosters() {
      for (let i = 0; i < allaudioPosters.length; i++) {
        let audioPosterVar = allaudioPosters[i];
        let audioPosterTitle = audioPosterVar[0];
        let audioPosterImg = audioPosterVar[1];
        let audioDuration = audioPosterVar[2];
        let audioFragmentURL = audioPosterVar[3];

        let audioMediaPosters = audioPosterUpdate(
          numberaudioPosters,
          sfnumber,
          audioPosterTitle,
          audioPosterImg,
          audioDuration,
          audioFragmentURL
        );
        jsonAllAudioPosters.push(audioMediaPosters);
        numberaudioPosters++;
      }
      return jsonAllAudioPosters;
    }

    allAudioThumbnails();
    allAudioPosters();

    let playlists = json["media-player"]["playlists"];
    let playlist = playlists.find((p) => p["config-id"] === "playlist-1");

    let numVideos = parseInt(document.getElementById("number_of_videos").value);
    let numAudios = parseInt(document.getElementById("number_of_audios").value);

    playlist["playlist-items"] = [];
    json["media-player"].medias = [];

    if (numVideos === 0 && numAudios > 0) {
      playlist["playlist-items"] = jsonAllAudioThumbs;
      json["media-player"].medias = jsonAllAudioPosters;
    } else if (numVideos > 0 && numAudios === 0) {
      playlist["playlist-items"] = jsonAllVideoThumbs;
      json["media-player"].medias = jsonAllVideoPosters;
    } else {
      playlist["playlist-items"] =
        jsonAllVideoThumbs.concat(jsonAllAudioThumbs);
      json["media-player"].medias =
        jsonAllVideoPosters.concat(jsonAllAudioPosters);
    }

    var indices = Array.from(
      { length: numberOfAccordions },
      (_, index) => index + 1
    );

    let allAccordions = [];
    allAccordions = indices.map((index) => ({
      "config-id": `accordion-${index}`,
      index: index,
      header: {
        image: {
          enable: true,
          src: `{{imageServer.host}}/pi/sites/infosite/${sfnumber}/images/template/accordionArrow.png`,
        },
        "html-content": "<h3>Accordion Example</h3>",
        buttons: {
          expand: "",
          collapse: "",
        },
      },
    }));

    json.accordion = allAccordions;

    document.getElementById("jsonOutput").innerHTML = JSON.stringify(
      json,
      null,
      "\t"
    );

    const zip = new JSZip();

    // Add some data to the zip file
    zip.file("infosite-config.json", JSON.stringify(json, null, "\t"));

    // Generate the zip file
    zip
      .generateAsync({
        type: "blob",
      })
      .then((content) => {
        // Create a new file object from the zip file content
        const zipFile = new File([content], "infosite-config.zip", {
          type: "application/zip",
        });

        // Do something with the zip file, like download it
        // For example, you could create a link to download the file
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(zipFile);
        downloadLink.download = "infosite-config.zip";
        downloadLink.click();
      });
  }
});
