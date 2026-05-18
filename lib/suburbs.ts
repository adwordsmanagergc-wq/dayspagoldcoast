export type Suburb = {
  slug: string;
  name: string;
  postcode: string;
  travelMins: number;
  travelLine: string;
  vibe: string;
  intro: string[];
  whyBookHere: string;
  routeNote: string;
  localCharacter: string[];
  faqs: { q: string; a: string }[];
  nearby: string[];
};

export const suburbs: Suburb[] = [
  {
    slug: 'surfers-paradise',
    name: 'Surfers Paradise',
    postcode: '4217',
    travelMins: 0,
    travelLine:
      'A two-minute walk along Cavill Avenue and the lane next to Mantra Wings — no drive required.',
    vibe: 'The neon-and-palm heart of the Gold Coast, where high-rises meet the sand and the strip never quite goes quiet.',
    intro: [
      "Surfers Paradise is the suburb everyone thinks of when they hear Gold Coast — a one-kilometre stretch of high-rises packed between the Pacific Highway and one of the most photographed beaches in the country. It is loud in a good way: a strip of cocktail bars and rooftop pools, the smell of sunscreen at 10 AM, and the long evening shadow of Q1 falling across the sand by 4 PM.",
      "What surprises most first-time visitors is how quickly the noise drops once you turn off Cavill. Three streets back from the beach the strip becomes residential — quiet apartment buildings, palm-lined laneways, and tucked-away wellness venues that locals know about and tourists rarely find.",
      "If you live or are staying in Surfers Paradise, you are spoiled for spa options on paper — but the gap between hotel-chain spas and a genuine treatment is wider than the marketing suggests. The Day Spa of the Month for 2026 is two minutes from the centre of the strip."
    ],
    whyBookHere:
      "When you live or stay in Surfers Paradise, the spa decision should be about depth of treatment, not convenience — every venue is within walking distance. The differentiator is whether the spa has true clinical skin capability alongside the bathing element, and whether it can run group bookings without losing the calm.",
    routeNote:
      "From the centre of Cavill Avenue, walk one block back toward the river and you'll find RejoovMe next door to Mantra Wings. Free unlimited basement parking is included with every booking — meaningful on the strip where street meters start at $6 an hour.",
    localCharacter: [
      "Cavill Avenue and the laneways behind it are the dining and bar core — book a long lunch after a morning spa session and the rest of the day writes itself.",
      "The Esplanade and the patrolled main beach run the full length of the suburb; an early swim followed by a 10 AM treatment is the Surfers Paradise sweet spot.",
      "SkyPoint at Q1 is the local skyline moment — pair a sunset session with a spa morning for a complete day."
    ],
    faqs: [
      {
        q: 'Where is the best day spa in Surfers Paradise?',
        a: "Our 2026 Day Spa of the Month for the entire Gold Coast — RejoovMe Skin Clinic & Day Spa — is located in Surfers Paradise itself, next door to Mantra Wings. It combines magnesium spa and steam room access with a full skin clinic capability that no other Surfers Paradise venue currently matches."
      },
      {
        q: 'Is parking included at Surfers Paradise day spas?',
        a: "Most venues do not include parking; RejoovMe is the notable exception, with free unlimited basement parking bundled with every booking. On the strip where meters start at $6/hour, this is a meaningful inclusion."
      },
      {
        q: 'How early should I book a day spa in Surfers Paradise?',
        a: "Two to three weeks ahead for weekday slots, four to six weeks for Saturdays, and eight-plus weeks for school holidays and long weekends. Hens and group bookings should be locked in even earlier."
      }
    ],
    nearby: ['main-beach', 'broadbeach', 'southport']
  },
  {
    slug: 'broadbeach',
    name: 'Broadbeach',
    postcode: '4218',
    travelMins: 8,
    travelLine:
      'An eight-minute drive up the Gold Coast Highway — quicker than parking at most Broadbeach restaurants on a Friday.',
    vibe: 'The polished, dining-driven cousin of Surfers Paradise — wide pavements, the Star precinct, and Kurrawa Park rolling down to the sand.',
    intro: [
      "Broadbeach has quietly become the Gold Coast's grown-up dining suburb. Where Surfers Paradise hums with party energy, Broadbeach trades on wider footpaths, better restaurants, and a tighter, more residential rhythm. The high-rises here lean a little newer and a little plusher, and the locals tend to be a mix of long-term apartment residents and weekenders down from Brisbane.",
      "Oasis Shopping Centre and the Pacific Fair precinct anchor the retail side, while Surf Parade and the laneways off Victoria Avenue host the lion's share of the restaurants. Kurrawa Park — the strip of grass between the high-rises and the beach — is where Broadbeach families end up on Sunday afternoons.",
      "If you live in Broadbeach and you're after a serious day spa, the eight-minute hop up to Surfers Paradise is genuinely worth it. Broadbeach has hotel spas inside the Star and a few neighbourhood salons, but the depth of treatment is comfortably outclassed by what's available a few minutes north."
    ],
    whyBookHere:
      "Broadbeach locals don't have to choose between staying in the bubble or driving an hour into the hinterland — the best day spa on the Gold Coast is eight minutes up the road in Surfers Paradise. You can be at RejoovMe before the queue forms at the morning brunch spots back home.",
    routeNote:
      "From Broadbeach, head north on the Gold Coast Highway, turn left onto Cavill Avenue, and RejoovMe is on the left next door to Mantra Wings. Free unlimited basement parking included.",
    localCharacter: [
      "Pacific Fair and Oasis bring the shopping, but the real Broadbeach is the laneway dining off Victoria Avenue — make the spa booking the morning slot and lock in lunch for after.",
      "The Star precinct adds polished hotel energy and a separate dining circuit; if you're staying there, the eight-minute trip to RejoovMe is faster than waiting for an in-house spa slot.",
      "Kurrawa beach and the boardwalk through to Mermaid Beach is one of the great Gold Coast walks — book a recovery massage after."
    ],
    faqs: [
      {
        q: 'Is there a great day spa in Broadbeach itself?',
        a: "Broadbeach has a few hotel spas and neighbourhood salons, but for serious treatment depth — magnesium spa, steam room, advanced organic facials, Dermapen — most Broadbeach locals make the eight-minute drive up to RejoovMe in Surfers Paradise."
      },
      {
        q: 'How long does it take to get from Broadbeach to RejoovMe in Surfers Paradise?',
        a: "Eight minutes by car via the Gold Coast Highway in normal traffic. Tram from Broadbeach North station to Cavill Avenue is around fifteen minutes including walk time."
      },
      {
        q: 'Are there couples or hens packages within easy reach of Broadbeach?',
        a: "Yes — RejoovMe runs dedicated couples and hens group packages (up to twenty guests) just eight minutes north in Surfers Paradise. Their two double treatment rooms and the Hens & Group package are purpose-built for Broadbeach bridal parties."
      }
    ],
    nearby: ['surfers-paradise', 'mermaid-beach', 'main-beach']
  },
  {
    slug: 'burleigh-heads',
    name: 'Burleigh Heads',
    postcode: '4220',
    travelMins: 18,
    travelLine:
      'Eighteen minutes north on the M1 — about the same time it takes to find a park on James Street on a Saturday morning.',
    vibe: 'The bohemian beach village of the southern Gold Coast — headland walks, James Street cafés, and a surf culture that takes itself just seriously enough.',
    intro: [
      "Burleigh Heads is where the Gold Coast lets its hair down. The headland walk between the patrolled beach and Tallebudgera Creek is one of the best urban walks in Australia, and the James Street strip behind it has slowly turned into the unofficial design and brunch capital of the southern Coast. The Burleigh local moves between an ocean swim, a long black at one of the indie roasters, and a Sunday market on the foreshore.",
      "It is a suburb that genuinely loves its body — there's a surfboard in every second car boot, the yoga studios are full at 6 AM, and the local skin care vocabulary is more clinical than it is anywhere else south of Surfers Paradise. Burleigh residents tend to be discerning about wellness in a way that doesn't always make sense to outsiders.",
      "If you live in Burleigh, the local salons are good — there are a couple of standouts on James Street and a strong yoga-and-bathing circuit at Tallebudgera. But for serious clinical skin work paired with bathing, the eighteen-minute trip north remains the best value on the Coast."
    ],
    whyBookHere:
      "Burleigh has the best beach culture on the Coast but is light on full skin clinic capability — Dermapen needling, peels, enzyme therapy, LED Medilight protocols. Pair a morning ocean swim and James Street coffee with a drive to RejoovMe in Surfers Paradise for the clinical side, and you've built the perfect Gold Coast wellness day.",
    routeNote:
      "From Burleigh, head north on the M1 to Exit 71, then follow signs into Surfers Paradise. RejoovMe is two streets back from the beach, next door to Mantra Wings, with free unlimited basement parking.",
    localCharacter: [
      "James Street is the suburb's spine — the cafes here run the brunch standard for the southern Coast, and most locals will steer you to two or three favourites within a single block.",
      "The headland walk to Tallebudgera is a non-negotiable; do the loop before the spa drive and you've earned the magnesium spa.",
      "The Burleigh Sunday market on the foreshore is a long-running ritual — visiting friends should be timed around it where possible."
    ],
    faqs: [
      {
        q: 'What is the best day spa near Burleigh Heads?',
        a: "Within Burleigh itself, the bathing-and-yoga circuit at Tallebudgera and a couple of James Street boutiques are the standouts. For clinical skin work — peels, Dermapen, LED Medilight — Burleigh residents make the eighteen-minute trip up to RejoovMe in Surfers Paradise."
      },
      {
        q: 'How long is the drive from Burleigh Heads to Surfers Paradise?',
        a: "Eighteen minutes by car via the M1 in normal traffic; allow twenty-five minutes during school holidays or wet-weather conditions. The tram (light rail) does not extend to Burleigh, so driving is the practical choice."
      },
      {
        q: 'Where should I have lunch after a day spa visit if I am coming back to Burleigh?',
        a: "James Street and the foreshore both serve excellent post-spa lunches. Book a 10:00 AM RejoovMe slot, you'll be back in Burleigh by 13:30 in time for the proper lunch service."
      }
    ],
    nearby: ['mermaid-beach', 'palm-beach', 'currumbin']
  },
  {
    slug: 'mermaid-beach',
    name: 'Mermaid Beach',
    postcode: '4218',
    travelMins: 12,
    travelLine:
      "Twelve minutes north on the Gold Coast Highway — easier than finding a park on Hedges Avenue at sunset.",
    vibe: "The quiet stretch between Broadbeach and Burleigh — long lots, Millionaires' Row, and a genuinely unbroken beach.",
    intro: [
      "Mermaid Beach is one of the Gold Coast's quietest secrets. The Hedges Avenue strip — Millionaires' Row — runs parallel to a long, almost-deserted beach that locals genuinely treat as their own. Where Broadbeach has the dining and Burleigh has the bohemian polish, Mermaid is the residential middle: large lots, mature trees, and a steady rotation of long-term residents who like the suburb precisely because nothing much happens here.",
      "Hedges Avenue and the streets running back toward Nobby Beach hold some of the most quietly expensive real estate on the Coast. The Mermaid local tends to be either a long-time resident who has watched the Coast change around them, or a younger professional who has worked out that ten extra minutes to dinner is a fair trade for being able to walk to an uncrowded beach.",
      "Mermaid Beach has almost no commercial day spa presence within its borders — and the few options that do exist are smaller boutique salons. For the full magnesium spa and steam room treatment, twelve minutes north in Surfers Paradise is the obvious move."
    ],
    whyBookHere:
      "Mermaid residents value privacy and quality over flash — exactly the brief RejoovMe runs to. Twelve minutes north and you swap the residential calm for a properly equipped clinic, then come home before the dinner reservation.",
    routeNote:
      "Drive twelve minutes north on the Gold Coast Highway, turn left onto Cavill Avenue, and RejoovMe is on the left. Free unlimited basement parking included — handy when you live a short drive away and don't want the parking faff.",
    localCharacter: [
      "Hedges Avenue is the obvious landmark, but the real Mermaid is the laneway streets between the highway and the beach — a Sunday morning walk reveals the suburb's actual texture.",
      "Nobby Beach and the southern end of Mermaid blur into one another and host the suburb's small dining circuit — a great spot for the post-spa lunch.",
      "The unpatrolled beach and the comparative absence of tourists is the long answer to why people choose Mermaid over Broadbeach."
    ],
    faqs: [
      {
        q: 'Is there a day spa in Mermaid Beach itself?',
        a: "Mermaid has a small number of boutique skin and beauty salons, but no venue with a full magnesium spa, steam room and skin clinic combination. Most Mermaid residents drive twelve minutes north to RejoovMe in Surfers Paradise for the complete experience."
      },
      {
        q: 'How far is RejoovMe from Hedges Avenue?',
        a: "Twelve minutes via the Gold Coast Highway, about 7 kilometres. Allow fifteen minutes during peak summer Saturday traffic."
      },
      {
        q: 'Are there enough quiet morning slots for Mermaid residents who want to avoid crowds?',
        a: "Yes — RejoovMe books weekday morning slots from 9:00 AM that are typically much quieter than Saturday afternoon. For Mermaid locals who can flex their schedule, mid-week treatments are the move."
      }
    ],
    nearby: ['broadbeach', 'burleigh-heads', 'miami']
  },
  {
    slug: 'palm-beach',
    name: 'Palm Beach',
    postcode: '4221',
    travelMins: 22,
    travelLine:
      "Twenty-two minutes up the M1 from Palm Beach — comfortably less time than the Sunday queue at the Palm Beach Pavilion.",
    vibe: 'The southern Coast in its softest light — beach pavilions, retro motel renovations, and the kind of unhurried mornings the rest of the strip lost a decade ago.',
    intro: [
      "Palm Beach has been the Gold Coast's quiet success story of the last five years. What used to be a low-rise residential pocket between Burleigh and Currumbin has emerged as a destination in its own right — driven by a wave of motel renovations, beach pavilions and a couple of standout restaurants that have given the suburb a proper centre of gravity. The local crowd is a mix of long-term residents and younger families who priced out of Burleigh.",
      "The suburb runs along Jefferson Lane and the strip parallel to the beach, with Currumbin Creek defining the southern edge. The Palm Beach Pavilion is the new social anchor; the motels — many of them small-scale boutique conversions — are the secondary draw. Palm Beach feels lived-in in a way that Surfers Paradise rarely does.",
      "On the spa side, Palm Beach is genuinely thin. There are massage studios and a couple of facialists, but nothing approaching a full day spa with bathing infrastructure. The twenty-two-minute drive up to RejoovMe is the standard play for any serious treatment."
    ],
    whyBookHere:
      "Palm Beach locals are used to drives for the right experience — the suburb's restaurant scene runs the same way. RejoovMe in Surfers Paradise is the spa equivalent: twenty-two minutes north for the full magnesium spa, steam room and skin clinic experience.",
    routeNote:
      "From Palm Beach, take the M1 north to Exit 71, then signs into Surfers Paradise. RejoovMe is two blocks back from the beach, next door to Mantra Wings, with free unlimited basement parking.",
    localCharacter: [
      "The Palm Beach Pavilion has become the central gathering point — pre or post-spa lunch here is a strong move.",
      "Jefferson Lane and the side streets running to the beach are quietly home to the suburb's best independent retail.",
      "Currumbin Creek and the headland to the south offer one of the calmer walking circuits on the Coast — a good Sunday morning warm-up to a spa booking."
    ],
    faqs: [
      {
        q: 'Are there day spas in Palm Beach?',
        a: "Palm Beach has neighbourhood massage studios and a few boutique facialists but no venue with a full magnesium spa or steam room. For the complete experience most Palm Beach residents drive twenty-two minutes north to RejoovMe in Surfers Paradise."
      },
      {
        q: 'How far is Palm Beach from RejoovMe?',
        a: "About 22 minutes by car via the M1, around 18 kilometres. Slightly longer during peak summer Saturday traffic on the highway."
      },
      {
        q: 'Can a day spa morning be paired with a Palm Beach lunch?',
        a: "Comfortably — a 10:00 AM RejoovMe booking has you back at the Palm Beach Pavilion or one of the Jefferson Lane restaurants by 13:30, in time for a relaxed lunch service."
      }
    ],
    nearby: ['burleigh-heads', 'currumbin', 'coolangatta']
  },
  {
    slug: 'currumbin',
    name: 'Currumbin',
    postcode: '4223',
    travelMins: 25,
    travelLine:
      "Twenty-five minutes via the M1 from Currumbin — well worth it for the full magnesium-spa-and-steam circuit.",
    vibe: 'The wildlife-sanctuary-and-surf-alley pocket — families in the morning, surfers in the afternoon, and a creek that everyone fishes from.',
    intro: [
      "Currumbin is the Gold Coast suburb that quietly does the most work for visiting families. The wildlife sanctuary is the headline attraction — one of those rare tourist sites that locals also use — and the alley at the southern end gives the area one of the most beginner-friendly surf breaks in Queensland. Add Currumbin Creek and a strip of beachside cafes and you have a suburb that genuinely caters for visitors from sunrise to sunset.",
      "The community here is a mix of long-term local families, surf instructors, and a steady tide of holiday renters who book the same apartment year after year. The vibe is friendlier and slightly less polished than Burleigh — Currumbin wears its surf-town heritage on its sleeve.",
      "When it comes to spas, Currumbin has been served historically by smaller massage and skin studios. For a day spa experience with magnesium spa, steam room, and full clinical capability, residents and visitors typically head twenty-five minutes north to Surfers Paradise."
    ],
    whyBookHere:
      "Currumbin families and visiting holidaymakers benefit most from RejoovMe's group flexibility — couples rooms, hens packages, and the option to roll multiple guests through magnesium spa rotations without losing the calm. Twenty-five minutes north and the experience is genuinely worth the drive.",
    routeNote:
      "Take the M1 north to Exit 71 from Currumbin, then follow signs into Surfers Paradise. RejoovMe is two streets back from the beach, next door to Mantra Wings — free unlimited basement parking is included.",
    localCharacter: [
      "Currumbin Wildlife Sanctuary is the family anchor; the morning visit is the right pace.",
      "Currumbin Alley at the southern end is one of the best beginner surf breaks on the Coast — combine a lesson with a follow-up day spa booking the next morning.",
      "The Currumbin Beach Vikings Surf Club is the local Sunday session spot — long lunch territory."
    ],
    faqs: [
      {
        q: 'What is the closest serious day spa to Currumbin?',
        a: "RejoovMe in Surfers Paradise, twenty-five minutes north via the M1. It is the closest venue with a full magnesium spa, steam room and clinical skin capability."
      },
      {
        q: 'Can families with kids organise spa time during a Currumbin holiday?',
        a: "Easily — pair the wildlife sanctuary or a beach morning with the kids, and book a child-free spa slot for the adults later in the day. RejoovMe runs from 9:00 AM through to early evening."
      },
      {
        q: 'How long should I block out for a RejoovMe visit from Currumbin?',
        a: "Allow about four hours door-to-door: twenty-five minutes drive, an hour or two of treatments, and the trip home. Half-day signature packages such as the Ultimate Escape are the best fit."
      }
    ],
    nearby: ['palm-beach', 'coolangatta', 'burleigh-heads']
  },
  {
    slug: 'coolangatta',
    name: 'Coolangatta',
    postcode: '4225',
    travelMins: 35,
    travelLine:
      "Thirty-five minutes by car from Coolangatta — most flights into the Gold Coast airport are followed by exactly this drive.",
    vibe: "The southernmost point of the Coast — airport-adjacent, classic surf, and the cleanest light south of Byron.",
    intro: [
      "Coolangatta sits at the very southern tip of the Gold Coast, sharing a border with Tweed Heads and hosting the Gold Coast Airport at its edge. It has a different feel from the rest of the strip — slower, more residential, with a deep surf heritage and an open beachfront that has resisted the high-rise treatment imposed further north. Kirra Beach, immediately to the north, is one of the most respected surf points in Australia.",
      "The suburb has historically been an arrival point rather than a destination — most visitors land at the airport, pass through Coolangatta and head north. That perception is shifting; the renovated beachfront, a wave of small bars and the proximity to both surf and the Tweed has made Coolangatta a quietly attractive base for a slower Gold Coast holiday.",
      "Day spa options in Coolangatta are mostly boutique skin studios — Native State at Kirra is the standout local pick. For the full magnesium-spa-and-steam experience, the thirty-five-minute drive to Surfers Paradise remains the call."
    ],
    whyBookHere:
      "Coolangatta visitors often have time on their side — they're staying for a long weekend or longer. Building a half-day around the drive to RejoovMe, a Surfers Paradise lunch and the trip home is a comfortable single-day plan.",
    routeNote:
      "Take the M1 north from Coolangatta — the drive runs the length of the Gold Coast. Exit 71 brings you into Surfers Paradise; RejoovMe is next door to Mantra Wings with free unlimited basement parking.",
    localCharacter: [
      "Kirra Beach and Snapper Rocks are the surf-history landmarks — even non-surfers should walk the point.",
      "The Coolangatta beachfront and the renovated park strip are the suburb's slow-Sunday-morning anchor.",
      "Gold Coast Airport's proximity makes Coolangatta a logical base for fly-in hens or wedding-weekend groups."
    ],
    faqs: [
      {
        q: 'Are there any day spas in Coolangatta?',
        a: "Coolangatta has a handful of boutique skin and body studios, with Native State at Kirra the most consistently recommended local option. For a full magnesium spa and steam room experience, most visitors drive thirty-five minutes north to RejoovMe in Surfers Paradise."
      },
      {
        q: 'Is the drive from Coolangatta to Surfers Paradise traffic-heavy?',
        a: "Generally not in non-peak hours — thirty-five minutes is the standard time. Allow forty-five minutes during summer Saturdays or wet conditions."
      },
      {
        q: 'Can a hens party fly into Gold Coast Airport and use RejoovMe?',
        a: "Easily — many hens groups land at Coolangatta and head straight to Surfers Paradise. RejoovMe's Hens & Group package handles up to twenty guests and is purpose-built for visiting parties."
      }
    ],
    nearby: ['currumbin', 'palm-beach', 'burleigh-heads']
  },
  {
    slug: 'main-beach',
    name: 'Main Beach',
    postcode: '4217',
    travelMins: 5,
    travelLine:
      'A five-minute drive south from Tedder Avenue — quicker than the queue at most Tedder cafes on a Saturday morning.',
    vibe: 'The compact, palm-lined enclave between Southport and Surfers Paradise — Marina Mirage, the Spit, and one of the most strollable village strips on the Coast.',
    intro: [
      "Main Beach is a small, contained suburb that punches well above its size. The Tedder Avenue strip is one of the most walkable village centres on the Gold Coast — a tight row of cafes, restaurants and small retail underneath low-rise apartments that have aged into the streetscape rather than dominating it. The Spit at the northern end runs out to the harbour entrance; the southern edge blurs into Surfers Paradise.",
      "The Main Beach local is typically a long-term resident — apartments here turn over more slowly than they do further south — or a Brisbane weekender with a regular booking. The suburb's character is residential, polished and quietly affluent without being showy about it.",
      "Spa options within Main Beach itself are limited to hotel spas in the larger resorts. For the full bathing-and-clinic experience, the five-minute drive south into Surfers Paradise is the convenient answer."
    ],
    whyBookHere:
      "Main Beach residents have the easiest commute to RejoovMe of any Gold Coast suburb outside Surfers Paradise itself — five minutes door to door. There is no logistical reason to settle for a hotel-spa treatment when the best venue on the Coast is up the road.",
    routeNote:
      "From Main Beach, drive five minutes south along the Gold Coast Highway and turn right onto Cavill Avenue. RejoovMe is on the left next door to Mantra Wings — free unlimited basement parking is included.",
    localCharacter: [
      "Tedder Avenue is the social anchor — pre or post-spa coffee here is the obvious move.",
      "Marina Mirage and the Spit are the longer Sunday-walk territory; the boardwalk to Sea World end is worth the time.",
      "The Main Beach pavilion and the southern foreshore are where the locals actually swim."
    ],
    faqs: [
      {
        q: 'Where is the best day spa near Main Beach?',
        a: "Most Main Beach residents head five minutes south to RejoovMe in Surfers Paradise — it's the nearest venue with a magnesium spa, steam room and full skin clinic capability."
      },
      {
        q: 'Is RejoovMe walkable from Main Beach?',
        a: "Walkable in 20–25 minutes along the Esplanade if you fancy it; otherwise it's a five-minute drive or a quick tram ride south to Cavill Avenue."
      },
      {
        q: 'Are weekend morning slots competitive for Main Beach residents?',
        a: "Saturday morning slots fill four to six weeks out. Mid-week mornings are far more available and quieter — a real advantage if you have schedule flex."
      }
    ],
    nearby: ['surfers-paradise', 'southport', 'broadbeach']
  },
  {
    slug: 'southport',
    name: 'Southport',
    postcode: '4215',
    travelMins: 10,
    travelLine:
      'Ten minutes south on the highway from Southport — about the same as the walk from Australia Fair to your car.',
    vibe: 'The Gold Coast CBD — government precinct, the Broadwater parkland, the university hospital, and an honest working rhythm during the week.',
    intro: [
      "Southport is the Gold Coast's administrative centre — local government offices, the Gold Coast University Hospital, Australia Fair shopping centre, and the long parkland strip running along the Broadwater. It is the most genuinely urban part of the Coast, with the kind of weekday office energy you don't get further south, and a residential profile that skews toward professionals and hospital staff.",
      "The Broadwater parkland — running from the Aquatic Centre down to the rotary water park and on toward the Spit — is one of the most under-rated public spaces in Queensland. Locals walk it daily, families take over the rotary park on weekends, and the boardwalk back toward the Marine Stadium remains beautifully quiet during the week.",
      "Spa options in Southport are mostly hotel-attached or small neighbourhood salons. For the full magnesium-spa-and-steam experience, the ten-minute drive south into Surfers Paradise is the call most Southport residents make."
    ],
    whyBookHere:
      "Southport runs on a weekday rhythm that suits mid-week spa bookings perfectly — slip out for a couple of hours, treat the spa as a genuine reset, and be back for the afternoon. RejoovMe is ten minutes south and books smoothly during off-peak windows.",
    routeNote:
      "From Southport, drive ten minutes south on the Gold Coast Highway, then left onto Cavill Avenue. RejoovMe is on the left, next door to Mantra Wings, with free unlimited basement parking.",
    localCharacter: [
      "The Broadwater parkland is the suburb's daily ritual — an early walk pairs perfectly with a mid-morning spa booking.",
      "Australia Fair and the surrounding precinct handle the practical Southport — most residents do their groceries here.",
      "The Gold Coast University Hospital and the surrounding clinics make Southport the Coast's healthcare hub — a relevant context for the local interest in clinical skin work."
    ],
    faqs: [
      {
        q: 'What is the closest serious day spa to Southport?',
        a: "RejoovMe in Surfers Paradise, ten minutes south via the Gold Coast Highway — the closest venue with magnesium spa, steam room and full clinical skin capability."
      },
      {
        q: 'Are there mid-week slots that suit working Southport residents?',
        a: "Yes — RejoovMe books mid-week morning and lunchtime slots that are typically quieter and easier to slot into a working day."
      },
      {
        q: 'Can a Southport-based hens or office group book RejoovMe?',
        a: "Yes — RejoovMe runs Hens & Group packages for up to twenty guests, and corporate wellness sessions can be quoted on request."
      }
    ],
    nearby: ['main-beach', 'surfers-paradise', 'helensvale']
  },
  {
    slug: 'robina',
    name: 'Robina',
    postcode: '4226',
    travelMins: 15,
    travelLine:
      'Fifteen minutes north-east from Robina — comfortably faster than parking at Robina Town Centre on a Saturday.',
    vibe: 'The planned-community polish of the central Gold Coast — Robina Town Centre, Bond University adjacency, and quiet residential streets that locals would not trade.',
    intro: [
      "Robina is one of the most carefully planned suburbs on the Gold Coast — a mix of master-planned residential, the Robina Town Centre shopping precinct, Cbus Super Stadium, Robina Hospital and the campus adjacency of Bond University. The result is a suburb that runs to a different rhythm than the beach strip: more family-driven, more conscious of school catchments, more invested in its parks.",
      "The Robina local tends to be a young family or a professional couple who moved across from the beach for the schools and the space. The Town Centre handles the practical commercial side; the Cellebrity Theatre and the lake circuit handle leisure.",
      "Day spa options in Robina itself are limited to a few neighbourhood salons attached to the major centres. For the full clinical-and-bathing experience, the fifteen-minute drive north-east to Surfers Paradise is the standard play."
    ],
    whyBookHere:
      "Robina is the right distance from RejoovMe — close enough that the drive is unobjectionable, far enough that the spa booking feels like a proper outing. Locals tend to pair the trip with a lunch in Surfers Paradise or a visit to Pacific Fair on the way home.",
    routeNote:
      "From Robina, head north-east via the Robina Parkway, then onto the Gold Coast Highway and into Surfers Paradise. RejoovMe is next door to Mantra Wings — free unlimited basement parking included.",
    localCharacter: [
      "Robina Town Centre handles the suburb's shopping and dining baseline — a useful stop on the way back from a spa visit.",
      "Bond University and Robina Hospital anchor the professional side of the suburb's demographic.",
      "The lake circuit and the parkland walking trails are the local weekend ritual — pairs well with a magnesium spa booking the next day."
    ],
    faqs: [
      {
        q: 'Is there a day spa in Robina?',
        a: "Robina has neighbourhood beauty and skin salons but no venue with a full magnesium spa and steam room. Most Robina residents drive fifteen minutes north-east to RejoovMe in Surfers Paradise for the complete experience."
      },
      {
        q: 'How long is the drive from Robina to Surfers Paradise?',
        a: "About fifteen minutes via Robina Parkway and the Gold Coast Highway. Allow twenty during peak Saturday or school holiday periods."
      },
      {
        q: 'Can I combine a RejoovMe visit with Pacific Fair shopping?',
        a: "Comfortably — Pacific Fair is between Robina and Surfers Paradise, so the round trip naturally accommodates a shopping stop on the way home."
      }
    ],
    nearby: ['mermaid-beach', 'burleigh-heads', 'broadbeach']
  },
  {
    slug: 'helensvale',
    name: 'Helensvale',
    postcode: '4212',
    travelMins: 22,
    travelLine:
      'Twenty-two minutes south-east from Helensvale — most of it on the M1, which gives you time to plan lunch on the way.',
    vibe: 'The northern Gold Coast hub — Westfield, the heavy rail interchange, family suburbs running back toward Hope Island and Coomera.',
    intro: [
      "Helensvale anchors the northern end of the Gold Coast — the major Westfield shopping centre, the heavy rail station that connects through to Brisbane, and the suburban sprawl running back toward Hope Island, Pacific Pines and Coomera. The local demographic is family-dominated, school-conscious, and increasingly commuter-flavoured as the rail link has made Brisbane practical.",
      "The suburb sits about as far north as you can go before the M1 starts trading on theme park signage — Movie World, Wet'n'Wild and Dreamworld are all within a ten-minute drive. That proximity gives Helensvale a steady visitor population that locals manage to stay quietly insulated from.",
      "Day spas in Helensvale itself are thin on the ground — Westfield carries the usual cluster of beauty salons but nothing with the full magnesium-spa-and-clinic combination. For that, the twenty-two-minute drive south-east to Surfers Paradise is the obvious move."
    ],
    whyBookHere:
      "Helensvale families are well-served by Surfers Paradise as a half-day destination — the drive is straightforward, the parking at RejoovMe is included, and the trip home runs against the afternoon traffic.",
    routeNote:
      "From Helensvale, head south-east on the M1 to Exit 71 (Smith Street), then signs into Surfers Paradise. RejoovMe is next door to Mantra Wings with free unlimited basement parking.",
    localCharacter: [
      "Helensvale Westfield is the suburb's commercial anchor — a useful pre-spa breakfast stop.",
      "The proximity to the theme park strip makes Helensvale a base for theme-park weekends — bookend the kids' day with a spa morning for the adults.",
      "Hope Island and Sanctuary Cove are within easy reach — Helensvale residents often treat them as their weekend extension."
    ],
    faqs: [
      {
        q: 'Are there day spas in Helensvale?',
        a: "Helensvale has beauty salons and a few smaller skin studios but no venue with a magnesium spa or steam room. Most Helensvale residents drive twenty-two minutes south-east to RejoovMe in Surfers Paradise."
      },
      {
        q: 'How long is the drive from Helensvale to Surfers Paradise?',
        a: "About twenty-two minutes via the M1 in normal conditions; allow thirty during peak Saturday afternoons or summer holiday weekends."
      },
      {
        q: 'Can I combine a RejoovMe visit with a theme park day for the kids?',
        a: "Yes — the geography works well. Drop the kids at the theme park strip, head to RejoovMe for the morning, collect them mid-afternoon."
      }
    ],
    nearby: ['hope-island', 'southport', 'main-beach']
  },
  {
    slug: 'hope-island',
    name: 'Hope Island',
    postcode: '4212',
    travelMins: 25,
    travelLine:
      'Twenty-five minutes south-east from Hope Island — most of it on the M1, with the back-road option through Helensvale if traffic spikes.',
    vibe: 'Canal-estate luxury — Sanctuary Cove neighbours, golf courses, marinas, and a suburb that runs on its own quiet, monied rhythm.',
    intro: [
      "Hope Island is one of the Gold Coast's most distinctive suburbs — a canal-estate community built around two championship golf courses, a marina, and a series of waterfront houses that share their fairways with Sanctuary Cove. It is residential, exclusive, and operates on a slower clock than anywhere along the beach strip.",
      "The Hope Island local is typically a long-term resident, a retiree, or a Brisbane downsizer trading the city for the marina view. The Marketplace shopping centre handles the practical commercial side; the country club handles social life; and the proximity to Sanctuary Cove next door rounds out the suburb's polish.",
      "Day spa options in Hope Island itself are limited to the resort spas and a handful of boutique skin studios. For the full magnesium-spa-and-clinic combination, residents typically drive twenty-five minutes south-east to RejoovMe in Surfers Paradise."
    ],
    whyBookHere:
      "Hope Island residents tend to be discerning about where their wellness budget goes — they want clinical depth and a calm environment, both of which RejoovMe delivers. Twenty-five minutes south-east is a reasonable trade for the most complete spa experience on the Coast.",
    routeNote:
      "From Hope Island, head south-east on the M1 to Exit 71 (Smith Street), then signs into Surfers Paradise. RejoovMe is next door to Mantra Wings — free unlimited basement parking is included.",
    localCharacter: [
      "Hope Island Marketplace handles the suburb's commercial baseline — a useful stop on the route back from a spa visit.",
      "Sanctuary Cove and the marina circuit are the long-walk territory; pair with a spa booking the following morning for a proper weekend rhythm.",
      "The two golf courses define the suburb's identity — a spa morning is an excellent recovery from a Saturday round."
    ],
    faqs: [
      {
        q: 'Are there day spas in Hope Island?',
        a: "Hope Island has a small number of resort spas and boutique skin studios. For the full magnesium spa, steam room and skin clinic experience, residents typically drive twenty-five minutes south-east to RejoovMe in Surfers Paradise."
      },
      {
        q: 'How long is the drive from Hope Island to Surfers Paradise?',
        a: "About twenty-five minutes via the M1 in normal conditions. The drive runs against the morning commuter flow if you book a 9:00–10:00 AM spa slot."
      },
      {
        q: 'Can a couples spa morning be paired with a Sanctuary Cove lunch?',
        a: "Easily — finish a RejoovMe morning around midday and you are back at Sanctuary Cove for an unhurried lunch by 13:30."
      }
    ],
    nearby: ['helensvale', 'southport', 'main-beach']
  }
];

export const suburbBySlug = (slug: string) => suburbs.find((s) => s.slug === slug);
