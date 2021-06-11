const DefaultConfig = {
    dense: false,
    transition: 'x',
    iconBar: [
        {
            icon: 'mdi-arrow-left',
            handler(ins) {
                ins.$router.go(-1);
            },
        },
        {
            icon: 'mdi-refresh',
            handler() {
                window.location.reload();
            },
        },
        {
            icon: 'mdi-home',
            handler(ins) {
                if (ins.$route.path !== '/') {
                    ins.$router.push('/');
                }
            },
        },
        {
            icon: 'mdi-arrow-right',
            handler(ins) {
                ins.$router.go(1);
            },
        },
    ],
    eventActions: {
        link: [
            {
                title: 'Open in new tab',
                handler(inst) {
                    window.open(inst.currentLink);
                },
            },
            {
                title: 'Copy link',
                handler(inst) {
                    inst.clipboard = inst.currentLink;
                    inst.$nextTick(() => {
                        inst.copy();
                    });
                },
            },
        ],
        image: [
            {
                title: 'Open image in new tab',
                handler(inst) {
                    window.open(inst.currentImage);
                },
            },
            {
                title: 'Copy image URL',
                handler(inst) {
                    inst.clipboard = inst.currentImage;
                    inst.$nextTick(() => {
                        inst.copy();
                    });
                },
            },
        ],
    },
    normalActions: [
        {
            title: 'Default 1',
            handler() {
                alert(this.title);
            },
        },
        {
            title: 'Default 2',
            handler() {
                alert(this.title);
            },
        },
        {
            title: 'Default 3',
            handler() {
                alert(this.title);
            },
        },
    ],
    stickyActions: [
        {
            title: 'Switch mode',
            handler(inst) {
                inst.$vuetify.theme.dark = !inst.$vuetify.theme.dark;
                if (inst.$vuetify.theme.dark) {
                    document.body.setAttribute('data-theme', 'dark');
                    localStorage.setItem('mode', 'dark');
                }
                else {
                    document.body.setAttribute('data-theme', 'light');
                    localStorage.setItem('mode', 'light');
                }
            },
        },
    ],
    sniffingFunctions: {
        image: [
            {
                fn(e) {
                    return e[0].currentSrc;
                },
            },
            {
                fn(e) {
                    if (e[0].children.length) {
                        return e[0].children[0].getAttribute('src');
                    }
                },
            },
            {
                fn(e) {
                    let img = '';
                    for (let i = 0; i < 3; i += 1) {
                        img = e[i].style.backgroundImage.split('"')[1];
                        if (img) {
                            break;
                        }
                    }
                    return img;
                },
            },
        ],
        link: [
            {
                fn(e) {
                    let link = '';
                    for (let i = 0; i < 5; i += 1) {
                        link = e[i].href;
                        if (link) {
                            break;
                        }
                    }
                    return link;
                },
            },
        ],
    },
};
export default DefaultConfig;
//# sourceMappingURL=config.js.map