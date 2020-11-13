window.addEventListener('DOMContentLoaded', function () {
    let dom = document.querySelector('.container'),
        page = document.querySelectorAll('.container article'),
        navi = document.querySelectorAll('nav ul li'),
        introTxt = document.querySelectorAll('.intro_text p span'),
        introVdo = document.querySelector('.intro_movie'),
        introImg = introVdo.querySelector('img'),
        intro = introVdo.querySelector('video');

    let storyTitle = document.querySelector('.history_title span'),
        storyTitle2 = document.querySelector('.history_title p'),
        storyMenu = document.querySelector('.history_list ul'),
        storyNav = document.querySelectorAll('.history_list ul li'),
        storyCover = document.querySelector('.history_text'),
        storyBook = document.querySelector('.text-area'),
        storyBookT = storyBook.querySelector('.book-title span'),
        storyCon = storyBook.querySelector('.story'),
        storyCon2 = storyBook.querySelector('.story strong');
    imgLeft = document.querySelector('.img-box .left-effect'),
        imgRight = document.querySelector('.img-box .right-effect');

    let charList = document.querySelector('.class_list'),
        charSlot = charList.querySelectorAll('ul'),
        character = document.querySelectorAll('.class_list li'),
        chooseC = document.querySelector('.choose_class span'),
        chooseC2 = document.querySelector('.choose_class p'),
        part03 = document.querySelector('.part_03'),
        content2 = document.querySelector('.part_03 .content02'),
        classType = document.querySelector('.class-type'),
        classTitle = document.querySelector('.class-title'),
        weaponType = document.querySelector('.class-weapon'),
        classWeapon = document.querySelector('.weapon'),
        classDetail = document.querySelector('.class-point'),
        fightType = document.querySelector('.type'),
        classMovie = document.querySelector('.description button'),
        secondClass = document.querySelector('.second-class'),
        classSymbol = document.querySelector('.class-symbol');

    var pageIdx = 0,
        storyTime = '',
        txtStyle = "opacity: 1; transform: translateY(0)";

    storyNav[0].classList.add('active');


    navi.forEach(function (el) {
        el.addEventListener('click', navMenu);
    })

    function navMenu() {
        pageIdx = -this.dataset.num;
        dom.style = "transform: translateY(" + (pageIdx * 100) + "%";
        navActive(pageIdx);

        navi.forEach(function (el) {
            el.removeEventListener('click', navMenu);
        })

        if (Math.abs(pageIdx) == 1 || Math.abs(pageIdx) == 2) {
            setTimeout(function () {
                navi.forEach(function (el) {
                    el.addEventListener('click', navMenu);
                })
            }, 1500)
        } else {
            setTimeout(function () {
                navi.forEach(function (el) {
                    el.addEventListener('click', navMenu);
                })
            }, 600)
        }
    }

    window.addEventListener('wheel', handler);

    function handler(e) {
        pageMove(e)
        window.removeEventListener('wheel', handler);
        if (Math.abs(pageIdx) == 1 || Math.abs(pageIdx) == 2) {
            setTimeout(function () {
                window.addEventListener('wheel', handler);
            }, 1500);
        } else {
            setTimeout(function () {
                window.addEventListener('wheel', handler);
            }, 600);
        }
    }

    function pageMove(e) {
        if (e.deltaY > 0 && pageIdx > -(page.length - 1)) {
            pageIdx--
            console.log(pageIdx);
            dom.style = "transform: translateY(" + (pageIdx * 100) + "%";
            navActive(pageIdx);
        } else if (e.deltaY < 0 && pageIdx < 0) {
            pageIdx++
            console.log(pageIdx);
            dom.style = "transform: translateY(" + (pageIdx * 100) + "%";
            navActive(pageIdx);
        }
    }

    function navActive(i) {
        navi.forEach(function (el) {
            el.classList.remove('active');
        })
        navi[Math.abs(i)].classList.add('active');

        setTimeout(function () {
            page.forEach(function (el) {
                el.classList.remove('active');
            })

            storyNav.forEach(function (el) {
                el.removeAttribute('style');
            })
            storyBookT.removeAttribute('style');
            storyCon.removeAttribute('style');
            storyCon2.removeAttribute('style');

            charSlot.forEach(function (el) {
                el.children[0].removeAttribute('style')
                el.children[1].removeAttribute('style')
                try {
                    el.children[2].removeAttribute('style')
                } catch {

                }
            })
        }, 300);

        if (i != 0) {
            intro.pause();
            introVdo.classList.remove('active');
        }

        setTimeout(function () {
            page[Math.abs(i)].classList.add('active');
            pageEffect();
        }, 500);
    }
    navi[0].classList.add('active');

    setTimeout(function () {
        page[0].classList.add('active');
        pageEffect();
    }, 300);

    function pageEffect() {
        if (page[0].classList.contains('active')) {
            setTimeout(function () {
                introTxt[0].style = txtStyle;
                setTimeout(function () {
                    introTxt[1].style = txtStyle;
                }, 100)

                setTimeout(function () {
                    introTxt[2].style = txtStyle;
                }, 200)

                setTimeout(function () {
                    introVdo.style = "opacity: 1;";
                }, 500)
            }, 300)
        } else {
            introTxt.forEach(function (el) {
                el.removeAttribute('style');
            });
            introVdo.removeAttribute('style');
        }

        if (page[1].classList.contains('active')) {
            setTimeout(function () {
                storyTitle.style = txtStyle;
                setTimeout(function () {
                    storyTitle2.style = txtStyle;
                }, 200);

                storyTime = setTimeout(function () {
                    storyMenu.style = "transform: translateX(0)";
                    storyNav.forEach(function (el, idx) {
                        setTimeout(function () {
                            el.style = "opacity: 1;"
                        }, 500 + 80 * idx)
                    })

                    setTimeout(function () {
                        storyCover.style = "opacity: 1;"
                    }, 1100)

                    setTimeout(function () {
                        storyBookT.style = txtStyle;
                    }, 1200)
                    setTimeout(function () {
                        storyCon.style = txtStyle;
                    }, 1300)
                    setTimeout(function () {
                        storyCon2.style = txtStyle;
                    }, 1400)
                }, 300)
            }, 300)

        } else {
            storyTitle.removeAttribute('style');
            storyTitle2.removeAttribute('style');
            storyMenu.removeAttribute('style');
            storyNav.forEach(function (el) {
                el.removeAttribute('style');
            })
            storyBookT.removeAttribute('style');
            storyCon.removeAttribute('style');
            storyCon2.removeAttribute('style');
            storyCover.removeAttribute('style');
        }

        if (page[2].classList.contains('active')) {
            if (page[2].classList.contains('detail')) {

            } else {
                detailPage()
            }

        } else {
            if (!page[2].classList.contains('detail')) {
                chooseC.removeAttribute('style')
                chooseC2.removeAttribute('style')
                charSlot.forEach(function (el) {
                    el.children[0].removeAttribute('style')
                    el.children[1].removeAttribute('style')
                    try {
                        el.children[2].removeAttribute('style')
                    } catch {

                    }
                })
                character.forEach(function (el) {
                    el.classList.remove('active');
                })
            }
        }
    }

    introVdo.addEventListener('click', function () {
        this.classList.toggle('active');

        if (this.classList.contains('active')) {
            intro.play();
            introImg.style = "opacity: 0;"
        } else {
            intro.pause();
        }
    })

    intro.onended = function () {
        introImg.removeAttribute('style');
        introVdo.classList.remove('active');
    }

    storyMenu.addEventListener('click', function (e) {
        storyNav.forEach(function (el) {
            el.classList.remove('active');
        })
        e.target.classList.add('active');
    });

    charSlot.forEach(function (el) {
        el.addEventListener('click', cTrigger)
    })

    function cTrigger(e) {
        actClass(e)

        charSlot.forEach(function (el) {
            el.removeEventListener('click', cTrigger)
        })

        setTimeout(function () {
            charSlot.forEach(function (el) {
                el.addEventListener('click', cTrigger)
            })
        }, 1500)
    }

    function actClass(e) {
        character.forEach(function (el) {
            el.classList.remove('active');
        })
        e.target.classList.add('active');

        if (e.target.classList.contains('active')) {
            chooseC.removeAttribute('style')
            setTimeout(function () {
                chooseC2.removeAttribute('style')
            }, 100)
            charSlot.forEach(function (el, idx) {
                setTimeout(function () {
                    el.children[0].removeAttribute('style')
                    el.children[1].removeAttribute('style')
                    try {
                        el.children[2].removeAttribute('style')
                    } catch {}
                }, 300 + 100 * idx)
            });

            setTimeout(function () {
                part03.style = "background: url('img/common/warrior_bg.jpg') no-repeat center / 100% 100%";
                part03.classList.add('detail');
                content2.style = "visibility: visible;"
                detailPage2()
            }, 1200)
        }
    }

    function detailPage() {
        setTimeout(function () {
            chooseC.style = txtStyle;
            setTimeout(function () {
                chooseC2.style = txtStyle;
            }, 100)
            charSlot.forEach(function (el, idx) {
                setTimeout(function () {
                    el.children[0].style = txtStyle;
                    el.children[1].style = txtStyle;
                    try {
                        el.children[2].style = txtStyle;
                    } catch {

                    }
                }, 300 + 150 * idx)
            });
        }, 400);
    }

    function detailPage2() {
        setTimeout(function () {
            character.forEach(function (el) {
                el.classList.remove('active');
            })
            setTimeout(function () {
                classSymbol.style = "top: -3%"
            }, 200);
            setTimeout(function () {
                classType.style = txtStyle;
                classTitle.style = txtStyle;
            }, 600);
            setTimeout(function () {
                classWeapon.style = txtStyle;
                fightType.style = txtStyle;
            }, 800);
            setTimeout(function () {
                classDetail.style = txtStyle;
                classMovie.style = txtStyle;
            }, 800);
            setTimeout(function () {
                secondClass.classList.add('active');
            }, 800);
            setTimeout(function () {
                weaponType.classList.add('active');
            }, 1400);
        }, 200)
    }

    let prevBtn = secondClass.querySelector('.prev');

    prevBtn.addEventListener('click', function () {
        setTimeout(function () {
            weaponType.classList.remove('active');
        }, 200);
        setTimeout(function () {
            secondClass.classList.remove('active');
        }, 600);
        setTimeout(function () {
            classWeapon.removeAttribute('style');
            fightType.removeAttribute('style');
        }, 800);
        setTimeout(function () {
            classDetail.removeAttribute('style');
            classMovie.removeAttribute('style');
        }, 800);
        setTimeout(function () {
            classType.removeAttribute('style');
            classTitle.removeAttribute('style');
        }, 800);
        setTimeout(function () {
            classSymbol.removeAttribute('style');
        }, 1400);
        setTimeout(function () {
            content2.removeAttribute('style');
            part03.removeAttribute('style')
            part03.classList.remove('detail');
            detailPage()
        }, 1800);
    })
})