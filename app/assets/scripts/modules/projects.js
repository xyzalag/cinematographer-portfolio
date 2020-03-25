import { fetch } from 'whatwg-fetch';

class Projects {

    constructor (category) {

        this.category = category.split('.')[0].split('/')[1];
        this.projectImagesPath = `assets/images/${this.category}/`;
        this.container = document.getElementById('container');

        this.init();
    }

    init () {
        this._getData(this.category);
    }

    _getData () {
        return fetch(`assets/scripts/data.json`)
            .then(data => data.json())
            .then(json => this._createUI(json, this.category))
            .catch(() => Projects._handleError())
    }

    _createUI (data, category) {

        const projects = data['projects'][category];
        let projectTitle, projectThumbnail, projectColors, projectVideo;

        projects.forEach((project, i) => {

            projectTitle = project['title'];
            projectThumbnail = this.projectImagesPath + project['thumbnail'];
            projectColors = this.projectImagesPath + project['color_palette'];
            projectVideo = project['video_link'];

            const markupOne =  `
             <div class="row justify-content-center project row-eq-height">
                <div class="col-md project__column project__column--left project__thumbnail">
                    <img class="project__image" src="${projectThumbnail}">
                    <a data-fancybox href="${projectVideo}">
                        <img class="project__play" src="assets/images/play-icon.png">
                    </a>
                </div>
                <div class="col-md project__column project__column--right project__description">
                    <h1 class="project__title">${projectTitle}</h1>
                    <img class="project__color-palette" src="${projectColors}"/>
                 </div>
             </div>
            `;

            const markupTwo = `
             <div class="row justify-content-center project row-eq-height">
                <div class="col-12 col-md order-2 project__column project__column--left project__description">
                    <h1 class="project__title">${projectTitle}</h1>
                    <img class="project__color-palette" src="${projectColors}"/>
                </div>
                <div class="col-12 col-md order-1 order-md-12 project__column project__column--right project__thumbnail">
                    <img class="project__image" src="${projectThumbnail}">
                    <a data-fancybox href="${projectVideo}">
                    <img class="project__play" src="assets/images/play-icon.png">
                    </a>
                </div>
              </div>
            `;

            if (i % 2 === 0) {
                this._appendMarkup(markupOne);
            } else if (i % 2 !== 0) {
                this._appendMarkup(markupTwo);
            }
        });

        this._attachHover();

    }

    _appendMarkup (markup) {
        this.container.innerHTML += markup;

    }

    _attachHover () {
        document.querySelectorAll('.project').forEach((el => el.addEventListener('mouseenter', Projects._handleMouseenter.bind(this))));
        document.querySelectorAll('.project').forEach((el => el.addEventListener('mouseleave', Projects._handleMouseleave.bind(this))));
    }

    static _handleMouseenter (e) {
        e.target.querySelector('.project__play').style.visibility = 'visible';
        e.target.querySelector('.project__thumbnail').style.opacity = '.8';
    }

    static _handleMouseleave (e) {
        e.target.querySelector('.project__play').style.visibility = 'hidden';
        e.target.querySelector('.project__thumbnail').style.opacity = '1';
    }

    static _handleError() {
        console.log('Error');
    }

}

export default Projects
