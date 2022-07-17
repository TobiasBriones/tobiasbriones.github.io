const URL = `https://api.github.com/users/tobiasbriones/repos?per_page=100`;

export default {
  data() {
    return { projects: [] };
  },
  async mounted() {
    const res = await fetch(URL);
    const data = await res.json();
    const filterObj = obj => !obj.fork;
    this.projects = data.filter(filterObj);
  },
  methods: {
    home(project) {
      return `https://dev.mathsoftware.engineer/${ project.name }`;
    }
  },
  template: `
    <div class="m-5">
      <h1 class="mx-4 my-4">
        Projects ({{ projects.length }}) | DEV | Math Software Engineer
      </h1>
      <div class="profile mx-4">
        <img src="https://github.com/tobiasbriones.png" alt="Tobias Briones">
        <div class="my-2"><strong>Tobias Briones</strong></div>
        <a href="https://github.com/tobiasbriones">GitHub</a>
        -
        <a href="https://twitter.com/tobiasbriones_">Twitter</a>
        -
        <a href="https://linkedin.com/u/tobiasbriones">LinkedIn</a>
      </div>
      
      <div>
        Notice: This is a temporal page design while I'm working on other stuff...
      </div>
      
      <div class="grid grid-cols-2 gap-4 mx-5 my-4 content-center cursor-pointer project">
          {{ project }}
        <a :href="home(project)"
          v-for="project in projects">
          <div class="px-4 py-4 name">
            {{ project.name }}
          </div>
          <div class="px-4 align-middle description">
            {{ project.description }}
          </div>
        </a>
      </div>
    </div>
  `
};
