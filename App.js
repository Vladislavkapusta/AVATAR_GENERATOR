class AvatarGenerator extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            margin: 20px;
          }
          input {
            font-size: 20px;
            padding: 10px;
            border-radius: 5px;
            border: none;
            margin-right: 10px;
          }
          button {
            font-size: 20px;
            padding: 10px;
            border-radius: 5px;
            border: none;
            background-color: #007bff;
            color: #fff;
            cursor: pointer;
          }
          .avatar {
            display: inline-block;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            font-size: 40px;
            text-align: center;
            line-height: 100px;
            color: #fff;
            background-color: #000;
          }
        </style>
        <div class="avatar"></div>
        <input type="text" placeholder="Enter your name">
        <button>Generate</button>
      `;
      this.avatar = this.shadowRoot.querySelector('.avatar');
      this.input = this.shadowRoot.querySelector('input');
      this.button = this.shadowRoot.querySelector('button');
      this.button.addEventListener('click', () => this.generateAvatar());
      this.input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          this.generateAvatar();
        }
      });
    }
  
    generateAvatar() {
      const name = this.input.value.trim();
      if (name) {
        const initials = name.split(' ').map(word => word.charAt(0)).join('');
        const color = this.getRandomColor();
        this.avatar.textContent = initials;
        this.avatar.style.backgroundColor = color;
      }
    }
  
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
  
  customElements.define('avatar-generator', AvatarGenerator);