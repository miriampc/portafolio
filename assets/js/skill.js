const dataSkill=[
    {icon:"fa fa-laptop",
     tittle:"Development",
     subt:"Lo que me da poder",
     skill:['HTML5', 'CSS3', 'Java Script', 'Bootstrap', 'JQuery', 'Foundation', 'Ajax','Materialize','Node js', 'Sass']
    },
    {icon:"fa fa-github",
     tittle:"Project Managing",
     subt:"Herramientas que uso",
     skill:['GIT', 'Github', 'Heroku', 'Trello']
    },
    {icon:"fa fa-smile-o",
     tittle:"Personal",
     subt:"Lo que mejor hago",
     skill:['Trabajo en equipo', 'Proactiva', 'Responsabilidad', 'Detallista']
    }];


$(_=>{
    dataSkill.forEach(element =>{

        const skillBox=$('<div class="box col-md-4"></div>');
        const span=$(`<span class="${element.icon} size-icon"></span>`);
        const h2=$(`<h2>${element.tittle}</h2>`);
        const h5=$(`<h5>${element.subt}</h5>`);
        const divSkills=$(`<div></div>`);

        element.skill.forEach(e =>{
            divSkills.append(`<p>- ${e}</p>`);
        });

        skillBox.append(span);
        skillBox.append(h2);
        skillBox.append(h5);
        skillBox.append(divSkills);
        $('.skills__row').append(skillBox);
    });
});
