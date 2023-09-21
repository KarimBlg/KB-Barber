
let commentList = [
    {
      name: 'Philippe Negrier',
      commentary:
        "L'accueil est souriant et bienveillant, le professionnalisme de Karim est plus qu'à la hauteur, que ce soit pour un homme attentif comme moi ou pour mon fils adolescent. Je n'en ai pas changé depuis 15 ans et avant même d'être propriétaire de son salon, il avait déjà cet engagement, ce souci de qualité et de respect de ses clients. ",
    },
    {
      name: 'David Stevens',
      commentary:
        "Je vous conseille vivement KB Barber. Tout y est : l'accueil, l'écoute, les conseils, le professionnalisme et des tarifs très corrects ! <br> Karim est adorable. N'hésitez surtout pas.",
    },
    {
      name: 'Billal Tarebhat',
      commentary:
        " Un super salon avec un super coiffeur (Karim) et un accueil chaleureux !! Bref c'est devenu mon adresse pour me faire couper les cheveux à Paris. <br> N'hésitez pas vous ne le regretterez pas !",
    },
    {
      name: 'Romain Dufrene',
      commentary:
        " Vous cherchez un salon professionnel, un coiffeur attentionné, disponible, souriant et s'adaptant aux demandes de ses clients ? <br> N'attendez plus et foncez à KB Barber !",
    },
    {
      name: 'Amine',
      commentary:
        "KB Barber est mon salon de coiffure depuis 4 ans. Le résultat est toujours impeccable, parfaitement conforme à mes attentes, pour un prix plus que raisonnable. <br> Et le patron est agréable, ce qui ne gâche rien.",
    },
    {
      name: 'Anthony Kermarquer',
      commentary:
        "Karim est toujours extrêmement attentionné, agréable et à mon écoute. Ma coupe est parfaite même si j'ai le crâne carré et les cheveux comme des crayons. <br> Cela fait 10 ans que je le suis jusqu'à son installation à cette adresse.",
    },
    {
      name: 'Messi Mouss',
      commentary:
        "Karim est un mec magnifique, dans son salon je suis toujours à l'aise. Il discute avec le client et il est très respectueux. <br> Je le connais depuis presque dix ans et il est toujours égale a luimême, je lui souhaite tout le bonheur et la réussite !",
    },
    {
      name: 'Nathan',
      commentary:
        "Super salon ! Le patron est vraiment très gentil et doté d’un sens de l’humour impeccable. Très à l’écoute des souhaits de ses clients son coup de ciseaux est à chaque fois une réussite. <br> J’y passe toujours un très bon moment et j'y ressors toujours plus que satisfait. À recommander absolument !",
    },
    {
      name: 'Vincent Villemer',
      commentary:
        ' Le patron est sympa, souriant malgré le masque et très professionnel. Bien coiffé et paré pour les vacances au soleil ! <br> Allez-y sans inquiétude. ',
    },
    {
      name: 'Nicolas Bergeron',
      commentary:
        "Première expérience, un moment très agréable ! Merci à la personne qui s'est occupée de moi, le résultat est très satisfaisant ! <br> J'y retournerai et je recommande vivement.",
    },
    {
      name: 'Guillaume Peignon',
      commentary:
        'Des coupes parfaites et des bonbons pour les enfants. Bref, on sort avec le sourire !',
    },
    {
      name: 'Patrice Bensimon',
      commentary:
        "Salon à la propreté irréprochable. Je suis coiffé par son propriétaire depuis plus de 15 ans et j'y vais les yeux fermés. <br> La coupe correspond toujours à mes attentes, dans la bonne humeur et la bienveillance.",
    },
  ]
  
  function getRandomNumbers(list) {
    const randomList = []
    for (let i = 1; i < 2; ) {
      const random = Math.floor(Math.random() * list.length)
      if (randomList.includes(random) == false) {
        randomList.push(random)
      }
      if (randomList.length == 5) {
        return randomList
      }
    }
  }
  
  const randomCommentList = getRandomNumbers(commentList)
  
  function getComment(nb) {
    for (let i = 0; i < 5; i++) {
      const carouselBtn = document.querySelector(`#button-${i}`)
      carouselBtn.src = 'assets/images/circle.svg'
    }
    const name = document.querySelector('#name')
    const comment = document.querySelector('.comment')
    const circleSelected = document.querySelector(`#button-${nb}`)
    name.textContent = commentList[randomCommentList[nb]].name
    comment.innerHTML = commentList[randomCommentList[nb]].commentary
    circleSelected.src = 'assets/images/circle-violet.svg'
    num = nb
  }
  
  getComment(0)
  
  function timeout() {
    setTimeout(function () {
      if (num < randomCommentList.length - 1) num += 1
      else num = 0
      getComment(num)
      timeout()
    }, 10000)
  }
  
  timeout()
  