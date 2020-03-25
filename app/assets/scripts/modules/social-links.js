import { fetch } from 'whatwg-fetch';

class SocialLinks {
    constructor () {
        this.socialsContainer = document.querySelectorAll('.social-icons');
        if (this.socialsContainer) this.init();
    }

    init () {
        this._getData();
    }

    _getData () {
        return fetch(`assets/scripts/data.json`)
            .then(data => data.json())
            .then(json => this._createUI(json))
            .catch(() => this._handleError())
    }

    _createUI (data) {

        const linkVimeo = data['socials']['vimeo'];
        const linkYoutube = data['socials']['youtube'];
        const linkInstagram = data['socials']['instagram'];

        const markup =  `
            <a hre{linkVimeo}" class="icon"><i class="fa fa-2x fa-vimeo" aria-hidden="true"></i></a>
            <a href="${linkYoutube}" class="icon"><i class="fa fa-2x fa-youtube" aria-hidden="true"></i></a>
            <a href="${linkInstagram}" class="icon"><i class="fa fa-2x fa-instagram" aria-hidden="true"></i></a>f="$
        `;

        this._appendMarkup(markup);
    }

    _appendMarkup (markup) {
        this.socialsContainer.forEach(container => container.innerHTML= markup);
    }

    _handleError() {
        console.log('Error');
    }


}

export default SocialLinks
