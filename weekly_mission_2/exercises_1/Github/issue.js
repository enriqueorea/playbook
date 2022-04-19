const Issues = {
    title: 'playbook',
    repositoryNameAssociated: 'enriqueOrea',
    status: 'active',
    numberOfComments: 152,
    labels: 'node.js',
    author: 'enriqueOrea',
    dateCreated: '14-04-2022',
    lastUpdated: '18-04-2022',

    getTitleAndAuthor: function(){
        return `Nombre del Repositorio: ${this.title}, Autor: ${this.author}`
    },

    getGeneralInfo: function(){
        return `
            Hola estas visitando el repositorio: ${this.title}
            Autor: ${this.author}
            Estado: ${this.status}
            Etiquetas:" ${this.labels}
            Creado en: ${this.dateCreated}
        `
    }
}

console.log(Issues.getGeneralInfo)