
module.exports = {
    title: "The Homestuck Slur Replacement Project", 
    author: "Jonaya Riley (@AltUniverseWash)",
    modVersion: 0.1,

    trees: {
        './advimgs/': 'assets://advimgs/',
        './storyfiles/': 'assets://storyfiles/',
        './sweetbroandhellajeff/': 'assets://sweetbroandhellajeff/',
        './archive/comics/': 'assets://archive/comics/'
    },

    edit(archive) {
        archive.mspa.story['000126'].content = archive.mspa.story['000126'].content.replace(
          "You're beginning to suspect this was a retarded idea.", 
          "You're beginning to suspect this was a bad idea.")
        archive.mspa.story['001386'].content = archive.mspa.story['001386'].content.replace(
          "Zombie Ace Dick is borderline retarded and usually can't do anything other than bite things and absorb preposterous amounts of damage!", 
          "Zombie Ace Dick has the self-awareness of a brick and usually can't do anything other than bite things and absorb preposterous amounts of damage!")
        archive.mspa.story['002054'].content = archive.mspa.story['002054'].content.replace(
          '<span style="color: #0715cd">EB: ugh, i was fussing with my retarded sylladex.</span>', 
          '<span style="color: #0715cd">EB: ugh, i was fussing with my stupid sylladex.</span>')
        archive.mspa.story['002233'].content = archive.mspa.story['002233'].content.replace(
          '<span style="color: #e00707">TG: he will play it with you and probably be tickled retarded about it</span>', 
          '<span style="color: #e00707">TG: he will play it with you and probably be tickled stupid about it</span>')
        archive.mspa.story['002286'].content = archive.mspa.story['002286'].content.replace(
          '<span style="color: #0715cd">EB: that\'s fine, you are entitled to your opinion, i am just saying that being a white guy who is a rapper with a ventriloquist doll is not cool by any stretch of the imagination or by any definition of word cool, ironic or otherwise. that\'s all i\'m saying.</span>', 
          '<span style="color: #0715cd">EB: that\'s fine, you are entitled to your opinion, i am just saying that being a shitty rapper with a ventriloquist doll is not cool by any stretch of the imagination or by any definition of word cool, ironic or otherwise. that\'s all i\'m saying.</span>')
        archive.mspa.story['002287'].content = archive.mspa.story['002287'].content.replace(
          'Only retarded babies who poop in their diapers believe in that stuff.', 
          'Only little babies who poop in their diapers believe in that stuff.')
        archive.mspa.story['002718'].content = archive.mspa.story['002718'].content.replace(
          'But you will not dignify the thought of turning the knob much further because you are not retarded.', 
          'But you will not dignify the thought of turning the knob much further because you are not stupid.')
        archive.mspa.story['002729'].content = archive.mspa.story['002729'].content.replace(
          '<span style="color: #e00707">TG: waving around my faggoty chumpductor baton</span>', 
          '<span style="color: #e00707">TG: waving around my babyass chumpductor baton</span>')
        archive.mspa.story['002745'].content = archive.mspa.story['002745'].content.replace(
          '[By <a href="https://twitter.com/Gankra_" target="_blank" class="postlink">Gankra</a>]', 
          '[By <a href="https://twitter.com/Gankra_" target="_blank" class="postlink">Gankro</a>]')
        archive.mspa.story['002761'].content = archive.mspa.story['002761'].content.replace(
          "At the center, you find a little stage that looks perfect for supporting a spectacularly silly dance. Or it would if standing on it didn't make you a little nervous, and also if that didn't sound like a retarded idea given the circumstances. ", 
          "At the center, you find a little stage that looks perfect for supporting a spectacularly silly dance. Or it would if standing on it didn't make you a little nervous, and also if that didn't sound like a bad idea given the circumstances. ")
        archive.mspa.story['002900'].content = archive.mspa.story['002900'].content.replace(
          '<span style="color: #0715cd">GT: there are either like fifty of these retards or it\'s one guy with a lot of alt accounts.</span>', 
          '<span style="color: #0715cd">GT: there are either like fifty of these jackasses or it\'s one guy with a lot of alt accounts.</span>')
        archive.mspa.story['003300'].content = archive.mspa.story['003300'].content.replace(
          '<span style="color: #e00707">TG: well maybe you should take the opportunity to put it somewhere that isnt stone cold retarded</span>', 
          '<span style="color: #e00707">TG: well maybe you should take the opportunity to put it somewhere that isnt stone cold ridiculous</span>')
        archive.mspa.story['003423'].content = archive.mspa.story['003423'].content.replace(
          '<span style="color: #0715cd">EB: oh also they\'re moving backwards in time, which sounds really retarded, but whatever.</span>', 
          '<span style="color: #0715cd">EB: oh also they\'re moving backwards in time, which sounds like bullshit, but whatever.</span>')
        archive.mspa.story['003425'].content = archive.mspa.story['003425'].content.replace(
          '<span style="color: #0715cd">GT: there are either like fifty of these retards or it\'s one guy with a lot of alt accounts.</span>', 
          '<span style="color: #0715cd">GT: there are either like fifty of these jackasses or it\'s one guy with a lot of alt accounts.</span>')
        archive.mspa.story['003543'].content = archive.mspa.story['003543'].content.replace(
          '<span style="color: #e00707">TG: and above all try not to do anything retarded</span>', 
          '<span style="color: #e00707">TG: and above all try not to do anything stupid</span>')
        archive.mspa.story['003803'].content = archive.mspa.story['003803'].content.replace(
          '<span style="color: #626262">CG: UNLESS I WANT TO DO THE SORT OF DUMB SCHIZOPHRENIC HOPPING AROUND LIKE THE OTHERS.</span>', 
          '<span style="color: #626262">CG: UNLESS I WANT TO DO THE SORT OF DUMB JACKASS HOPPING AROUND LIKE THE OTHERS.</span>')
        archive.mspa.story['003927'].content = archive.mspa.story['003927'].content.replace(
          '<span style="color: #626262">CG: I DON\'T KNOW WHY MOST OF OUR FRIENDS ARE SUCH PSYCHOS.</span>', 
          '<span style="color: #626262">CG: I DON\'T KNOW WHY MOST OF OUR FRIENDS ARE SUCH WEIRDOS.</span>')
        archive.mspa.story['003961'].content = archive.mspa.story['003961'].content.replace(
          '<span style="color: #626262">CG: A LEADER SHOULDN\'T BE AT THE MERCY OF THE HIVE RENOVATION WHIMSY OF A PSYCHOTIC BLIND GIRL.</span>', 
          '<span style="color: #626262">CG: A LEADER SHOULDN\'T BE AT THE MERCY OF THE HIVE RENOVATION WHIMSY OF AN UNHINGED BLIND GIRL.</span>')
        archive.mspa.story['003982'].content = archive.mspa.story['003982'].content.replace(
          '<span style="color: #a1a100">TA: and ii gue22 beiing generally 2avvy and pretty decent at other 2tuff, but that2 why iim piickiing you and not 2ome other fuckiing 2chlub from retardatiion row.</span>', 
          '<span style="color: #a1a100">TA: and ii gue22 beiing generally 2avvy and pretty decent at other 2tuff, but that2 why iim piickiing you and not 2ome other fuckiing 2chlub from iidiiotviille.</span>')
        archive.mspa.story['004061'].content = archive.mspa.story['004061'].content.replace(
          '<span style="color: #626262">CG: KARKAT CAN\'T BELIEVE HE\'S ASKING AN AUTISTIC GIRL IN A CAVE TO JOIN HIS TEAM.</span>', 
          '<span style="color: #626262">CG: KARKAT CAN\'T BELIEVE HE\'S ASKING A FERAL GIRL IN A CAVE TO JOIN HIS TEAM.</span>')
        archive.mspa.story['004072'].content = archive.mspa.story['004072'].content.replace(
          '<span style="color: #005682">AG: Hey 8oy-Skytard, are you going to just stand there all night?</span>', 
          '<span style="color: #005682">AG: Hey 8oy-Skyshit, are you going to just stand there all night?</span>')
        archive.mspa.story['004078'].content = archive.mspa.story['004078'].content.replace(
          '<span style="color: #626262">CG: NO YOU\'RE JUST A RUN OF THE MILL LITTLE PSYCHO GIRL, A TROLL CAEGAR A DOZEN.</span>', 
          '<span style="color: #626262">CG: NO YOU\'RE JUST A RUN OF THE MILL LITTLE FUCKED-UP GIRL, A TROLL CAEGAR A DOZEN.</span>')
        archive.mspa.story['004102'].content = archive.mspa.story['004102'].content.replace(
          '<span style="color: #005682">AG: It\'s like a fun game for super extra handicapped retarded people. Like opening a present! Find out what o8noxious thing the mystery tool typed.</span>', 
          '<span style="color: #005682">AG: It\'s like a fun game for super extra dum8ass diaper babies. Like opening a present! Find out what o8noxious thing the mystery tool typed.</span>')
        archive.mspa.story['004228'].content = archive.mspa.story['004228'].content.replace(
          '<span style="color: #77003c">CC: )(-EY! Lets stop being retarded for a minute.</span>', 
          '<span style="color: #77003c">CC: )(-EY! Lets stop being stupid for a minute.</span>')
        archive.mspa.story['004251'].content = archive.mspa.story['004251'].content.replace(
          '<span style="color: #005682">AG: Say you\'re sorry for being a cripple! Wheeeeeeee!</span>', 
          '<span style="color: #005682">AG: Say you\'re sorry for 8eing such a useless shit! Wheeeeeeee!</span>')
        // archive.mspa.story['004250'].content
        {[
          [
            "<span style=\"color: #005682\">AG: Why did I have to get stuck with the cripple? Just my luck.</span>",
            "<span style=\"color: #005682\">AG: Why did I have to get stuck with this useless 8astard? Just my luck.</span>"
          ],
          [
            "<span style=\"color: #005682\">AG: For 8eing crippled, you ass!</span>",
            "<span style=\"color: #005682\">AG: For 8eing useless shit, you ass!</span>"
          ]
        ].forEach(t => (archive.mspa.story['004250'].content = archive.mspa.story['004250'].content.replace(t[0], t[1])))}
        // archive.mspa.story['004447'].content
        {[
          [
            "<span style=\"color: #005682\">FUTURE arachnidsGrip [FAG]</span> 609 HOURS FROM NOW responded to memo.",
            "<span style=\"color: #005682\">LATER arachnidsGrip [LAG]</span> 609 HOURS FROM NOW responded to memo."
          ],
          [
            "<span style=\"color: #005682\">FAG: ::::D</span>",
            "<span style=\"color: #005682\">LAG: ::::D</span>"
          ],
          [
            "<span style=\"color: #005682\">FAG: Kaaaaaaaarkat!</span>",
            "<span style=\"color: #005682\">LAG: Kaaaaaaaarkat!</span>"
          ],
          [
            "<span style=\"color: #005682\">FAG: I'm sorry!</span>",
            "<span style=\"color: #005682\">LAG: I'm sorry!</span>"
          ],
          [
            "<span style=\"color: #005682\">FAG: 8ut do you have any idea how funny this thing is? I mean this whole thing???????? I can't stop laughing!</span>",
            "<span style=\"color: #005682\">LAG: 8ut do you have any idea how funny this thing is? I mean this whole thing???????? I can't stop laughing!</span>"
          ],
          [
            "<span style=\"color: #005682\">FAG: I'm not going to try, I'm just here to say this whole thing is ridiculous.</span>",
            "<span style=\"color: #005682\">LAG: I'm not going to try, I'm just here to say this whole thing is ridiculous.</span>"
          ],
          [
            "<span style=\"color: #005682\">FAG: We didn't really need you to pretend to 8e a little angry general to get any of this done.</span>",
            "<span style=\"color: #005682\">LAG: We didn't really need you to pretend to 8e a little angry general to get any of this done.</span>"
          ],
          [
            "<span style=\"color: #005682\">FAG: We kicked the queen out of there no sweat! It was easy. In fact, I did most of the work myself, right 8efore I found all the treasure and scaled all the rungs.</span>",
            "<span style=\"color: #005682\">LAG: We kicked the queen out of there no sweat! It was easy. In fact, I did most of the work myself, right 8efore I found all the treasure and scaled all the rungs.</span>"
          ],
          [
            "<span style=\"color: #005682\">FAG: Hey, I'm gone. I just think you should relax.</span>",
            "<span style=\"color: #005682\">LAG: Hey, I'm gone. I just think you should relax.</span>"
          ],
          [
            "<span style=\"color: #005682\">FAG: You were wound up so tight through the whole adventure, and now here in the present you're a8out to explode. It's insuffera8le!</span>",
            "<span style=\"color: #005682\">LAG: You were wound up so tight through the whole adventure, and now here in the present you're a8out to explode. It's insuffera8le!</span>"
          ],
          [
            "<span style=\"color: #005682\">FAG: Hahahahahahahaha.</span>",
            "<span style=\"color: #005682\">LAG: Hahahahahahahaha.</span>"
          ],
          [
            "<span style=\"color: #626262\">CCG</span> banned <span style=\"color: #005682\">FAG</span> from responding to memo.",
            "<span style=\"color: #626262\">CCG</span> banned <span style=\"color: #005682\">LAG</span> from responding to memo."
          ],
          [
            "<span style=\"color: #626262\">CCG: LATER, FAG.</span>",
            "<span style=\"color: #626262\">CCG: LATER, LAG.</span>"
          ],
          [
            "<span style=\"color: #626262\">CCG: MAYBE FAG WILL BE &quot;THE NEW BURN!&quot; EVEN THOUGH IT REALLY MEANS NOTHING IN OUR LANGUAGE.</span>",
            "<span style=\"color: #626262\">CCG: MAYBE LAG WILL BE &quot;THE NEW BURN!&quot; EVEN THOUGH IT REALLY MEANS NOTHING IN OUR LANGUAGE.</span>"
          ]
        ].forEach(t => (archive.mspa.story['004447'].content = archive.mspa.story['004447'].content.replace(t[0], t[1])))}
        archive.mspa.story['004443'].content = archive.mspa.story['004443'].content.replace(
          '<span style="color: #626262">PCG: HOLY FUCKING SHIT, ARE YOU PEOPLE RETARDED.</span>', 
          '<span style="color: #626262">PCG: HOLY FUCKING SHIT, ARE YOU PEOPLE LOSING IT?!</span>')
        archive.mspa.story['004474'].content = archive.mspa.story['004474'].content.replace(
          '<span style="color: #626262">CG: WHAT A SURPRISE, YOU ARE DRAGGING YOUR SCHIZOPHRENIC NOSE INTO THIS, WHAT AN OUTSTANDING CHARACTER WITNESS.</span>', 
          '<span style="color: #626262">CG: WHAT A SURPRISE, YOU ARE DRAGGING YOUR SHITSTAINED NOSE INTO THIS, WHAT AN OUTSTANDING CHARACTER WITNESS.</span>')
        // archive.mspa.story['004529'].content
        {[
          [
            "<span style=\"color: #626262\">PCG2: ARE YOU FUCKING RETARDED.</span>",
            "<span style=\"color: #626262\">PCG2: ARE YOU FUCKING LOSING IT?!</span>"
          ],
          [
            "<span style=\"color: #008282\">CGC: TH4TS TWO WORDS R3T4RD &gt;:P</span> ",
            "<span style=\"color: #008282\">CGC: TH4TS TWO WORDS 1D1OT &gt;:P</span> "
          ]
        ].forEach(t => (archive.mspa.story['004529'].content = archive.mspa.story['004529'].content.replace(t[0], t[1])))}
        archive.mspa.story['004572'].content = archive.mspa.story['004572'].content.replace(
          '<span style="color: #005682">AG: Ok, I will 8e sure 8ookmark it and la8el it &quot;dum8 kid\'s retarded nonsense.&quot;</span>', 
          '<span style="color: #005682">AG: Ok, I will 8e sure 8ookmark it and la8el it &quot;dum8 kid\'s dum8ass nonsense.&quot;</span>')
        archive.mspa.story['004604'].content = archive.mspa.story['004604'].content.replace(
          "This is boring. Where's the challenge in teasing a mentally retarded alien girl? Her stupid walkthrough was probably plagiarized from another more advanced civilization or something.", 
          "This is boring. Where's the challenge in teasing a ridiculous alien girl? Her stupid walkthrough was probably plagiarized from another more advanced civilization or something.")
        archive.mspa.story['004637'].content = archive.mspa.story['004637'].content.replace(
          '<span style="color: #e00707">TG: and if i started ranting too much about the future id start sounding like one of these smug alternian shitheads and im not about to drop that retarded science on my good bro</span>', 
          '<span style="color: #e00707">TG: and if i started ranting too much about the future id start sounding like one of these smug alternian shitheads and im not about to drop that wack-ass science on my good bro</span>')
        // archive.mspa.story['004654'].content
        {[
          [
            "<span style=\"color: #005682\">FUTURE arachnidsGrip [FAG]</span> 3:14 HOURS FROM NOW responded to memo.",
            "<span style=\"color: #005682\">LATER arachnidsGrip [LAG]</span> 3:14 HOURS FROM NOW responded to memo."
          ],
          [
            "<span style=\"color: #005682\">FAG: Yes, you told him 8ro!</span>",
            "<span style=\"color: #005682\">LAG: Yes, you told him 8ro!</span>"
          ],
          [
            "<span style=\"color: #005682\">FAG: I distinctly remem8er you telling him a8out stairs. 8ut he didn't listen.</span>",
            "<span style=\"color: #005682\">LAG: I distinctly remem8er you telling him a8out stairs. 8ut he didn't listen.</span>"
          ],
          [
            "<span style=\"color: #005682\">FAG: He never listens! None of you do, really.</span>",
            "<span style=\"color: #005682\">LAG: He never listens! None of you do, really.</span>"
          ],
          [
            "<span style=\"color: #005682\">FAG: And now all of your extra lives are waaaaaaaasted.</span>",
            "<span style=\"color: #005682\">LAG: And now all of your extra lives are waaaaaaaasted.</span>"
          ],
          [
            "<span style=\"color: #005682\">FAG: What a 8unch of losers! I'm outta here.</span>",
            "<span style=\"color: #005682\">LAG: What a 8unch of losers! I'm outta here.</span>"
          ],
          [
            "<span style=\"color: #005682\">FAG</span> banned herself from responding to memo.",
            "<span style=\"color: #005682\">LAG</span> banned herself from responding to memo."
          ],
          [
            "<span style=\"color: #005682\">FAG</span> unbanned herself from responding to memo.",
            "<span style=\"color: #005682\">LAG</span> unbanned herself from responding to memo."
          ],
          [
            "<span style=\"color: #005682\">FAG: You doofus!!!!!!!!</span>",
            "<span style=\"color: #005682\">LAG: You doofus!!!!!!!!</span>"
          ],
          [
            "<span style=\"color: #008282\">FGC</span> banned <span style=\"color: #005682\">FAG</span> from responding to memo.",
            "<span style=\"color: #008282\">FGC</span> banned <span style=\"color: #005682\">LAG</span> from responding to memo."
          ]
        ].forEach(t => (archive.mspa.story['004654'].content = archive.mspa.story['004654'].content.replace(t[0], t[1])))}
        archive.mspa.story['004672'].content = archive.mspa.story['004672'].content.replace(
          '<span style="color: #e00707">TG: thats a retarded thing to say even by the standard of your own bullshit made up vernacular</span>', 
          '<span style="color: #e00707">TG: thats a silly thing to say even by the standard of your own bullshit made up vernacular</span>')
        // archive.mspa.story['004690'].content
        {[
          [
            "<span style=\"color: #626262\">?CG: THIS IS AN IMPORTANT CONVERSATION WHICH I BELIEVE NEEDS TO TAKE PLACE HERE AND NOW, SO YOU WILL BOTH SHAPE YOUR SHIT UP AND PERHAPS BEGIN TO APPROXIMATE PEOPLE WHO AREN'T EXCRUCIATINGLY RETARDED.</span>",
            "<span style=\"color: #626262\">?CG: THIS IS AN IMPORTANT CONVERSATION WHICH I BELIEVE NEEDS TO TAKE PLACE HERE AND NOW, SO YOU WILL BOTH SHAPE YOUR SHIT UP AND PERHAPS BEGIN TO APPROXIMATE PEOPLE WHO AREN'T EXCRUCIATING SHITS.</span>"
          ],
          [
            "<span style=\"color: #626262\">?CG: THESE PSYCHO GIRLS HAVE ALREADY GOTTEN EACH OF YOU KILLED AT LEAST ONCE TO MY KNOWLEDGE.</span>",
            "<span style=\"color: #626262\">?CG: THESE FUCKED UP GIRLS HAVE ALREADY GOTTEN EACH OF YOU KILLED AT LEAST ONCE TO MY KNOWLEDGE.</span>"
          ]
        ].forEach(t => (archive.mspa.story['004690'].content = archive.mspa.story['004690'].content.replace(t[0], t[1])))}
        archive.mspa.story['004736'].content = archive.mspa.story['004736'].content.replace(
          '<span style="color: #e00707">DAVE: thats kind of retarded</span>', 
          '<span style="color: #e00707">DAVE: thats kind of stupid</span>')
        archive.mspa.story['004751'].content = archive.mspa.story['004751'].content.replace(
          '<span style="color: #626262">CG: I WILL THEN PERFORM A LITTLE SOFT SHOE NUMBER IN THE PUDDLE OF FLUID THAT ACCUMULATES ON THE FLOOR, WHILE MAKING THE BIGGEST SMILE EVER ATTEMPTED BY SOMEONE NOT CLINICALLY RETARDED.</span>', 
          '<span style="color: #626262">CG: I WILL THEN PERFORM A LITTLE SOFT SHOE NUMBER IN THE PUDDLE OF FLUID THAT ACCUMULATES ON THE FLOOR, WHILE MAKING THE BIGGEST SMILE EVER ATTEMPTED BY SOMEONE NOT HIGH OFF THEIR GODDAMN GOURD.</span>')
        archive.mspa.story['004752'].content = archive.mspa.story['004752'].content.replace(
          '<span style="color: #626262">FCG: JADE, I\'M SORRY ABOUT PAST ME\'S RETARDED BEHAVIOR.</span>', 
          '<span style="color: #626262">FCG: JADE, I\'M SORRY ABOUT PAST ME\'S FUCKSHIT BEHAVIOR.</span>')
        // archive.mspa.story['004821'].content
        {[
          [
            "<span style=\"color: #0715cd\">EB: i did see a black guy wrapped up in my ghosty bed sheets.</span>",
            "<span style=\"color: #0715cd\">EB: i did see a weird, short dude wrapped up in my ghosty bed sheets.</span>"
          ],
          [
            "<span style=\"color: #b536da\">TT: A black guy?</span>",
            "<span style=\"color: #b536da\">TT: A weird, short dude?"
          ],
          [
            "<span style=\"color: #0715cd\">EB: oh...</span>",
            "<span style=\"color: #b536da\">TT: John that's a... staggeringly unhelpful description.</span>"
          ],
          [
            "<span style=\"color: #0715cd\">EB: i do not mean like, an african american or anything.</span>",
            "<span style=\"color: #0715cd\">EB: oh...</span>"
          ],
          [
            "<span style=\"color: #0715cd\">EB: like bill cosby.</span>",
            "<span style=\"color: #0715cd\">EB: you know. he was weird. and short.</span>"
          ],
          [
            "<span style=\"color: #b536da\">TT: Thanks for clearing that up.</span>",
            "<span style=\"color: #0715cd\">EB: like a gnome!</span>"
          ],
          [
            "<span style=\"color: #0715cd\">EB: r.i.p. bill. :(</span>",
            "<span style=\"color: #b536da\">TT: Thanks for clearing that up.</span>"
          ],
          [
            "<span style=\"color: #0715cd\">EB: this fellow had a hard black shell, like all the dead guys do.</span>",
            "<span style=\"color: #0715cd\">EB: r.i.p. gnomeo. :(</span>"
          ],
          [
            "<span style=\"color: #0715cd\">EB: i followed him for a bit...</span>",
            "<span style=\"color: #0715cd\">EB: this fellow had a hard black shell, like all the dead guys do.</span>"
          ],
          [
            "<span style=\"color: #0715cd\">EB: and then some sorta ruckus transpired, and i woke up.</span>",
            "<span style=\"color: #0715cd\">EB: i followed him for a bit...</span>"
          ],
          [
            "<span style=\"color: #0715cd\">EB: and now jade won't answer!</span>",
            "<span style=\"color: #0715cd\">EB: and then some sorta ruckus transpired, and i woke up.</span>"
          ],
          [
            "<span style=\"color: #0715cd\">EB: do you know if she's ok?</span>",
            "<span style=\"color: #0715cd\">EB: and now jade won't answer!</span>"
          ],
          [
            "<span style=\"color: #b536da\">TT: She's fine.</span>",
            "<span style=\"color: #0715cd\">EB: do you know if she's ok?</span>"
          ],
          [
            "<span style=\"color: #b536da\">TT: But you're not.</span>",
            "<span style=\"color: #b536da\">TT: She's fine.</span>"
          ],
          [
            "<span style=\"color: #0715cd\">EB: i'm not?</span>",
            "<span style=\"color: #b536da\">TT: But you're not.</span>"
          ],
          [
            "<span style=\"color: #b536da\">TT: Remember how I said your planet was on fire?</span>",
            "<span style=\"color: #0715cd\">EB: i'm not?</span>"
          ],
          [
            "<span style=\"color: #0715cd\">EB: oh yeah...</span>",
            "<span style=\"color: #b536da\">TT: Remember how I said your planet was on fire?</span>"
          ],
          [
            "<span style=\"color: #0715cd\">EB: that didn't by any chance stop being a thing that was true, did it?</span>",
            "<span style=\"color: #0715cd\">EB: oh yeah...</span>"
          ],
          [
            "<span style=\"color: #b536da\">TT: It did not.</span>",
            "<span style=\"color: #0715cd\">EB: that didn't by any chance stop being a thing that was true, did it?</span>"
          ],
          [
            "<span style=\"color: #b536da\">TT: Do you see that pinkish hue behind you, bleeding over the horizon?</span>",
            "<span style=\"color: #b536da\">TT: It did not.</span>"
          ],
          [
            "<span style=\"color: #0715cd\">EB: fuck!!!</span>",
            "<span style=\"color: #b536da\">TT: Do you see that pinkish hue behind you, bleeding over the horizon?</span>"
          ],
          [
            "<span style=\"color: #0715cd\">EB: rose, this is all oil! it'll all just explode any second, won't it???</span>",
            "<span style=\"color: #0715cd\">EB: fuck!!!</span>"
          ],
          [
            "<span style=\"color: #b536da\">TT: I don't think the fire's rate of propagation is quite as fast as you're imagining.</span>",
            "<span style=\"color: #0715cd\">EB: rose, this is all oil! it'll all just explode any second, won't it???</span>"
          ],
          [
            "<span style=\"color: #b536da\">TT: But the danger is still significant.</span>",
            "<span style=\"color: #b536da\">TT: I don't think the fire's rate of propagation is quite as fast as you're imagining.</span>"
          ],
          [
            "<span style=\"color: #b536da\">TT: Especially considering that your bed is sinking.</span>",
            "<span style=\"color: #b536da\">TT: But the danger is still significant.</span>"
          ],
          [
            "<span style=\"color: #0715cd\">EB: fuuuuuuuuuuuck!!!!!!!</span>",
            "<span style=\"color: #b536da\">TT: Especially considering that your bed is sinking.</span>"
          ],
          [
            "<span style=\"color: #b536da\">TT: Relax.</span>",
            "<span style=\"color: #0715cd\">EB: fuuuuuuuuuuuck!!!!!!!</span>"
          ],
          [
            "<span style=\"color: #b536da\">TT: Look to your right.</span>",
            "<span style=\"color: #b536da\">TT: Relax.</span>"
          ]
        ].forEach(t => (archive.mspa.story['004821'].content = archive.mspa.story['004821'].content.replace(t[0], t[1])))}
        archive.mspa.story['004829'].content = archive.mspa.story['004829'].content.replace(
          '<span style="color: #626262">CG: THE IDIOT YOU CALL THE JADE HUMAN WENT AHEAD AND PROTOTYPED HER FREAK OF A LUSUS, WHILE YOU DECIDED TO TAKE A NAP FOR SOME REASON RATHER THAN DOING WHAT A LEADER IS SUPPOSED TO DO AND STOP HER FROM BEING SO FUCKING RETARDED.</span>', 
          '<span style="color: #626262">CG: THE IDIOT YOU CALL THE JADE HUMAN WENT AHEAD AND PROTOTYPED HER FREAK OF A LUSUS, WHILE YOU DECIDED TO TAKE A NAP FOR SOME REASON RATHER THAN DOING WHAT A LEADER IS SUPPOSED TO DO AND STOP HER FROM BEING SO FUCKING STUPID.</span>')
        archive.mspa.story['004891'].content = archive.mspa.story['004891'].content.replace(
          '<span style="color: #77003c">CC: S)(-E-ES)(, )(ow freaking retarded do you )(ave to be not to know somet)(ing like t)(at?</span> ', 
          '<span style="color: #77003c">CC: S)(-E-ES)(, )(ow freaking stupid do you )(ave to be not to know somet)(ing like t)(at?</span> ')
        archive.mspa.story['004925'].content = archive.mspa.story['004925'].content.replace(
          '<span style="color: #e00707">TG: so even though im awesome now at one point i was plausibly likened to an autistic stuffed animal</span>', 
          '<span style="color: #e00707">TG: so even though im awesome now at one point i was plausibly likened to a fluff brained stuffed animal</span>')
        archive.mspa.story['004944'].content = archive.mspa.story['004944'].content.replace(
          '<span style="color: #b536da">TT: What about the psychopath who\'s currently helping you?</span>', 
          '<span style="color: #b536da">TT: What about the terminally misguided miscreant who\'s currently helping you?</span>')
        // archive.mspa.story['004955'].content
        {[
          [
            "<span style=\"color: #a15000\">AT: lIKE, tHE KIND BASICALLY FOR CRIPPLES TO SIT IN, aND ROLL AROUND,</span>",
            "<span style=\"color: #a15000\">AT: lIKE, tHE KIND BASICALLY TO SIT IN, aND ROLL AROUND,</span>"
          ],
          [
            "<span style=\"color: #a15000\">AT: i WAS SITTING IN IT, bEING CRIPPLED LIKE USUAL,</span>",
            "<span style=\"color: #a15000\">AT: i WAS SITTING IN IT, bEING USELESS LIKE USUAL,</span>"
          ]
        ].forEach(t => (archive.mspa.story['004955'].content = archive.mspa.story['004955'].content.replace(t[0], t[1])))}
        archive.mspa.story['005152'].content = archive.mspa.story['005152'].content.replace(
          '<span style="color: #626262">CG: HE, BEING ME, RIGHT NOW, IS OWNING UP TO WHAT A FUCKING RETARD PAST ME WAS, AND CONTINUES TO BE.</span>', 
          '<span style="color: #626262">CG: HE, BEING ME, RIGHT NOW, IS OWNING UP TO WHAT A FUCKING ASSHOLE PAST ME WAS, AND CONTINUES TO BE.</span>')
        archive.mspa.story['005261'].content = archive.mspa.story['005261'].content.replace(
          '<span style="color: #626262">CCG: BECAUSE YOU ARE A STONE COLD RETARDED FUCKING IDIOT.</span>', 
          '<span style="color: #626262">CCG: BECAUSE YOU ARE A STONE COLD FUCKING IDIOT.</span>')
        archive.mspa.story['005389'].content = archive.mspa.story['005389'].content.replace(
          '<span style="color: #e00707">TG: aside from getting my ass killed in the most retarded way possible</span>', 
          '<span style="color: #e00707">TG: aside from getting my ass killed in the most ridiculous way possible</span>')
        archive.mspa.story['005459'].content = archive.mspa.story['005459'].content.replace(
          "You attempt to humor the Sovereign Slayer's demands diplomatically. There's a narrow line to walk between obeying the orders of a clear superior and blindly facilitating a  perfectly useless genocide. It takes a very savvy breed of psychopath to pull it off.", 
          "You attempt to humor the Sovereign Slayer's demands diplomatically. There's a narrow line to walk between obeying the orders of a clear superior and blindly facilitating a  perfectly useless genocide. It takes a very savvy breed of morally bankrupt monster to pull it off.")
        archive.mspa.story['005598'].content = archive.mspa.story['005598'].content.replace(
          '<span style="color: #e00707">TG: pretty much nothing but horsing around through time and swindling retarded alligators out of their life savings</span>', 
          '<span style="color: #e00707">TG: pretty much nothing but horsing around through time and swindling octogenarian alligators out of their life savings</span>')
        archive.mspa.story['005609'].content = archive.mspa.story['005609'].content.replace(
          '<span style="color: #e00707">TG: can you show me a little respect and assume any time i say something stupid it just means im temporarily being inexplicably retarded</span>', 
          '<span style="color: #e00707">TG: can you show me a little respect and assume any time i say something stupid it just means ive been temporarily replaced with a pod person</span>')
        // archive.mspa.story['005767'].content
        {[
          [
            "<span style=\"color: #626262\">CG: EVERY DOUCHE GOT TO FLY BUT ME, EVEN THE CRIPPLE.</span>",
            "<span style=\"color: #626262\">CG: EVERY DOUCHE GOT TO FLY BUT ME, EVEN THE USELESS LEGLESS FUCK.</span>"
          ],
          [
            "<span style=\"color: #626262\">CG: GAMZEE WAS MY VERY GOOD FRIEND, WHO WAS THIS GOOFY LOVEABLE BULLSHIT CLOWN UNTIL HE WENT PSYCHO AND KILLED SOME PEOPLE. I LIKED HIM A LOT.</span>",
            "<span style=\"color: #626262\">CG: GAMZEE WAS MY VERY GOOD FRIEND, WHO WAS THIS GOOFY LOVEABLE BULLSHIT CLOWN UNTIL HE WENT ON A FUCKING RAMPAGE AND KILLED SOME PEOPLE. I LIKED HIM A LOT.</span>"
          ]
        ].forEach(t => (archive.mspa.story['005767'].content = archive.mspa.story['005767'].content.replace(t[0], t[1])))}
        archive.mspa.story['005769'].content = archive.mspa.story['005769'].content.replace(
          '<span style="color: #626262">CG: OK, KANAYA IS MY OTHER BEST FRIEND, AND SHE WAS THE HERO OF SPACE LIKE JADE WHICH MEANS SHE\'S THE STOKER OF THE FORGE AND IS BASICALLY IN CHARGE OF FROGS, WHICH SOUNDS RETARDED, I KNOW. YOU BREED THE RIGHT FROG TO MAKE THE UNIVERSE YOU WANT TO MAKE, WHICH IS A LONG ARDUOUS PROCESS AND I KIND OF FUCKED IT UP IN MY GAME, BUT THAT\'S A WHOLE OTHER STORY WHICH I\'LL GET TO LATER, OK?</span>', 
          '<span style="color: #626262">CG: OK, KANAYA IS MY OTHER BEST FRIEND, AND SHE WAS THE HERO OF SPACE LIKE JADE WHICH MEANS SHE\'S THE STOKER OF THE FORGE AND IS BASICALLY IN CHARGE OF FROGS, WHICH SOUNDS FAKE AS FUCK, I KNOW. YOU BREED THE RIGHT FROG TO MAKE THE UNIVERSE YOU WANT TO MAKE, WHICH IS A LONG ARDUOUS PROCESS AND I KIND OF FUCKED IT UP IN MY GAME, BUT THAT\'S A WHOLE OTHER STORY WHICH I\'LL GET TO LATER, OK?</span>')
        archive.mspa.story['005779'].content = archive.mspa.story['005779'].content.replace(
          '<span style="color: #e00707">TG: im sorry in advance for exposing you to my unconscious minds retarded cliches</span>', 
          '<span style="color: #e00707">TG: im sorry in advance for exposing you to my unconscious minds fucked up cliches</span>')
        archive.mspa.story['005873'].content = archive.mspa.story['005873'].content.replace(
          '<span style="color: #626262">CG: SPOILER: THE ANSWER WOULD BE NO, BECAUSE THE PASSWORDS ARE RETARDED.</span>', 
          '<span style="color: #626262">CG: SPOILER: THE ANSWER WOULD BE NO, BECAUSE THE PASSWORDS ARE STUPID.</span>')
        archive.mspa.story['005876'].content = archive.mspa.story['005876'].content.replace(
          '<span style="color: #626262">PCG: I MEAN MY NORMAL JACK. NOT PSYCHOPATH OMNIPOJACK.</span>', 
          '<span style="color: #626262">PCG: I MEAN MY NORMAL JACK. NOT BASTARD-ASS OMNIPOJACK.</span>')
        // archive.mspa.story['005931'].content
        {[
          [
            "<span style=\"color: #e00707\">TG: my bros idiotic ventriloquist dummy is responsible for this schizophrenic bullshit</span>",
            "<span style=\"color: #e00707\">TG: my bros idiotic ventriloquist dummy is responsible for this asinine bullshit</span>"
          ],
          [
            "<span style=\"color: #e00707\">TG: you are either literally an insane psychopathic murderer or some kind of trolling savant</span>",
            "<span style=\"color: #e00707\">TG: you are either literally a soulless murderer or some kind of trolling savant</span>"
          ]
        ].forEach(t => (archive.mspa.story['005931'].content = archive.mspa.story['005931'].content.replace(t[0], t[1])))}
        archive.mspa.story['005970'].content = archive.mspa.story['005970'].content.replace(
          "The Handmaid will enlist the Condesce, extending the same bargain once offered to her. It will be the sort involving neither negotiation nor possibility of refusal, expressed in terms plainly understood by the psychotic genocidal. The Condesce will serve as her new master's witch, carrying out his work in the places he cannot reach.", 
          "The Handmaid will enlist the Condesce, extending the same bargain once offered to her. It will be the sort involving neither negotiation nor possibility of refusal, expressed in terms plainly understood by the soulless genocidal. The Condesce will serve as her new master's witch, carrying out his work in the places he cannot reach.")
        archive.mspa.story['006224'].content = archive.mspa.story['006224'].content.replace(
          '<a href="/decode/morse" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/HELPHIM.gif" border="0" /></a>', 
          '<a href="https://www.google.com/#hl=en&amp;q=morse+code+translator" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/HELPHIM.gif" border="0" /></a>')
        archive.mspa.story['006751'].content = archive.mspa.story['006751'].content.replace(
          '<span style="color: #f2a400">TT: As humanity was dwindling due to an increasingly whimsical and psychopathic Condesce, she began introducing more of these Carapacians on to the scene.</span>', 
          '<span style="color: #f2a400">TT: As humanity was dwindling due to an increasingly whimsical and unstable Condesce, she began introducing more of these Carapacians on to the scene.</span>')
        archive.mspa.story['006861'].content = archive.mspa.story['006861'].content.replace(
          '<span style="color: #e00707">TT: I believe she probably would genuinely like to kill us. She is a psycho after all.</span>', 
          '<span style="color: #e00707">TT: I believe she probably would genuinely like to kill us. She is a cold-blooded murderer after all.</span>')
        archive.mspa.story['006885'].content = archive.mspa.story['006885'].content.replace(
          '<span style="color: #77003c">MEENAH: this sure became a retarded line of talkin</span>', 
          '<span style="color: #77003c">MEENAH: this sure became a shitty line of talkin</span>')
        archive.mspa.story['007314'].content = archive.mspa.story['007314'].content.replace(
          '<span style="color: #b536da">ROSE: Would Dave actually be aright wich Terezi dating a psychotic clown on th side, even if its is a releationship centered around only enmity? I kinof doubt it.</span>', 
          '<span style="color: #b536da">ROSE: Would Dave actually be aright wich Terezi dating a bashtard clown on th side, even if its is a releationship centered around only enmity? I kinof doubt it.</span>')
        archive.mspa.story['007380'].content = archive.mspa.story['007380'].content.replace(
          '<span style="color: #323232">I DON\'T USE CAPS LOCK. I THOUGHT IT WAS SUPPOSED TO BE LIKE A TRAINING KEY FOR RETARDS.</span>', 
          '<span style="color: #323232">I DON\'T USE CAPS LOCK. I THOUGHT IT WAS SUPPOSED TO BE LIKE A TRAINING KEY FOR BABIES.</span>')
        archive.mspa.story['007463'].content = archive.mspa.story['007463'].content.replace(
          "Your guess is the orders came down from her boss, who from what you've gathered, is even more of a headcase than your presently incarcerated superior. When she starts kicking up a fuss, yelling at people, forking any poor slob unfortunate enough to make a misstep while grooming her hair, you know too well that's the frustration of an exasperated first officer. Would almost make you feel sympathy for the witch, if you, like she, weren't clinically psychopathic. ", 
          "Your guess is the orders came down from her boss, who from what you've gathered, is even more of a headcase than your presently incarcerated superior. When she starts kicking up a fuss, yelling at people, forking any poor slob unfortunate enough to make a misstep while grooming her hair, you know too well that's the frustration of an exasperated first officer. Would almost make you feel sympathy for the witch, if you, like she, weren't a soulless husk. ")
        archive.mspa.story['007970'].content = archive.mspa.story['007970'].content.replace(
          '<span style="color: #77003c">MEENAH: i mean w/o bein a psycho batshit skank</span>', 
          '<span style="color: #77003c">MEENAH: i mean w/o bein a jackbass batshit skank</span>')
        archive.mspa.story['008298'].content = archive.mspa.story['008298'].content.replace(
          '<span style="color: #626262">KARKAT: (could you maybe not give the psycho fork girl any more ideas???)</span>', 
          '<span style="color: #626262">KARKAT: (could you maybe not give the fucking fork girl any more ideas???)</span>')
        archive.mspa.story['009404'].content = archive.mspa.story['009404'].content.replace(
          '<span style="color: #ff6ff2">ROXY: maybe since he and i are ur parents, in terms of psycho skillz...</span>', 
          '<span style="color: #ff6ff2">ROXY: maybe since he and i are ur parents, in terms of mad skillz...</span>')
        // archive.mspa.faqs.new.content
        {[
          [
            "<table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" width=\"650\" align=\"center\">\n\n\t    <tr>\n\n\t    <td width=\"100%\">\n\t        <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" width=\"600\" align=\"center\">\n\t          <tr>\n\t            <td>\n\t  \t\t<img border=\"0\" src=\"/images/v2_blankstrip.gif\" />\n\t            </td>\n\t          <td>\n\t            <center>\n\t\t      \t<p style=\"font-weight: bold; font-family: courier, monospace; color:#000000\"><font size=\"6\">HEY!",
            "<table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" width=\"650\" align=\"center\">\n\n\t    <tr>\n\n\t    <td bgcolor=\"#EEEEEE\" width=\"100%\">\n\t        <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" width=\"600\" align=\"center\">\n\t          <tr>\n\t            <td>\n\t  \t\t<img border=\"0\" src=\"/images/v2_blankstrip.gif\" />\n\t            </td>\n\t          <td>\n\t            <center>\n\t\t      \t<p style=\"font-weight: bold; font-family: courier, monospace; color:#000000\"><font size=\"6\">HEY!"
          ],
          [
            "</font></p>\n\t            </center>\n\t          </td>\n\t            <td>\n\t  \t\t<img border=\"0\" src=\"/images/v2_blankstrip.gif\" />\n\t            </td>\n\t          </tr>\n\t        </table>\n\t    </td>\n\n\n\t    </tr>\n\n\t    <tr>\n\t    <td>\n\t\t<center><table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" width=\"80%\"><tr><td><center>\n\nWelcome to MSPA!\n\n",
            "</font></p>\n\t            </center>\n\t          </td>\n\t            <td>\n\t  \t\t<img border=\"0\" src=\"/images/v2_blankstrip.gif\" />\n\t            </td>\n\t          </tr>\n\t        </table>\n\t    </td>\n\n\n\t    </tr>\n\n\t    <tr>\n\t    <td bgcolor=\"#EEEEEE\">\n\t\t<center><table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" width=\"80%\"><tr><td><center>\n\nWelcome to MSPA!\n\n"
          ]
        ].forEach(t => (archive.mspa.faqs.new.content = archive.mspa.faqs.new.content.replace(t[0], t[1])))}
        archive.mspa['scratchBanner'] = ['BOOYEAH', '... the FUCK?', "Oh hell no. He's talking about ancestors, isn't he.", "He's keeping little girls locked up in weird rooms, and rambling about troll ancestors. I just know it.", 'NOT IN MY FUCKING COMIC.', 'Oh, damn. This place is bigger than I thought. Any idea which way he went? Come on guys, help me out.', "I bet he's behind this door. YOU HEAR ME SCRATCH, THE JIG IS UP.", 'Ah-ha! Caught red handed, you bastard. You stop clogging up my story with your troll fanfiction this instaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH', 'That was not the right door.', 'This looks like the right place. The hallway is all round and shit. Just like his big stupid head.', "MY BEAUTIFUL PANELS WHAT HAS HE DONE. That son of a bitch. It's is going to take so many sweeps to clean this mess up. So very, very many sweeps.", "God dammit, he's got a bowl full of these things?? He's pulling his snooty horseshit candy bowl stunts to mock my little arrows now. Excellent host my ass.", 'RAAARARRAAUUUAAAAUUAGHGHGGHGGGGHHGH! *flip*', 'Oh my god how can these possibly be so delicious???', 'Whoa, better go easy on these. Might need some later.', "There you are. Go ahead, keep talking cueball. I've got you in the crosshairs of my broombristles. I have GOT you you pompous motherfucker.", "Tick. Tock. Tick. Tock. Tick. Tock. My heartbeat falls in rhythm with the clock as I draw close to my prey. I leave nothing to chance, for you see it is the most dangerous prey of all, a four foot tall asshole in suspenders who won't shut up. Wait for it, Hussie. Wait for it...", 'RAAARARRAAUUUAAAAUUAGHGHGGHGGGGHHGH! *trip*', 'bap bap bap bap bap bap bap bap bap bap bap bap bap bap bap bap bap bap bap bap bap bap bap', 'Everybody is totally fed up with your condescending, self indulgent narrative style. They all want to go back to my slightly less condescending, slightly more self indulgent style.']

        // Todo: This is no longer how banners are stored.


        archive.social.blogspot[12].html = archive.social.blogspot[12].html.replace(
          "                 11 my teachers thought I was retarded. This isn't some sort of joke to", 
          "                 11 my teachers thought I was [EMOTIONAL SUPPORT SLUR]ed. This isn't some sort of joke to")
        archive.social.blogspot[16].html = archive.social.blogspot[16].html.replace(
          '                 genuinely like this retarded painting (which I do!). Notice how I', 
          '                 genuinely like this [EMOTIONAL SUPPORT SLUR]ed painting (which I do!). Notice how I')
        // archive.social.dstrider[5].html
        {[
          [
            "            maybe what i mean is i wish i was the one who made that website. why is it the best kind of irony is always the unintended kind. dammit this candy slinging jackass doesnt even realize what a fucking genius he is. because hes too fucking stupid. stupid enough to think that a bunch of street savvy, mishapen headed, weirdly mongoloid looking motherfuckers is a one way ticket to selling a goddamn tsunami of candy",
            "            maybe what i mean is i wish i was the one who made that website. why is it the best kind of irony is always the unintended kind. dammit this candy slinging jackass doesnt even realize what a fucking genius he is. because hes too fucking stupid. stupid enough to think that a bunch of street savvy, weird-face, head-ass looking motherfuckers is a one way ticket to selling a goddamn tsunami of candy"
          ],
          [
            "            ok i cant even say for sure if \"cool\" is even what they were going for here. reminds me of like in movies when they try to dress a drunk guy up to stand in as someone respectable to pull off a ruse, or maybe a dead guy like weekend at bernies. or a retarded guy who happens to be good at something but cant be no damn retarded guy or he'll b disqualified from the competition or whatever.",
            "            ok i cant even say for sure if \"cool\" is even what they were going for here. reminds me of like in movies when they try to dress a drunk guy up to stand in as someone respectable to pull off a ruse, or maybe a dead guy like weekend at bernies. or like a dude who pretends to be a rich person butler to steal shit and if they find out they'll fuckin cut his dick off. i dunno. shit."
          ],
          [
            "            also hes not too keen on homework and i cant say i blame him, oh also he doesnt like not having money, and i mean damn son who DONT like being no broke ass nigga???? whoever wrote this shit needs to step on a rake in a comedic fashion",
            "            also hes not too keen on homework and i cant say i blame him, oh also he doesnt like not having money, and i mean damn son who DONT like being no broke ass mothafucker???? whoever wrote this shit needs to step on a rake in a comedic fashion"
          ]
        ].forEach(t => (archive.social.dstrider[5].html = archive.social.dstrider[5].html.replace(t[0], t[1])))}
        archive.social.dstrider[6].html = archive.social.dstrider[6].html.replace(
          'skateboards havent been asserted as legitimately cool since probably michael j fox outmaneuvered biff in the fifties and fed him a world of cowshit i think to prevent himself from fucking his own mom. that and bart simpson. but bart simpson was never cool, no one ever actually thought he was cool even in the thick of their early ninties delirium. he never actually said anything clever and now that i think about it he was vaguely effeminate, which would be fine i guess but it betrayed his wafer thin eat my shorts attitude. maybe 20 years of having your lines delivered by a woman will make that happen. seriously even the idiots in the 90s werent really sure what eat my shorts meant. its like they were aware it was a retarded thing to say on some level albeit dimly, and let some shitty characterization slide cause it was a funny show. dear matt groening being a "cool kid" means more than hating school and dishing out mediocre sass over the span of 7 presidential terms. i dont know this character is so old already maybe i should start ripping jughead a new asshole or maybe lil abner while im at it. what the fuck am i even doing', 
          'skateboards havent been asserted as legitimately cool since probably michael j fox outmaneuvered biff in the fifties and fed him a world of cowshit i think to prevent himself from fucking his own mom. that and bart simpson. but bart simpson was never cool, no one ever actually thought he was cool even in the thick of their early ninties delirium. he never actually said anything clever and now that i think about it he was vaguely effeminate, which would be fine i guess but it betrayed his wafer thin eat my shorts attitude. maybe 20 years of having your lines delivered by a woman will make that happen. seriously even the idiots in the 90s werent really sure what eat my shorts meant. its like they were aware it was a fucking dumbass thing to say on some level albeit dimly, and let some shitty characterization slide cause it was a funny show. dear matt groening being a "cool kid" means more than hating school and dishing out mediocre sass over the span of 7 presidential terms. i dont know this character is so old already maybe i should start ripping jughead a new asshole or maybe lil abner while im at it. what the fuck am i even doing')
        archive.social.formspring.andrewhussie[24].html = archive.social.formspring.andrewhussie[24].html.replace(
          "i would use my powers to call one of my homies and say yo dogg you gotta drive me to the hospital because i just did something fuckin RETARDED with a pogo stick. ha ha no dude i'll tell you when you get here just hurry man i'm hurt pretty bad", 
          "i would use my powers to call one of my homies and say yo dogg you gotta drive me to the hospital because i just did something fuckin [EMOTIONAL SUPPORT SLUR]ED with a pogo stick. ha ha no dude i'll tell you when you get here just hurry man i'm hurt pretty bad")
        archive.social.formspring.andrewhussie[36].html = archive.social.formspring.andrewhussie[36].html.replace(
          "clearly a lot of these questions are ass backward window licking retarded but no need to be rude andrew. how do you plan to reconcile all these people you've offended?", 
          "clearly a lot of these questions are ass backward window licking [EMOTIONAL SUPPORT SLUR]ed but no need to be rude andrew. how do you plan to reconcile all these people you've offended?")
        // archive.social.formspring.andrewhussie[237].html
        {[
          [
            "\u201cA blur of black in a dim room. As the emperor ponders his koans, he cracks an eyelid. But it\u2019s too late. Who else could make off with ancient scrolls and the lion\u2019s share of a kind emperor\u2019s spine before the shutter has yet swung closed from entry? If your answer was \u2018not a ninja\u2019, you\u2019re fucking retarded.\u201d",
            "\u201cA blur of black in a dim room. As the emperor ponders his koans, he cracks an eyelid. But it\u2019s too late. Who else could make off with ancient scrolls and the lion\u2019s share of a kind emperor\u2019s spine before the shutter has yet swung closed from entry? If your answer was \u2018not a ninja\u2019, you\u2019re fucking [EMOTIONAL SUPPORT SLUR]ed.\u201d"
          ],
          [
            "Call Things \u201cRetarded\u201d.",
            "Call Things \u201c[EMOTIONAL SUPPORT SLUR]ed\u201d."
          ],
          [
            "If you don\u2019t see why this word by itself is milk nostril-evacuatingly side-splitting, you\u2019re fucking retarded.",
            "If you don\u2019t see why this word by itself is milk nostril-evacuatingly side-splitting, you\u2019re fucking [EMOTIONAL SUPPORT SLUR]ed."
          ],
          [
            "Actor B: \u201cYou must be retarded. You\u2019re so retarded, your grandmother was raped by fucking pirates.\u201d",
            "Actor B: \u201cYou must be [EMOTIONAL SUPPORT SLUR]ed. You\u2019re so [EMOTIONAL SUPPORT SLUR]ed, your grandmother was raped by fucking pirates.\u201d"
          ],
          [
            "Actor A: \u201cDon\u2019t say shit about my grandmother. She WAS a pirate. Trained by secret ninjas to do some totally un-gay moves on retarded gay people like you.\u201d",
            "Actor A: \u201cDon\u2019t say shit about my grandmother. She WAS a pirate. Trained by secret ninjas to do some totally un-gay moves on [EMOTIONAL SUPPORT SLUR]ed gay people like you.\u201d"
          ]
        ].forEach(t => (archive.social.formspring.andrewhussie[237].html = archive.social.formspring.andrewhussie[237].html.replace(t[0], t[1])))}
        archive.social.formspring.andrewhussie[547].html = archive.social.formspring.andrewhussie[547].html.replace(
          "Many critics are very naive in this sense, and these people I would not even regard as real critics at all. More like just complainers. They leverage their dissatisfaction under the guise of criticism, and if their grievances are dismissed, the creator is accused of being deaf to criticism. A little like suitors spurned by a woman will accuse her of being icy. Creators have a responsibility to vet their critics, to know how deep the critic's appreciation and understanding of the material is first before putting value on their advice. To understand whether the critic is capable of quality thought and observation. To apply a critical process to the critic itself. Some critics believe they themselves are immune to criticism! Not all opinions and perspectives are equal, and it's dangerous and incredibly stupid for creators to treat them as such. Would you take advice on how to improve your life from a retarded person? You see, we actually do this every day. We vet those who would counsel us on our daily lives, who we would trust to guide us in the right direction.", 
          "Many critics are very naive in this sense, and these people I would not even regard as real critics at all. More like just complainers. They leverage their dissatisfaction under the guise of criticism, and if their grievances are dismissed, the creator is accused of being deaf to criticism. A little like suitors spurned by a woman will accuse her of being icy. Creators have a responsibility to vet their critics, to know how deep the critic's appreciation and understanding of the material is first before putting value on their advice. To understand whether the critic is capable of quality thought and observation. To apply a critical process to the critic itself. Some critics believe they themselves are immune to criticism! Not all opinions and perspectives are equal, and it's dangerous and incredibly stupid for creators to treat them as such. Would you take advice on how to improve your life from a [EMOTIONAL SUPPORT SLUR]ed person? You see, we actually do this every day. We vet those who would counsel us on our daily lives, who we would trust to guide us in the right direction.")
        archive.social.formspring.andrewhussie[879].html = archive.social.formspring.andrewhussie[879].html.replace(
          "My school is going to do this retarded mural thing, made by students. You're skinny enough to pass for a teenager, so you wanna give us a hand? I don't have the cash, but I could probably gank five thousand one dollar McDonald's coupons.", 
          "My school is going to do this [EMOTIONAL SUPPORT SLUR]ed mural thing, made by students. You're skinny enough to pass for a teenager, so you wanna give us a hand? I don't have the cash, but I could probably gank five thousand one dollar McDonald's coupons.")
        archive.social.formspring.andrewhussie[984].html = archive.social.formspring.andrewhussie[984].html.replace(
          'And now having said that, I will put my ear to the ground and listen for the pounding hooves of the retarded cavalry.', 
          'And now having said that, I will put my ear to the ground and listen for the pounding hooves of the [EMOTIONAL SUPPORT SLUR]ed cavalry.')
        archive.social.formspring.mspadventures[64].html = archive.social.formspring.mspadventures[64].html.replace(
          'Your DB references, they sting. But if I tried again in a less retarded', 
          'Your DB references, they sting. But if I tried again in a less [EMOTIONAL SUPPORT SLUR]ed')
        archive.social.formspring.mspadventures[165].html = archive.social.formspring.mspadventures[165].html.replace(
          "She'll probably think I'm retarded though, sort of like how I feel about", 
          "She'll probably think I'm [EMOTIONAL SUPPORT SLUR]ed though, sort of like how I feel about")
        archive.social.tumblr[23].html = archive.social.tumblr[23].html.replace(
          '                     was like, this sounds retarded. And I was like, awesome, Jeffrey’s on board. John Keogh was musing', 
          '                     was like, this sounds [EMOTIONAL SUPPORT SLUR]ed. And I was like, awesome, Jeffrey’s on board. John Keogh was musing')
        archive.social.tumblr[60].html = archive.social.tumblr[60].html.replace(
          '<em>Who is the most retarded character of homestuck?</em>', 
          '<em>Who is the most [EMOTIONAL SUPPORT SLUR]ed character of homestuck?</em>')

        // TODO: News structure has also changed. But there aren't any slurs there, apparently.? So maybe that's done already



    },

}