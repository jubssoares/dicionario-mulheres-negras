function carregaDicionario() {

    var biografias = {

        bio01: {

            nome: "Sônia Guimarães",

            imagem: "https://i.postimg.cc/gjrwzSKX/Design-sem-nome.png",

            descricao:

                "Sonia Guimarães é uma física brasileira, professora do Instituto Tecnológico de Aeronáutica, primeira mulher negra brasileira doutora em Física e primeira mulher negra brasileira a lecionar no ITA, tendo ingressado em 1993, quando a instituição ainda não aceitava mulheres como estudantes.",

            citacao:

                "Faça o melhor que você puder. Prove. Mostre. Estude sempre. Não dê chance para que a injustiça se engaje e fique presa em você. Esteja preparada. Se for necessário, processe. Para as pessoas saberem que você tem direitos!",

        },

        bio02: {

            nome: "Annie Easley",

            imagem: "https://i.postimg.cc/NFVK56NN/Design-sem-nome-1.png",

            descricao:

                "Annie J. Easley (23 de abril de 1933 - 25 de junho de 2011) foi uma cientista da computação, matemática e cientista de foguetes americana. Trabalhou no Lewis Research Center (atualmente denominado Centro de Pesquisa John H. Glenn) da NASA e sua antecessora, National Advisory Comittee for Aeronautics (NACA). Foi a líder do time responsável pelo desenvolvimento do software Centaur para processo conhecido como 'staging' - processo de combinação de várias sessões de foguete que pegam fogo em uma ordem específica e, então, se destacam da nave principal, para que essa atinja o espaço.",

            citacao:

                "Nada foi dado a minorias ou mulheres. Foi preciso muita luta para conseguir essa oportunidade igual e ainda estamos lutando hoje.",

        },

        bio03: {

            nome: "Mae Jemison",

            imagem: "https://i.postimg.cc/76KGy8Sr/Design-sem-nome-2.png",

            descricao:

                "Mae Carol Jemison (Decatur, 17 de outubro de 1956) é uma médica, engenheira e ex-astronauta estadunidense. Foi a primeira mulher negra a ir para o espaço, quando serviu como especialista de missão a bordo do ônibus espacial Endeavour. Jemison se uniu ao grupo de astronautas da NASA de 1987 e serviu na missão STS-47, na qual orbitou a Terra dos dias 12 a 20 de setembro de 1992.",

            citacao:

                "Não deixe ninguém roubar sua imaginação, sua criatividade ou sua curiosidade. É o seu lugar no mundo; é a sua vida. Vá em frente e faça tudo o que puder com ela, e faça dela a vida que você deseja viver.",

        },

        bio04: {

            nome: "Marielle Franco",

            imagem: "https://i.postimg.cc/8fS8KSGX/marielle-franco.png",

            descricao:

                "Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma socióloga, feminista, militante dos direitos humanos e política brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a eleição municipal de 2016, com a quinta maior votação. Crítica da intervenção federal no Rio de Janeiro e da Polícia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de março de 2018, foi assassinada a tiros",

            citacao:

                "Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?",

        },

        bio05: {

            nome: "Lélia Gonzalez",

            imagem: "https://i.postimg.cc/2q1f3GTG/lelia-gonzalez.png",

            descricao: "Lélia Gonzalez foi uma intelectual, política, professora e antropóloga brasileira. Ajudou a fundar instituições como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum. Sua militância em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas eleições seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.",

            citacao:

                "A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora.",

        },

        bio06: {

            nome: "Angela Davis",

            imagem: "https://i.postimg.cc/LJ6SF21r/angela-davis.png",

            descricao:

                "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos.",

            citacao:

                "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar.",

        },

        bio07: {

            nome: "Conceição Evaristo",

            imagem: "https://i.postimg.cc/Z9XzNNMS/conceicao-evaristo.png",

            descricao:

                "Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.",

            citacao:

                "O importante não é ser o primeiro ou primeira, o importante é abrir caminhos.",

        },

        bio08: {

            nome: "Carolina de Jesus",

            imagem: "https://i.postimg.cc/Fdc5VKMJ/carolina-de-jesus.png",

            descricao:

                "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Diário de uma Favelada publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canindé, na zona norte de São Paulo, sustentando a si mesma e seus três filhos como catadora de papéis. Em 1958 tem seu diário publicado sob o nome Quarto de Despejo, com auxílio do jornalista Audálio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze línguas.",

            citacao:

                "Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é.",

        },

        bio09: {

            nome: "Rosa Parks",

            imagem: "https://i.postimg.cc/K1q2Zw74/rosa-parks.png",

            descricao:

                "Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira negra norte-americana, símbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1º de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no ônibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos ônibus de Montgomery e posteriormente viria a marcar o início da luta antissegregacionista.",

            citacao:

                "⁠Você nunca deve ter medo do que está fazendo quando está certo.",

        },

    };

    var content = document.getElementById("content");

    for (var bio in biografias) {

        content.innerHTML +=

        '<div class="card">' +

        '<img src="' +

        biografias[bio].imagem +

        '"/>' +

        "<details>" +

        "<summary>" +

        biografias[bio].nome +

        "</summary>" +

        "<p>" +

        biografias[bio].descricao +

        "</p>" +

        "<blockquote><q>" +

        biografias[bio].citacao +

        "</q></blockquote>" +

        "</details></div>";

    }

}


carregaDicionario();