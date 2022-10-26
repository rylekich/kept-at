// 1-new videos populate on play
// 2-transcript for that audio populates when that audio is played

// to do: kept at (current time) populates after the audio is finished playing.
// to do: make it so that the transcript pauses when audio pauses
// to do: refactor the transcript code to create an object with the strings of texts, to be populatted through an index array rather than repeating code
// to do: make it so that the scroll follows the new text being populated, bottom-aligned


// 1-new video in the array loops everytime an audio is played

var videos = [
    'IMG_9057.mp4',
    'IMG_8977.mp4',
    'IMG_8994.mp4',
    'IMG_8963.mp4',
    'IMG_6856.mp4',
    'IMG_8833.mp4',
    'IMG_8846.mp4',
    'IMG_6278.mp4',
    'IMG_6333.mp4',
    'IMG_5905.mp4',
    'IMG_6025.mp4',
    'IMG_6035.mp4',
    'IMG_6093.mp4',
    'IMG_4320.mp4',
    'IMG_1658.mp4',
    'IMG_1877.mp4',
    'A63E955E-4411-4216-BEC8-4C63DB8AF1A1IMG_4927.mp4',
    '630C6A2B-7C19-456D-ABF5-072C3F7EC2CBIMG_4238.mp4',
    '2E03AA6B-D7BF-4D43-8FA6-D2E499E3F3D6IMG_5271.mp4',
    '5ab760b5f1f24e1db98ed5ad18f648d9.mp4'
  ]

  let audioPlayers = document.querySelectorAll('audio')
  
  let arrayLength = videos.length;
  var bg = document.querySelector('#myVideo')
  
  counter = 0
  
  audioPlayers.forEach(player =>{
    player.addEventListener('play', function(){
        counter++;
        var i = Math.floor(counter / 1) % videos.length
        console.log(i)
      
        bg.src = 'assets/mp4/'  + videos[i] ; 
      })
  })


  // 2-specific transcript populates to audio when clicked 

        let audiok1 = document.getElementById("k1");
        let audiod1 = document.getElementById("d1");
        let audiok2 = document.getElementById("k2");
        let audiod2 = document.getElementById("d2");
        let audiod2a = document.getElementById("d2a");
        let audiok3 = document.getElementById("k3");
        let audiok3a = document.getElementById("k3a");
        let audiok3b = document.getElementById("k3b");
        let audiok3c = document.getElementById("k3c");
        let audiok3d = document.getElementById("k3d");
        let audiok3e = document.getElementById("k3e");
        let audiod3 = document.getElementById("d3");
        let audiod3a = document.getElementById("d3a");
        let audiok4 = document.getElementById("k4");
        let audiok4a = document.getElementById("k4a");
        let audiok4b = document.getElementById("k4b");
        let audiod4 = document.getElementById("d4");

//--------------------------- Kyle 1

        audiok1.onplay = function() {

                    var showText = function (target, message, index, interval) {   
                        if (index < message.length) {
                            $(target).append(message[index++]);
                            setTimeout(function () { showText(target, message, index, interval); }, interval);
                        }
                    }

                    $(function () {
                            showText("#msg", `KYLE I'm holed up in this house today you know serving you— cosplaying you— when you hole up here when you cat sit in your melancholic housewife fantasy im about to change out these summer clothes for these winter clothes haha in my dresser you know fully like put nails in ... I was just thinking about how we both often are talking about inhabiting characters and I don't know I think i guess I was just wondering for you like what are the actual objects that trigger that for you if you have that cuz I mean i think you know obviously both of us when we put on sunglasses that definitely you know commences the character but I feel like also heels for me are like little announcements like the sounds of the heel is an announcement that im performing that day. ` , 0, 85);   
                        });

                }

//--------------------------- Darnell 1

        audiod1.onplay = function() {


                var showText = function (target, message, index, interval) {   
                    if (index < message.length) {
                        $(target).append(message[index++]);
                        setTimeout(function () { showText(target, message, index, interval); }, interval);
                    }
                }

                $(function () {
                        showText("#msg-l", `DARNELL thats really funny and also kind of sad also because I feel like everytime I watch xuxa it was like mildly hotter in your house and i always kind of liked you know this italian fantasy you once told me you often dream about when youre in your house when it's hot but you know Im glad ur finally seeing your house as i see it, as a guest, and a spectator. in terms of your first question and thinking about objects that make me -kinda propel me- into a character state is what i would offer it think i would say objects that have a heavy connotation or just like a relevant connotation to me i often think when i wear all my gold i'm like yk this like boss ass bitch just bc obviously gold has associations with legacy and richness or wealth rather. I think Another one i think of too are... what was i gonna say books, anytime im carrying a book in my hand or just like a book is in my capacity to some extent i feel like an intellectual even if im not actively reading it i still feel intelligent and i think that also stems from me as a kid i often purposefully carried like random books around even if i never touched them or never read them i would always save them for social events just because i liked the idea that people thought i was smart i suppose ` , 0, 77);   
                    });

                }

//--------------------------- Kyle 2


        audiok2.onplay = function() {

                var showText = function (target, message, index, interval) {   
                    if (index < message.length) {
                        $(target).append(message[index++]);
                        setTimeout(function () { showText(target, message, index, interval); }, interval);
                    }
                }

                $(function () {
                        showText("#msg2", `KYLE I like that gold and books are the two things that came to mind for you cuz they're kind of like respectively symbols for your exterior and interior like beauty and brains baby. I feel like it  reminds me of when you were telling me or  you were saying at that dinner party talking about how you ate a handful of mint because a character in a book that you were reading had done it and you wanted to experience it but you also hated it haha. I mean my definitely my inner monologue is altered by the things I read but I feel like it's more powerful when you're driven to like act on those thoughts - is there something is there a narrative either like a fictional one that you've made up or by someone else that is driving you right now currently like is there something in your inner monologue at the moment ? ` , 0, 85);   
                    });

                }

//--------------------------- Darnell 2

        audiod2.onplay = function() {

                var showText = function (target, message, index, interval) {   
                    if (index < message.length) {
                        $(target).append(message[index++]);
                        setTimeout(function () { showText(target, message, index, interval); }, interval);
                    }
                }

                $(function () {
                        showText("#msg-r", `DARNELL Um This ones a bit harder for me cuz I haven't been reading as much lately so when I think about inner monologue i always think about kind of like my thoughts and kind of whats guiding that i suppose and i dont know if i necessarily have something thats like dominating my inner monologue ya... ` , 0, 40);   
                    });

                }

        audiod2a.onplay= function() {
            
                var showText = function (target, message, index, interval) {   
                    if (index < message.length) {
                        $(target).append(message[index++]);
                        setTimeout(function () { showText(target, message, index, interval); }, interval);
                    }
                }

                $(function () {
                        showText("#msg-r", `I guess I would pose the question back to you, do you have anything that's you know guiding your inner monologue? I guess I think to the last book I read which was Cleanness by Garth Greenwell and Breakfast and Eggs — by oh actually thss incorrect Heaven by Meiko Kawakami, I think my inner monologue at that point was really dominated by this exchange of power I suppose, i think both of those texts could examine like why morals they both examine morals in a way that I found really interesting where yes Cleanness by Garth Greenwell was kna more so in relation about power dyanmicss oflike sex and pleasure and thinking about the negotiation of pleasure while Heaven by Kawakami was moreso thinking about morals in the terms of just like good and bad things happening to other people and I guess that then in relationship to like my inner monologue I was considering the ways in which I treated people i suppose and the ways in which i interact with people in all contexts bc i dont believe intimacy or kindness or pleasure albeit maybe its not sexual in friends is a limited thing or in reserve supply so i think i was thinking about that and thinking about kindness generally especially because heaven is a really sad book. but I don't think I'd read a book in a while it's made me feel like my character or my person is has been like altered i think often that more happens when I watch movies or when I watch-  yea when i watch movies just because i am visually seeing someone behave in a way that is so distilled that is easy for my character to then latch onto that and like kinda like know what makes them different whereas books I feel and especially books that i read now have these layers of complexity as opposed to the books that I read as kids where again kind of mirrored television in that these characters were complex to some degree but also approachable you know for a young adult audience so yea i would say i think i feel more of a character shift or wanting to be different when I am watching a movie because i can understand the character so much quicker yeah ` , 0, 75);   
                    });

        }

//--------------------------- Kyle 3

        audiok3.onplay = function() {

                var showText = function (target, message, index, interval) {   
                    if (index < message.length) {
                        $(target).append(message[index++]);
                        setTimeout(function () { showText(target, message, index, interval); }, interval);
                    }
                }

                $(function () {
                        showText("#msg", `KYLE Im inside of atticus rn just me and the Employees because its disgusting outside and they just watched me like embarrassingly fight with your umbrella but yes I actually 100% agree with you that I tend to be more effective character was like by movies i think because thers a lot of visual cues that you can adopt like whether thats environments theyre in or like literal clothing for like you know smoking cigarettes or taking certain drugs in specific lighting really ets you embody it so I don't I think that plus like music really makes the environment that's then I kind of refer to like right now I would say the narrative I have underpinning is like not a pre-existing fiction but Its like a self made I mean it's essentially referencing a lot of movies but feels like an erotic Thriller but you know there's no sex being had its just the energy and you know there's like an undercurrent of cyberattacks because you know were coding bitches were programmers were hackers and theres like I think partially that influenced by Electronica or like how I feel when I'm listening to electronica feels like Sonically taking drugs and there's something that feels very like powerful or in charge about that visual like being in the city at night even though like being inebriated is usually associated with the loss of control but I feel like that character or that scenario is something that is going in my head which is influenced by the feeling of a soundtrack or the things im reading for thesis ` , 0, 75);   
                    });

                }

            audiok3a.onplay = function() {

                    var showText = function (target, message, index, interval) {   
                        if (index < message.length) {
                            $(target).append(message[index++]);
                            setTimeout(function () { showText(target, message, index, interval); }, interval);
                        }
                    }
    
                    $(function () {
                            showText("#msg", ` I think because we understand how objects and environments are made we usually think about them in relationships or like in situ with characters like wih my bedazzled security cameras live in my Erotic City so I'm just wondering like what are the traits that you see in films or like you know basically what are the things you see yourself drawn to emulating when you character shift and like are those impulses the same across social situations or like you know personal life versus like when you're approaching your work ? ` , 0, 55);   
                        });
    
                    }

            audiok3b.onplay = function() {

                    var showText = function (target, message, index, interval) {   
                        if (index < message.length) {
                            $(target).append(message[index++]);
                            setTimeout(function () { showText(target, message, index, interval); }, interval);
                        }
                    }

                    $(function () {
                            showText("#msg", ` A little life definitely made me think of the distribution of hierarchy between platonic and romantic relationships but i think also the intertwined or integrated nature that JD was that his name like basically the integrated nature of art and living or and how he often uses his friends as the subject of his work but I guess if you just are generally thnking about your life as an extension of your work that of course the people and it would kind of reflect or going to be like a localized version of things youre thinking about. ` , 0, 55);   
                        });

                }

            audiok3c.onplay = function() {

                    var showText = function (target, message, index, interval) {   
                        if (index < message.length) {
                            $(target).append(message[index++]);
                            setTimeout(function () { showText(target, message, index, interval); }, interval);
                        }
                    }

                    $(function () {
                            showText("#msg", ` But I wouldnt say that book personally change anything in me or change the way i was acting at all I feel like power and pleasure in terms of Cleanness for you has definitely been on your mind for a bit and I can see how thats directly seeping into your work. Omg im fighting this umbrella um but yes I can see how that has seeped into your work you know definitely literally with this core project right now and I feel like in your writing when youve read that to me but I don't know if it's bled out into your personal life ` , 0, 55);   
                        });

                }

                audiok3d.onplay = function() {

                    var showText = function (target, message, index, interval) {   
                        if (index < message.length) {
                            $(target).append(message[index++]);
                            setTimeout(function () { showText(target, message, index, interval); }, interval);
                        }
                    }

                    $(function () {
                            showText("#msg", `So yes Books. I mean I also haven't read something in a little bit i mean I feel like books like as props definitely feel like little footnotes or like symbols, things to talk to, in conversation like that day you lent me a little life and we were on the way to palomas house and every bitch in there wanted to talk about it which like I feel like that's partially its like interest also like a personality assessment - what did you whats your take on this controversial book - i agree i dont have books at the moment ` , 0, 55);   
                        });

                }

                audiok3e.onplay = function() {

                    var showText = function (target, message, index, interval) {   
                        if (index < message.length) {
                            $(target).append(message[index++]);
                            setTimeout(function () { showText(target, message, index, interval); }, interval);
                        }
                    }

                    $(function () {
                            showText("#msg", `But theyre a good party ploy i have to say! ` , 0, 20);   
                        });

                }

//--------------------------- Darnell 3

            audiod3.onplay = function() {

                var showText = function (target, message, index, interval) {   
                    if (index < message.length) {
                        $(target).append(message[index++]);
                        setTimeout(function () { showText(target, message, index, interval); }, interval);
                    }
                }

                $(function () {
                        showText("#msg2", `DARNELL I do find it funny that youre struggling with my umbrella its like the way its telling you it doesnt belong to you haha There are three things that I wanted to respond to your question because i found them interesting i know i am gonna forget oneof them and i have already for-oh i remember your question now - I think you first ill organize my thoughts first you talked about being inebrated and how that relates loss of control second you talked about objects in situ and third you asked what in movies do i emulate in my person and what do i emulate in my work  in terms of the first thing which i have now absolutely now fucking forgotten so lets move onto objects in situ i think its interesting you pointed out this relationship and like this implied relationship is what i would argue that the object canot exist in and of itself and you talking about a little life at palomas and i remember rina immediately launching into convo about it - and these objects act as signifiers, i think theres something interesting about this assumption or like that an objects cannot simply exist and  that an object carries meaning or value. Like my harvard sweater i made that ig caption where like its about me wearing this harvard sweater is about how objects are naturally contested and you can just wear a piece of fabric that has a coded meaning with it and even thinking whatever beyond that behind that rather its just an object with letters and symbols its a smattering or a combination of these things and i think that and for some reason I find that so fascinating that yes objects are always thought of in situ and something ive been thinking a lot about  in my own work even if it hasnt shown up. But just conceptually....
                    
                        You describe being inebriated as a loss of control and youre also thinking about electronic music and  electronica and the power being imbued in your midnight city and idk why i find it interesting you said that but it felt almost  oddly contrasted or not completely inline with that thinking. cuz I don't know when I think of being inebriated yes like physically you are slightly impaired or debilitated is too strong slightly impairedk i find it fascinating that u would describe it liek that because  often when I am inebriated  maybe this is my personal experience i feel like im in your midnight city i feel very empowered....
                
                        not like a child necessarily i feel like a little gremlin running around the city and this altered state allows me to enter into a character and it allows me to behave in a way that maybe a bit gruff and a bit brash but it is kind of my immediate reaction to an environment at the hands of a substance and it is a loss of control i think its loss of control in service of the pragmatic in the ways we behave usually … i find interesting and kind of related to the objects in situ, almost like we are the objects and we exist in relation to people and that influences how we behave like i don't behave with a random person the same way i do with you but under the presence of a substance those lines become blurred i start behaving in a way that is objective even if it is truth base reality this base person i am. Or Maybe it is a constructed character and there is a consistency in it because i am slightly not fully mentally adept at that moment and your thoughts about this like creating this world and thinking about the objects that exist in that world - and how our work is like that to like worldbuilding (laugh)suzan sellers shout out lol. How our world and our practice relates to this larger… ` , 0, 50);   
                    });

            }
                            
                    

            audiod3a.onplay = function() {

                var showText = function (target, message, index, interval) {   
                    if (index < message.length) {
                        $(target).append(message[index++]);
                        setTimeout(function () { showText(target, message, index, interval); }, interval);
                    }
                }

                $(function () {
                        showText("#msg2", `Sorry that one was really long and I think I finished my thought but i dont remember i think its fine regardless if i didnt. Worldbuilding whatever...
                        
                        You asked When im consuming media are there things i apply to my character and apply to my work- foi would say in terms of my character I feel like when I was younger I always really liked strong female characters I think that I've always I never seen myself as a true masculine figure and so ithink when i saw strength in men i saw aggression and i saw I think just like a bad example of what I didn't want to be but when I always saw an empowered woman I always felt like there was this character I could look at and I could agree with. even though I of course this was like in high school, early days of college it was not obviously in conjunction with like “oh i am a man” and if i behave in this very like forthright way it communicates something different as opposed to a woman does when a woman has been subjugated ,informed but partially enforced to be submissive. So i think As a kid i really gravitated towards those characters..
                        
                        I would say Now I watch a lot of movies about love, i think its just one thing that fascinates me  and partially relates to my practice. I think when i watch movies now i think about tender characters i think of people and how they relate to each other i think back to contempt which obviously we just watched. when i first watched it i was really taken by camilles character i was rly attracted to cammiles character because of her aloofness and i think thats another shifting from the strong woman archetype i think aloofness and being elusive is something ive always been very attracted to and being mysterious because i think ive i guess ive always just really liked obscurity in my own character although i think i naturally do it and and i dont need help doing it - but i think ya theres something about refusing someone and someone still pursuing you that ive always been interested in this i guess the inherent i wouldnt say inherent. The exchange of being so hard to pin down or so hard to understand but still being pursued theres still interest regardless like even if you arent directly expressing the interesting parts of your character someone still wants you. And i think ive always likd that safety net(?) of  Interest and desire i dont have to perform i dont have to be a particular way and youre still gonna like me theres confidence in that...
                        
                        But i also think too and thinking back to my work,  I think times in which those characters exist in media and film they are subjected to the desires and fantasies and imagined realities of other people i dont think i have a critical lens in terms of whether its harmful or its bad and obviously projecting is bad maybe but i dont even want to make that grand of a statement honestly and what carries that interest a lot of times is desire and it is fantasy and it is wanting to know someone because youve constructed this image in your head and you want to match them together and i think thats interesting to me.
                        
                        I think now. but If im to apply this work Sorry this is getting really long- if im to apply this to my work. I would say that these dual realities which i've talked to you about before (heterotopias) the distance and gap between imagined reality and reality and its potential of  an imagined reality that i'm very interested in my own work about this space and about these projections and about how we dont ever have a truly confident or full construction of a person yet we can love a person we can trust that regardless of what they'll reveal about themselves they will continue to be someone that  we can love. And I think that is something that I am thinking about in my work. I think Reality is definitely something in my work that I'm considering, i would say the relations between people and like what motivates people to stay together or continue to pursue each other is something I look to in films at this point and that i find of interest. ` , 0, 50);   
                    });

            }
                            
//--------------------------- Kyle 4

audiok4.onplay = function() {

    var showText = function (target, message, index, interval) {   
        if (index < message.length) {
            $(target).append(message[index++]);
            setTimeout(function () { showText(target, message, index, interval); }, interval);
        }
    }

    $(function () {
            showText("#msg-l", `KYLE Ok lets get back into this shit haha sorry took me a while had to relisten to see where did we leave off but i think that line you left off with  “Even when you don't have a full construction of a person, you're still able to love them completely.” i think is v beautifully put i was thinking about this in relation to obscurity, because I think intimacy is about unveiling yourself in a lot of different ways, how many ways can you see me or put me together. As youre going through and revealing parts  of yourself youre giving a more full picture but you never get a full construction as you say. But ya there is a misconception that seeing is knowing like that even if you fully see all of those parts it really doesnt put into question that people are in control of what they let people see regardless...
        
            So yea Theres still a control aspect of what is seen and we can control that but we cant ctontrol what they interpret from those signs. and what they cant. and vice versa.. But yea i get The hope being that after all of those signs of you have been shown that yes, theyre compelled to stay and would want to learn more and are not put off after all of these different sides of yourself have been exposed...
    
            I’m not personally interested in orchestrating situations between people as performance as you have been or the way youre talking about it: relational aesthetics, i guess but I become more interested in it when I hear you speak about it,because theres overlapping conceptual things im interested in my work and i think theres something really cool about thinking about people in that way and focusg on the relationship itself as a thing. ` , 0, 30);   
        });

}

audiok4a.onplay = function() {

    var showText = function (target, message, index, interval) {   
        if (index < message.length) {
            $(target).append(message[index++]);
            setTimeout(function () { showText(target, message, index, interval); }, interval);
        }
    }

    $(function () {
            showText("#msg-l", `I think One of the things weve talked about along those lines is your thoughts on desire as heterotopia and how you were connecting that to Anne Carson’s quote “wet” woman the face that shes (boundaryless) and the rigid man. I’m really compelled by this idea because I personally have been thinking about the overload of information as a way of obscuring, and like transparency being a way of hiding by overstimulating and distracting — and I like from what youve described because ive not read it directly that Carson embodies this method of boundaryless and attributing this chaos into a woman. I feel like I often see women portrayed as stable partners, supporters, planners, project managers, in service to role, in service of men who are then afforded the freedom to just live as the minutiae of living life is taken care of. I mean this is pretty general and stereotypical but i guess those physical properties being boundaryless or rigidity speak more to a relationship between two things rather than an focus on an individual object or person. ` , 0, 30);   
        });

}

audiok4b.onplay = function() {

    var showText = function (target, message, index, interval) {   
        if (index < message.length) {
            $(target).append(message[index++]);
            setTimeout(function () { showText(target, message, index, interval); }, interval);
        }
    }

    $(function () {
            showText("#msg-l", `And Yea to the last point like i think about- i guess all objects are in situ - because all objects are designed and have a use. I guess the only ones that are made without use would probably be defined as art? Sculptures? I guess theres also arguable uses for those things Or things that are made naturally - of gaia. Like flowers etc-but i feel  like if you just index most “things” objects included in things theres probably design included int hose things. Feels like a big qute to say everything is designed that exist natural or not there is probably design involved. What is considered natural can also be contested: but thats kind of a tangent. But yes i like thinking about uselessness and usefulness in terms of objects, tools, people as well as the things they may signify. Symbolizing is a use for me, when we talk about a character that uses symbols to embody or act in a certain way so i feel like those objects act as vectors for action but yea off the top of my head… I cant think of an object without context.which is kind of interesting and im wondering if thats also- i think because were both thinking about obscurity in our work is that ultimately what were trying to do? Are we trying to get rid of context. One of my questions is can you expand on the heterotopia in a more comprehensive way because its not been recorded and whatever else you want. ` , 0, 30);   
        });

}


//--------------------------- Darnell 4

audiod4.onplay = function() {

    var showText = function (target, message, index, interval) {   
        if (index < message.length) {
            $(target).append(message[index++]);
            setTimeout(function () { showText(target, message, index, interval); }, interval);
        }
    }

    $(function () {
            showText("#msg-r", `DARNELL I just recorded and someone called me and it disrupted the entier thing so i am going to record it again i feel like describing where i am right now im at the sterling hall of medicane the med library i just passed the food trucks that davy always talks about lets see if i can backtrack and remember what i was talking about..
    
            First theres sometihng about hope and hoping that someone will love you and thats always kind of a gamble to some extent and sometimes its more sever than others obviously and theres something about trusting that someone or distrusting will love you that i find myself really interested in because trust and distrust relate to obscurinty and when i think of  about my own work and the work iw ant to make often times its categorized by  a distrust of other people in relation to handling sensitive information which  kind of reminds me of minority vs white designers and how we were talking about maximalist designand whether or not minority designers are  allowed to or rather people should be more receptive to POC designers  not being maximalist. There is a sense of trust in obscurity even tho it manifests - oh they have a blue state here- even if its manifests in distrust and not believing or handling information and i think i didnt really consider this sense of it i guess i did cuz i told u about it when we were in new york and ya i dont know i think i need to think about trust and deception..
            
            I think i was on boundaries, ill go to anne carson, my lover. So i really like her as t text and i think waht i was saying is that i reall ylike these conceptions and metaphors for people  and one of the reason si like reading the classics is that theres so many  metaphors imbued in in the reception of people and the allegories and very interesting way to recontextualize our relationships with other people. All women are wet and all men are earth which is the actual quote is a blanket statement you can t make a blanket statement like that but its a rethinking that occurs, these characters and applying it to people in our lives and how that kind of plays out in social situations. I know that you mentioned briefly and you mentioned content which i wanna talk about but i also want talk about wet woman - oh this is a park thats nice maybe ill cross th street a psychiatric hospital?? Im looking at a little dog rn - um so i think that on the subject of menand women you were talking about taking care of the home eand how that establishes a good foundation for men to behave how they want to becase they have somewhere to return to and that relates to bell hooks and the will to change where her mom took care of the house and father worked. If im not mistaken he was on and offw ith work but she was always really consistent with how she took care of the home and without that basis i can imagine how their lives wouldve been  harder especially when you have this man and this fear becomes domineering presence who becomes this emotionally withdrawn presence, a nightmare that walks in your house which i find very eerie and very true. I think thinking of usefulness i think of the greeks at this point to bring it back i think knowledge and antiquity by anne carson, how daning i suppose the effect of woman oft can be this chaotic energy supposedly imbued in woman and the power in ruining and reckoning that they have - in the antiquity piece- since men are earth and women are water they cant be contained- to contrast or inverting of who takes care of the home - i know she mentions mens fear of women because they can pass from  home to home because they are this malleable substance (being water)  something to think about when we think of contemporary and antiquated ways of male and female roles in the home. Its a brilliant piece, weddings wearing a veil no one was allowed to see womans face til much later in the ceremony and its this presentation essentially, this confinement of a substance that is naturally very moveable (?) right now im looking at the x hotel but im not there. Yes this confinement or containment of putting something in a box when it doesnt need to be like the sea a giant mass..
    
            You talked about information overload as aa wy of obscuring and i think thats really brilliant - when i think of obscurity in my work - lafayette? Isnt that a street in new york?- um i think of theres the x building its a very tall building very ugly- i think of what was i gonna say- i think thats really brilliangtbecause when i think of obscuring information i always think of  giving the least amount of information to give a context - so i think i always want to give the least amount of information possible  but i think theres a brilliance in giving so much information it is lost and just like imagining a stack of paper all strewn about youre gonna miss something that you dont want to read. I do think  of information overload but i think of it really poorly because of peoples popular opinion  como se dice popular opinion of IG being info overload - globalism , coming out as an imperialist or whatever the fancy word is - i really like that consideration, there must be something else i have to say, huhh we talked about something …
    
            Desire as heterotopia: desire is somethin that exists within us, melanie hoff, sex creates the worlds we want to live in but i think desire creates the worlds we want to live in as well, they create imaginative  realities that i think of desire creates an imagined reality inside of us and i go back to anne carsons eros nd bittersweet where she defines desire as existing within the boundaries of a person, and i think ive been thinkign of boundaries as it release to opacity as it relates to  trust as it relates to how we interact with each other in social situations and i think that it creates the world within the obundaires of our character which is beautiful and sweet- 
    
            Why i think desigre is a heterotopia is that it exists  within us but can also exist outside of us.  And the potential within those states is something that i think is what classifies it as a heterotopia . if i love someone the desire is in me that creates this world - the potentialf for it to happen creates  a potential reality to appear in front of me, but if also i start dating that person then the desire within me doesnt necessarily have to go away but now both desires exist, and in both realities, the reality you exist in internally within ur boundaries, and the external world ot of ur boundary- then if we think of woman as water and slipping between those boundaries you can desire something and it happens - i could want a tesla then i get it and in that theres this nice exchange between existing inside and existing outside. Idk if im explaingint this well but im trying. Its a malleable substance, osmosis between both boundaries and theres something reall ynice about that i find rly interesting...Heterotopia is a state - actually a  mirror is a good example - if you look at a mirror you see yourself you see your surroundings those things exist, the projection you see within the mirror exists as its own reality but it doesnt actually exist. But the object itself the mirror, is a thing, so it its this dual potential i suppose of separate realities, something spaces, almost , something validated by your sight. If im applying desire to this model - i would say  what you desire is the projection of the mirror and it is the mirror. Its the object itself that blesses you and reality around it. If im to use the model of someone loving me i can desire things in this mirror and they appear and someone who loves me can come home and be in the mirror and all these things are true and all these realities exist on equal plane. So yea i think thats it its been 15 minutes im walking pass by x bowl ? acai bowl and im walking past this blue state and heading back to you. ` , 0, 60);   
        });

}