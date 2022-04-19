const pullRequest = {
    title: 'Revisando el archivo playbook.js',
    branchName: 'main',
    dateCreated: '18-04-2022',
    status: "pendiente",
    repositoryNameAssociated: 'playbook',

    getStatus: function() {
        return `El estado del pull request es: ${this.status}`
    },

    getTitleAndAuto: function(){
        return `Pull Request: ${this.title}, Autor: ${this.repositoryNameAssociated}`
    }
}