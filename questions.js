const QUESTIONS = [
  {
    "num": 1,
    "question": "Nağdsız hesablaşma formasıdır:",
    "options": [
      {
        "text": "aksept",
        "correct": false
      },
      {
        "text": "trast",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "birja",
        "correct": false
      },
      {
        "text": "akkreditiv",
        "correct": true
      }
    ]
  },
  {
    "num": 2,
    "question": "Kredit riskinə aid olan riskdir:",
    "options": [
      {
        "text": "valyuta riski",
        "correct": false
      },
      {
        "text": "likvidlik riski",
        "correct": false
      },
      {
        "text": "əməliyyat riski",
        "correct": false
      },
      {
        "text": "faiz dərəcəsi riski",
        "correct": true
      },
      {
        "text": "bank riski",
        "correct": false
      }
    ]
  },
  {
    "num": 3,
    "question": "Ölkə ərazisində banklar arasında hesablaşmalar:",
    "options": [
      {
        "text": "yalnız depozit olmayan hesablar üzrə aparılır",
        "correct": false
      },
      {
        "text": "yalnız bankların Statistika Komitəsində  açılan hesablar vasitəsilə aparılır",
        "correct": false
      },
      {
        "text": "müxbir hesablar vasitəsi ilə aparılır",
        "correct": true
      },
      {
        "text": "yalnız Milli Depozit Sisteminin müxbir hesablar vasitəsilə aparılır",
        "correct": false
      },
      {
        "text": "yalnız ştatların regional idarələri üzrə olan hesablar vasitəsilə aparılır",
        "correct": false
      }
    ]
  },
  {
    "num": 4,
    "question": "Bank kapitalının üç əsas funksiyasından biridir?",
    "options": [
      {
        "text": "əmanətlərin istifadəsi",
        "correct": false
      },
      {
        "text": "qeyri-müəyyən tənzimləmə",
        "correct": false
      },
      {
        "text": "vəsaitlərin bölgüsü",
        "correct": false
      },
      {
        "text": "qeyri-müəyyən operativlik",
        "correct": false
      },
      {
        "text": "tənzimləmə",
        "correct": true
      }
    ]
  },
  {
    "num": 5,
    "question": "Bankın kredit potensialının artırılması yolları:",
    "options": [
      {
        "text": "cəlb olunmuş vəsaitlərin həcminin artırılmasıdır",
        "correct": true
      },
      {
        "text": "tələblərin minimal ehtiyatlarının artırılmamasıdır",
        "correct": false
      },
      {
        "text": "kreditləşmə prinsiplərinə riayət edilməməsidir",
        "correct": false
      },
      {
        "text": "passiv əməliyyatların təkmilləşdirilməməsidır",
        "correct": false
      },
      {
        "text": "sənəd dövriyyəsinin sürətlənməsidir",
        "correct": false
      }
    ]
  },
  {
    "num": 6,
    "question": "Ödəniş tələbnamə-tapşırığı ilə hesablaşmalar zamanı emitent bank ödəyicinin əvvəlcədən verdiyi sərəncam əsasında vəsait alan tərəfindən təqdim olunan ödəniş tələbnamə tapşırığı üzrə vəsait alanın xeyrinə həyata keçirilir:",
    "options": [
      {
        "text": "ödəniş tələbnamə-tapşırığı ilə hesablaşmalar",
        "correct": true
      },
      {
        "text": "inkasso sərəncamı ilə olan hesablaşmalar",
        "correct": false
      },
      {
        "text": "akkreditivlərlə hesablaşmalar",
        "correct": false
      },
      {
        "text": "veksellər ilə olan hesablaşmalar",
        "correct": false
      },
      {
        "text": "plastik kartlarla hesablaşmalar",
        "correct": false
      }
    ]
  },
  {
    "num": 7,
    "question": "Mənzil tikilməsinə və ya alınmasına fiziki şəxslərə verilən uzunmüddətli ssuda:",
    "options": [
      {
        "text": "tikinti kreditidir",
        "correct": false
      },
      {
        "text": "beynəlxalq kreditidir",
        "correct": false
      },
      {
        "text": "qısamüddətli kreditdir",
        "correct": false
      },
      {
        "text": "overdraft kreditidir",
        "correct": false
      },
      {
        "text": "ipoteka kreditidir",
        "correct": true
      }
    ]
  },
  {
    "num": 8,
    "question": "…. siyasətinin aparılması hesabına kommersiya bankları ilə Mərkəzi Bank arasındakı pul axınları tənzimlənir:",
    "options": [
      {
        "text": "faiz",
        "correct": false
      },
      {
        "text": "valyuta",
        "correct": false
      },
      {
        "text": "əmtəə",
        "correct": false
      },
      {
        "text": "pul",
        "correct": true
      },
      {
        "text": "qiymət",
        "correct": false
      }
    ]
  },
  {
    "num": 9,
    "question": "Nağdsız pul dövriyyəsində mal və pul vəsaitlərinin qarşılıqlı hərəkəti:",
    "options": [
      {
        "text": "heç zaman baş vermir",
        "correct": true
      },
      {
        "text": "həmişə baş verir",
        "correct": false
      },
      {
        "text": "dövri olaraq baş verir",
        "correct": false
      },
      {
        "text": "1 tərəfli müqavilə bağlandıqda baş verir",
        "correct": false
      },
      {
        "text": "sövdələşmə subyektlərinin razılığı əsasında baş verir",
        "correct": false
      }
    ]
  },
  {
    "num": 10,
    "question": "Bankın kassasından nağd pul ... əsasında verilir:",
    "options": [
      {
        "text": "pul çekləri və kassa məxaric orderləri",
        "correct": true
      },
      {
        "text": "şəxsi çeki",
        "correct": false
      },
      {
        "text": "akkreditiv",
        "correct": false
      },
      {
        "text": "ödəniş tapşırığı",
        "correct": false
      },
      {
        "text": "veksel",
        "correct": false
      }
    ]
  },
  {
    "num": 11,
    "question": "Bank menecmentinin məqsədi müəyyən edilir:",
    "options": [
      {
        "text": "bankın mənfəətliliyi ilə",
        "correct": false
      },
      {
        "text": "bankın likvidliyi ilə",
        "correct": false
      },
      {
        "text": "bankın idarə olunması məqsədləri ilə",
        "correct": true
      },
      {
        "text": "bankın ödəmə qabiliyyətliliyi ilə",
        "correct": false
      },
      {
        "text": "bankın iqtisadi və mənəvi məqsədləri ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 12,
    "question": "Bankın mənfəətliliyi ona ........... imkanı verir:",
    "options": [
      {
        "text": "müştəri itirmək",
        "correct": false
      },
      {
        "text": "hesablaşmaların azaldılması",
        "correct": false
      },
      {
        "text": "filiallarla qarşılıqlı münasibəti kəsmək",
        "correct": false
      },
      {
        "text": "yeni filiallar və şöbələr  açmaq yolu ilə öz fəaliyyət miqyasını genişləndirmək",
        "correct": true
      },
      {
        "text": "rentabellik səviyyəsini aşağı salmaq və azaltmaq",
        "correct": false
      }
    ]
  },
  {
    "num": 13,
    "question": "Kommersiya banklarının nizamnamə kapitalının həcmi.....manatdır:",
    "options": [
      {
        "text": "50 mln",
        "correct": true
      },
      {
        "text": "500 mln",
        "correct": false
      },
      {
        "text": "100 mln",
        "correct": false
      },
      {
        "text": "1 mln",
        "correct": false
      },
      {
        "text": "200 mln",
        "correct": false
      }
    ]
  },
  {
    "num": 14,
    "question": "Bağlama nədir:",
    "options": [
      {
        "text": "eyni nominal dəyərdən olan 10 (on) ədəd dəstdən (1000) vərəq ibarət əskinazların bağlanmasıdır",
        "correct": true
      },
      {
        "text": "əskinazların möhürlənməsidir",
        "correct": false
      },
      {
        "text": "əskinazların ləğv edilməsidir",
        "correct": false
      },
      {
        "text": "əskinazların Mərkəzi Bankdan alınmasıdır",
        "correct": false
      },
      {
        "text": "əskinazların xərclənməsidir",
        "correct": false
      }
    ]
  },
  {
    "num": 15,
    "question": "Qiymətlilər nədir:",
    "options": [
      {
        "text": "qiymətli kağız və akkreditivlərdir",
        "correct": false
      },
      {
        "text": "nağd pul,qiymətli kağızlar,qiymətli metallar,daş-qaşlar,zinət əşyalarıdır, xarici valyuta vəsaitləridir",
        "correct": true
      },
      {
        "text": "trast əməliyyatıdır",
        "correct": false
      },
      {
        "text": "lizinq əməliyyatıdır",
        "correct": false
      },
      {
        "text": "kredit pullardır",
        "correct": false
      }
    ]
  },
  {
    "num": 16,
    "question": "İnternet bankçılıq ... əhəmiyyətli dərəcədə şərait yaradır:",
    "options": [
      {
        "text": "qalıq ödənişlərinə",
        "correct": false
      },
      {
        "text": "nağdsız ödənişlərə",
        "correct": true
      },
      {
        "text": "idxal ödənişlərinə",
        "correct": false
      },
      {
        "text": "limitsiz qalan ödənişlərə",
        "correct": false
      },
      {
        "text": "investisiya ödənişlərinə",
        "correct": false
      }
    ]
  },
  {
    "num": 17,
    "question": "İnkassasiya anlayışı aşağıda verilən hansı variantda doğru əks etdirilmişdir:",
    "options": [
      {
        "text": "yalnız plastik kartların təyinat yerinə çatdırılmasıdır",
        "correct": false
      },
      {
        "text": "nağd pul və digər qiymətlilərin olduğu yerdən təyinat yerinə daşınmasıdır",
        "correct": true
      },
      {
        "text": "sənədlərin təyinat yerinə çatdırılmasıdır",
        "correct": false
      },
      {
        "text": "məlumatların təyinat yerinə çatdırılmasıdır",
        "correct": false
      },
      {
        "text": "ipotekanın təyinat yerinə çatdırılmasıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 18,
    "question": "Kreditləşmənin prinsiplərini göstərin:",
    "options": [
      {
        "text": "məqsədli istifadə",
        "correct": false
      },
      {
        "text": "müddətlilik",
        "correct": false
      },
      {
        "text": "ödənişlik-(% faizini ödəmə)",
        "correct": false
      },
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "qaytarılmaq",
        "correct": false
      }
    ]
  },
  {
    "num": 19,
    "question": "Pul banderolu nədir?",
    "options": [
      {
        "text": "pul dəstlərini bağlamaq üçün Mərkəzi Bank tərəfindən təsdiq edilmiş vahid formalı lentdir",
        "correct": true
      },
      {
        "text": "pulları saxlamaq üçün xüsusi yerdir",
        "correct": false
      },
      {
        "text": "pul dəstlərini bağlamaq üçün vahid formalı sənəddir",
        "correct": false
      },
      {
        "text": "eyni nominal dəyərdən olan əskinaz toplusudur",
        "correct": false
      },
      {
        "text": "pul bağlamaq üçün 5 tərəfli lentdir",
        "correct": false
      }
    ]
  },
  {
    "num": 20,
    "question": "Lizinq əməliyyatında kimlər iştirak edə bilər:",
    "options": [
      {
        "text": "gizli bank filialı",
        "correct": false
      },
      {
        "text": "Gömrük Komitəsi",
        "correct": false
      },
      {
        "text": "lizinq alan istənilən hüquqi və fiziki şəxs",
        "correct": true
      },
      {
        "text": "hüquqi şəxs olan kredit göndərən",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": false
      }
    ]
  },
  {
    "num": 21,
    "question": "Banklarda cəlb olunmuş vəsaitlər hansı əməliyyatlar hesabına səfərbər edilir:",
    "options": [
      {
        "text": "mənfəət əməliyyatları",
        "correct": false
      },
      {
        "text": "bankın xəzinədarlıq əməliyyatları",
        "correct": false
      },
      {
        "text": "trast əməliyyatları",
        "correct": false
      },
      {
        "text": "bankın passiv əməliyyatları",
        "correct": true
      },
      {
        "text": "bankın aktiv əməliyyatları",
        "correct": false
      }
    ]
  },
  {
    "num": 22,
    "question": "Universal bank:",
    "options": [
      {
        "text": "manat və valyuta lisenziyasına malikdir",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın əməliyyatlarını həyata keçirir",
        "correct": false
      },
      {
        "text": "qiymətli kağızlar bazarında peşəkar fəaliyyətə və əlavə lisenziyaya malikdir",
        "correct": false
      },
      {
        "text": "bütün bank əməliyyatlarını həyata keçirir",
        "correct": true
      },
      {
        "text": "investisiya fondlarını tənzimləyir",
        "correct": false
      }
    ]
  },
  {
    "num": 23,
    "question": "Universal bank:",
    "options": [
      {
        "text": "sənədsiz stehlak krediti verir",
        "correct": false
      },
      {
        "text": "yalniz investisiya əməliyyatını həyata keçirir",
        "correct": false
      },
      {
        "text": "heç bir bank əməliyyatını həyata keçirmir",
        "correct": false
      },
      {
        "text": "bütün bank əməliyyatlarını həyata keçirir",
        "correct": true
      },
      {
        "text": "kommersiya banklarını lisenziyalaşdırır",
        "correct": false
      }
    ]
  },
  {
    "num": 24,
    "question": "İnvestor kimi bankın əsas məqsədlərindən biri:",
    "options": [
      {
        "text": "vəsaitlərdən maksimum istifadə etməməkdir",
        "correct": false
      },
      {
        "text": "vəsaitlərin vaxtında geri qaytarılmamasıdır",
        "correct": false
      },
      {
        "text": "vəsaitlərin müddətliliyinin qorunmamasıdır",
        "correct": false
      },
      {
        "text": "vəsaitlərin ödəncliyini təmin etməməkdir",
        "correct": false
      },
      {
        "text": "qoyuluşların təhlükəsizliyi və onların artımıdır",
        "correct": true
      }
    ]
  },
  {
    "num": 25,
    "question": "Valyuta sərvətlərinə aiddir:",
    "options": [
      {
        "text": "bank sənədləri",
        "correct": false
      },
      {
        "text": "kredit, depozit və s.",
        "correct": false
      },
      {
        "text": "əmlak, istehlak malları",
        "correct": false
      },
      {
        "text": "xarici valyuta, qiymətli metallar və s.",
        "correct": true
      },
      {
        "text": "klirinq, depozit",
        "correct": false
      }
    ]
  },
  {
    "num": 26,
    "question": "Əməliyyat günü ərzində kassa əməliyyatlarının həyata keçirildiyi kassadır:",
    "options": [
      {
        "text": "gizli mədaxil kassası",
        "correct": false
      },
      {
        "text": "gündüz kassası",
        "correct": true
      },
      {
        "text": "gizli məxaric kassası",
        "correct": false
      },
      {
        "text": "gizli kassa",
        "correct": false
      },
      {
        "text": "banklarda belə kassa olmur",
        "correct": false
      }
    ]
  },
  {
    "num": 27,
    "question": "Bank fəaliyyətində risklər neçə kateqoriyaya bölünür?",
    "options": [
      {
        "text": "dövlət vəsaitlərinin riskləri",
        "correct": false
      },
      {
        "text": "yalnız müştərilərin vəsaitlərinin riskləri",
        "correct": false
      },
      {
        "text": "qapalı və açıq risklər",
        "correct": false
      },
      {
        "text": "maliyyə riskləri,funksional risklər, xarici risklər",
        "correct": true
      },
      {
        "text": "bank riskləri, depozit riskləri",
        "correct": false
      }
    ]
  },
  {
    "num": 28,
    "question": "Beynəlxalq maliyyə ödənişlərini həyata keçirən sistemi göstərin:",
    "options": [
      {
        "text": "XÖHKS(Xırda Ödənişlər üzrə Hesablaşma Klirinq Sistemi)",
        "correct": false
      },
      {
        "text": "KÖMİS(Kütləvi Ödənişlər üzrə Mərkəzləşdirilmiş İnformasiya Sistemi)",
        "correct": false
      },
      {
        "text": "AZİPS(Real Vaxt Rejimində işləyən Banklararası Milli Hesablaşma Sistemi)",
        "correct": false
      },
      {
        "text": "HÖP(Hökümət Ödəniş Portalı)",
        "correct": false
      },
      {
        "text": "SWİFT(Beynəlxalq Maliyyə Telekommunikasiya Sistemi)",
        "correct": true
      }
    ]
  },
  {
    "num": 29,
    "question": "Bank kreditində ssuda faizi müəyyən edilir:",
    "options": [
      {
        "text": "borcalanın bərabər ödənişləri ilə",
        "correct": false
      },
      {
        "text": "sənədləşmə üzrə ödənilən faizlə",
        "correct": false
      },
      {
        "text": "Müqavilə şərtləri əsasında",
        "correct": true
      },
      {
        "text": "kredit müqaviləsinin müddəti bitdikdən sonra",
        "correct": false
      },
      {
        "text": "bankın verdiyi ssudalardan faizlərin tutulması yolu ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 30,
    "question": "Azərbaycan Respublikası Prezidentinin 2018-ci il 6 sentyabr tarixli sərəncamı ilə 2018-2020-ci illərdə Azərbaycan Respublikası rəqəmsal ödənişlərin genişləndirilməsi  üzrə Dövlət Programı çərçivəsində Mərkəzi Bank tərəfindən yaradılmışdır:",
    "options": [
      {
        "text": "KÖMİS Sistemi",
        "correct": false
      },
      {
        "text": "AZİPS Sistemi",
        "correct": false
      },
      {
        "text": "Klirinq Sistemi",
        "correct": false
      },
      {
        "text": "SWİFT Sistemi",
        "correct": false
      },
      {
        "text": "Ani Ödənişlər Sistemi",
        "correct": true
      }
    ]
  },
  {
    "num": 31,
    "question": "Azərbaycan Respublikası Prezidentinin 2018-ci il 6 sentyabr tarixli sərəncamı ilə 2018-2020-ci illərdə Azərbaycan Respublikası rəqəmsal ödənişlərin genişləndirilməsi  üzrə Dövlət Programı çərçivəsində Mərkəzi Bank tərəfindən yaradılmışdır:",
    "options": [
      {
        "text": "SWİFT Sistemi",
        "correct": false
      },
      {
        "text": "KÖMİS Sistemi",
        "correct": false
      },
      {
        "text": "Ani Ödənişlər Sistemi",
        "correct": true
      },
      {
        "text": "AZİPS Sistemi",
        "correct": false
      },
      {
        "text": "Klirinq Sistemi",
        "correct": false
      }
    ]
  },
  {
    "num": 32,
    "question": "Müəssisələrə nağd pul ilə bank köçürmələrini həyata keçirmək:",
    "options": [
      {
        "text": "lisenziya aldıqdan sonra mümkündür",
        "correct": false
      },
      {
        "text": "fiziki şəxslər icazə verdikdə mümkündür",
        "correct": false
      },
      {
        "text": "hesablaşma kassa mərkəzi tərəfindən icazə verildiyi zaman mümkündür",
        "correct": false
      },
      {
        "text": "Qanunvericiliklə müəyyən edilmiş qaydaya əsasən icazə verilir",
        "correct": true
      },
      {
        "text": "fiziki şəxslər tərəfindən müəssisəyə icazə verildikdə mümkündür",
        "correct": false
      }
    ]
  },
  {
    "num": 33,
    "question": "Kassa əməliyyatları bankların ..... əməliyyatlarıdır:",
    "options": [
      {
        "text": "təmənnasız",
        "correct": false
      },
      {
        "text": "birja",
        "correct": false
      },
      {
        "text": "öz müştəriləri ilə nağd pul hesablaşmalarını həyata keçirən",
        "correct": true
      },
      {
        "text": "öz müştəriləri ilə nağdsız pul hesablaşmalarını həyata keçirən",
        "correct": false
      },
      {
        "text": "lisenziya",
        "correct": false
      }
    ]
  },
  {
    "num": 34,
    "question": "Konvertasiya.......deyilir:",
    "options": [
      {
        "text": "bir bankın digərinə dəyişdirilməsinə",
        "correct": false
      },
      {
        "text": "nağd pulun nağdsız pula çevrilməsinə",
        "correct": false
      },
      {
        "text": "bir valyuta növünün digərinə dəyişdirilməsinə",
        "correct": true
      },
      {
        "text": "pulun kreditə çevrilməsinə",
        "correct": false
      },
      {
        "text": "pulun dəfinəyə çevrilməsinə",
        "correct": false
      }
    ]
  },
  {
    "num": 35,
    "question": "Nağdsız dövriyyə … … əhatə edir:",
    "options": [
      {
        "text": "yalnız valyuta dövriyyəsini",
        "correct": false
      },
      {
        "text": "yalnız maliyyə dövriyyəsini",
        "correct": false
      },
      {
        "text": "yalnız əmtəə dövriyyəsini",
        "correct": false
      },
      {
        "text": "yalnız qeyri əmtəə dövriyyəsini",
        "correct": false
      },
      {
        "text": "əmtəə və qeyri əmtəə dövriyyəsini",
        "correct": true
      }
    ]
  },
  {
    "num": 36,
    "question": "Mərkəzi Bankın əsas resurs mənbəyidir:",
    "options": [
      {
        "text": "hesablara vəsaitləri köçürmək",
        "correct": false
      },
      {
        "text": "lisenziya vermək",
        "correct": false
      },
      {
        "text": "banknot ekspansiyası",
        "correct": false
      },
      {
        "text": "banknot emissiyası",
        "correct": true
      },
      {
        "text": "sərbəst vəsaitlər",
        "correct": false
      }
    ]
  },
  {
    "num": 37,
    "question": "Kommersiya bankları hansı Bank Qanununa əsasən fəaliyyət göstərir?",
    "options": [
      {
        "text": "düzgün cavab yoxdur",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatları (BOKT) Haqqında Qanuna əsasən",
        "correct": false
      },
      {
        "text": "\"Banklar Assosiasiyaları Haqqında\" Qanuna əsasən",
        "correct": false
      },
      {
        "text": "\"Qiymətli Kağızlar Haqqında\" Qanuna əsasən",
        "correct": false
      },
      {
        "text": "\"Banklar Haqqında\" Azərbaycan Respublikasının Qanununa əsasən",
        "correct": true
      }
    ]
  },
  {
    "num": 38,
    "question": "Kommersiya bankları ....... əməliyyatlarını yerinə yetirirlər:",
    "options": [
      {
        "text": "dövlət qiymətli kağızlarını satmaq",
        "correct": false
      },
      {
        "text": "ölkənin qızıl və valyuta fonduna xidmət göstərir",
        "correct": false
      },
      {
        "text": "kreditləşmə, hesablaşma",
        "correct": true
      },
      {
        "text": "lisenziya vermək",
        "correct": false
      },
      {
        "text": "dövlətə kassa xidməti göstərmək",
        "correct": false
      }
    ]
  },
  {
    "num": 39,
    "question": "Banklar arasında hesablaşmalar:",
    "options": [
      {
        "text": "Müxbir hesablar vasitəsi ilə aparılır",
        "correct": true
      },
      {
        "text": "Xəzinədarlıq hesabları üzrə aparılır",
        "correct": false
      },
      {
        "text": "depozit hesabları üzrə aparılır",
        "correct": false
      },
      {
        "text": "bankların Maliyyə Nazirliyində açılan hesabları vasitəsi ilə aparılır",
        "correct": false
      },
      {
        "text": "lizinq şirkətlərinin müxbir hesabları vasitəsi ilə aparılır",
        "correct": false
      }
    ]
  },
  {
    "num": 40,
    "question": "Bank hesablarının növləridir:",
    "options": [
      {
        "text": "cari hesablar, cari subhesablar, əmanət hesabları, müxbir hesablar",
        "correct": true
      },
      {
        "text": "məbləğ hesabları, müxbir hesablar",
        "correct": false
      },
      {
        "text": "əsas və əmanət hesabları",
        "correct": false
      },
      {
        "text": "əsas və cari hesablar, valyuta hesabları",
        "correct": false
      },
      {
        "text": "əsas və cari hesablar, kredit hesablar",
        "correct": false
      }
    ]
  },
  {
    "num": 41,
    "question": "Kommersiya banklarının yaradılması və təşkili hansı variantda doğru verilib?",
    "options": [
      {
        "text": "Qarışıq Səhmdar Cəmiyyəti formasında yaradılır",
        "correct": false
      },
      {
        "text": "Qapalı Səhmdar Cəmiyyəti formasında yaradılır",
        "correct": false
      },
      {
        "text": "Açıq Səhmdar Cəmiyyəti formasında yaradılır və fəaliyyət göstərir",
        "correct": true
      },
      {
        "text": "Açıq və Qapalı Səhmdar Cəmiyyəti formasında yaradılır və fəaliyyət göstərir",
        "correct": false
      },
      {
        "text": "əsas və qeyri-Məhdud Məsuliyyətli Cəmiyyət formasında yaradılır",
        "correct": false
      }
    ]
  },
  {
    "num": 42,
    "question": "Real Vaxt Rejimində Banklararası Milli Hesablaşmalar sistemidir:",
    "options": [
      {
        "text": "XÖHKS",
        "correct": false
      },
      {
        "text": "SVOP",
        "correct": false
      },
      {
        "text": "AZİPS",
        "correct": true
      },
      {
        "text": "BOKT",
        "correct": false
      },
      {
        "text": "SWIFT",
        "correct": false
      }
    ]
  },
  {
    "num": 43,
    "question": "Opsion ................ :",
    "options": [
      {
        "text": "qabaqcadan razılaşdırılmış qiymətə, müəyyən olunmuş tarixə valyuta alqı-satqısına hüquq verən kontraktdır",
        "correct": true
      },
      {
        "text": "öhdəçilikdir",
        "correct": false
      },
      {
        "text": "müəyyən edilməyən tarixə valyuta alqı satqısına hüquq verən kontraktdır",
        "correct": false
      },
      {
        "text": "mütləq reallaşmadır",
        "correct": false
      },
      {
        "text": "depozitdir",
        "correct": false
      }
    ]
  },
  {
    "num": 44,
    "question": "Dövlətin xəzinədarlıq hesablarına xidmət göstərir:",
    "options": [
      {
        "text": "Bank şirkətləri",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "bankların müştəriləri",
        "correct": false
      },
      {
        "text": "Universal banklar",
        "correct": false
      },
      {
        "text": "İxtisaslaşmış banklar",
        "correct": false
      }
    ]
  },
  {
    "num": 45,
    "question": "Kredit təşkilatlarının Ali İdarəetmə Orqanı ...... Ümumi Yığıncağıdır:",
    "options": [
      {
        "text": "Təsisçilərin",
        "correct": true
      },
      {
        "text": "müştərilərin",
        "correct": false
      },
      {
        "text": "milli  depozit şirkətlərinin",
        "correct": false
      },
      {
        "text": "Bank Holdinq şirkətlərinin",
        "correct": false
      },
      {
        "text": "İdarə Heyyətinin",
        "correct": false
      }
    ]
  },
  {
    "num": 46,
    "question": "AZİPS -də(Real Vaxt Rejimində Banklararası Milli Hesablaşmalar Sistemi) hesablaşmalar hansı valyutada aparılır?",
    "options": [
      {
        "text": "yalnız dollar və rubl ilə",
        "correct": false
      },
      {
        "text": "milli və xarici",
        "correct": true
      },
      {
        "text": "yalnız rubl ilə",
        "correct": false
      },
      {
        "text": "yalnız xarici",
        "correct": false
      },
      {
        "text": "yalnız milli",
        "correct": false
      }
    ]
  },
  {
    "num": 47,
    "question": "Vençur anlayışı nədir?",
    "options": [
      {
        "text": "Mərkəzi Bankın əməliyyatıdır",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatlarının (BOKT) riskli olmayan əməliyyatıdır",
        "correct": false
      },
      {
        "text": "mənfi risklərlə vəsait köçürülməsidir",
        "correct": false
      },
      {
        "text": "rezidentlərin etibarlı vəsait qoyuluşudur",
        "correct": false
      },
      {
        "text": "riskli vəsait qoyuluşudur",
        "correct": true
      }
    ]
  },
  {
    "num": 48,
    "question": "Vençur anlayışı nədir?",
    "options": [
      {
        "text": "Mərkəzi Bankın əməliyyatıdır",
        "correct": false
      },
      {
        "text": "şifrələnmiş risklərlə vəsait qoyuluşudur",
        "correct": false
      },
      {
        "text": "rezidentlərin etibarlı vəsait qoyuluşudur",
        "correct": false
      },
      {
        "text": "riskli vəsait qoyuluşudur",
        "correct": true
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatlarının (BOKT) riskli omayan əməliyyatıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 49,
    "question": "Beynəlxalq hesablaşmalarda bir bankın başqa bankda olan müxbir hesabı adlanır:",
    "options": [
      {
        "text": "xüsusi ssuda hesabı",
        "correct": false
      },
      {
        "text": "cari hesab",
        "correct": false
      },
      {
        "text": "\"Nostro\" hesab",
        "correct": true
      },
      {
        "text": "gizli hesab",
        "correct": false
      },
      {
        "text": "hesablaşma hesabı",
        "correct": false
      }
    ]
  },
  {
    "num": 50,
    "question": "Mərkəzi Bankın aktiv əməliyyatıdır:",
    "options": [
      {
        "text": "plastik kartlarla əməliyyatlar",
        "correct": false
      },
      {
        "text": "investisiya əməliyyatları",
        "correct": false
      },
      {
        "text": "fiziki şəxslərərə kredit vermək",
        "correct": false
      },
      {
        "text": "uçot-ssuda əməliyyatları, qızıl və valyuta ehtiyatlarının idarə olunması və s.",
        "correct": true
      },
      {
        "text": "mənfəət əldə etmək",
        "correct": false
      }
    ]
  },
  {
    "num": 51,
    "question": "Mərkəzi Bankın aktiv əməliyyatıdır:",
    "options": [
      {
        "text": "uçot-ssuda əməliyyatları, qızıl və valyuta ehtiyatlarının idarə olunması və s.",
        "correct": true
      },
      {
        "text": "fiziki şəxslərə kredit vermək",
        "correct": false
      },
      {
        "text": "investisiya əməliyyatları",
        "correct": false
      },
      {
        "text": "mənfəət əldə etmək",
        "correct": false
      },
      {
        "text": "plastik kartlarla əməliyyatlar",
        "correct": false
      }
    ]
  },
  {
    "num": 52,
    "question": "İxtisaslaşma səviyyəsinə görə banklar ayrılır:",
    "options": [
      {
        "text": "universal və ixtisaslaşmış",
        "correct": true
      },
      {
        "text": "yalnız ixtisaslaşmış",
        "correct": false
      },
      {
        "text": "kommersiya banklarının qərarına əsasən 4 yerə ayrılır",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın qərarına əsasən 3 yerə ayrılır",
        "correct": false
      },
      {
        "text": "yalnız universal",
        "correct": false
      }
    ]
  },
  {
    "num": 53,
    "question": "İxtisaslaşma səviyyəsinə görə banklar bölünür:",
    "options": [
      {
        "text": "filialsız banklara və çoxfiliallı banklara",
        "correct": false
      },
      {
        "text": "universal və ixtisaslaşmış banklara",
        "correct": true
      },
      {
        "text": "regional, regionlararası, milli və beynəlxalq banklara",
        "correct": false
      },
      {
        "text": "xarici kapitallı banklara",
        "correct": false
      },
      {
        "text": "dövlət, səhmdar, xüsusi, özəl və qarışıq banklara",
        "correct": false
      }
    ]
  },
  {
    "num": 54,
    "question": "Rezident ifadəsinə daxildir:",
    "options": [
      {
        "text": "Azərbaycan Respublikasında daimi yaşayış yerinə malik olmayan şəxslər",
        "correct": false
      },
      {
        "text": "Azərbaycanda yaşamış xarici rezidentlər",
        "correct": false
      },
      {
        "text": "xarici turistlər",
        "correct": false
      },
      {
        "text": "xarici qonaqlar",
        "correct": false
      },
      {
        "text": "Azərbaycan Respublikasında daimi yaşayış yerinə malik olan şəxslər",
        "correct": true
      }
    ]
  },
  {
    "num": 55,
    "question": "Kreditin prinsipidir:",
    "options": [
      {
        "text": "nəzarətçilik",
        "correct": false
      },
      {
        "text": "bölüşdürücülük",
        "correct": false
      },
      {
        "text": "idarəçilik",
        "correct": false
      },
      {
        "text": "faizin ödənilməsi (ödənişlik)",
        "correct": true
      },
      {
        "text": "sərbəstlik",
        "correct": false
      }
    ]
  },
  {
    "num": 56,
    "question": "Nağdsız dövriyyə … dövriyyəsini əhatə edir:",
    "options": [
      {
        "text": "əsas kommersiya ödənişlərinin",
        "correct": false
      },
      {
        "text": "yalnız maliyyə vəsaitlərinin",
        "correct": false
      },
      {
        "text": "yalnız qeyri-əmtəə",
        "correct": false
      },
      {
        "text": "əmtəə və qeyri əmtəə dövriyyəsini",
        "correct": true
      },
      {
        "text": "kassa",
        "correct": false
      }
    ]
  },
  {
    "num": 57,
    "question": "Mərkəzi Bank məqsədinə nail olmaq üçün bu funksiyanı yerinə yetirir:",
    "options": [
      {
        "text": "fiziki şəxslərin əmanətlərini depozitə cəlb edir",
        "correct": false
      },
      {
        "text": "Bank Assosiasiyalarına kredit verir və onların fəaliyyətini həyata keçirir",
        "correct": false
      },
      {
        "text": "dövlətin pul və valyuta siyasətini müəyyən edir və həyata keçirir",
        "correct": true
      },
      {
        "text": "trast şirkətlərinə kredit verir",
        "correct": false
      },
      {
        "text": "fiziki şəxslərə kredit verir",
        "correct": false
      }
    ]
  },
  {
    "num": 58,
    "question": "Spot əməliyyatı nədir?",
    "options": [
      {
        "text": "bir valyutanın digər valyuta növünə depozit olunmasıdır",
        "correct": false
      },
      {
        "text": "bir valyutanın digər valyutaya konvertasiya edilə bilməməsidir",
        "correct": false
      },
      {
        "text": "bir valyutanın digərinə bölünməsidir",
        "correct": false
      },
      {
        "text": "bir valyutanın digərinə klirinq edilməsidir",
        "correct": false
      },
      {
        "text": "cari bazar məzənnəsi ilə bir valyutanın digəri ilə satın alınmasıdır",
        "correct": true
      }
    ]
  },
  {
    "num": 59,
    "question": "……lizinqdə müqavilə istənilən vaxt pozula bilər:",
    "options": [
      {
        "text": "depozit sahibinin təşəbbüsü ilə",
        "correct": false
      },
      {
        "text": "kredit təşkilatlarının inkasatorunun təşəbbüsü ilə",
        "correct": false
      },
      {
        "text": "tərəflərdən birinin təşəbbüsü ilə",
        "correct": true
      },
      {
        "text": "kənar şəxslərin təşəbbüsü ilə",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın təşəbbüsü ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 60,
    "question": "Kredit üçün xarakterik olan nədir:",
    "options": [
      {
        "text": "istifadəyə görə ödəniş",
        "correct": true
      },
      {
        "text": "qaytarılan olmaması",
        "correct": false
      },
      {
        "text": "tərəfdaşlıq",
        "correct": false
      },
      {
        "text": "məcburi xarakter daşıması",
        "correct": false
      },
      {
        "text": "münasibətlərin əvəzsiz olması",
        "correct": false
      }
    ]
  },
  {
    "num": 61,
    "question": "Kommersiya bankının passiv əməliyyatıdır .......:",
    "options": [
      {
        "text": "sənədləşmə",
        "correct": false
      },
      {
        "text": "innovasiya",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": true
      },
      {
        "text": "faktorinq",
        "correct": false
      },
      {
        "text": "maliyyələşmə",
        "correct": false
      }
    ]
  },
  {
    "num": 62,
    "question": "Əmanət sertifikatı verilə bilər ......:",
    "options": [
      {
        "text": "gizli şəxslərə",
        "correct": false
      },
      {
        "text": "yalnız bankın səhmdarlarının filiallarına",
        "correct": false
      },
      {
        "text": "trast şirkətlərinə",
        "correct": false
      },
      {
        "text": "trast şirkətinin filialına",
        "correct": false
      },
      {
        "text": "fiziki şəxslərə",
        "correct": true
      }
    ]
  },
  {
    "num": 63,
    "question": "Səhm buraxmaq yolu ilə banklar:",
    "options": [
      {
        "text": "qiymətli kağızlarla əməliyyat aparmaq hüququ əldə etmirlər",
        "correct": false
      },
      {
        "text": "nizamnamə kapitalını formalaşdırırlar",
        "correct": true
      },
      {
        "text": "qiymətli kağızlar bazarında iştirak etmirlər",
        "correct": false
      },
      {
        "text": "bank fəaliyyətinə lisenziya alırlar",
        "correct": false
      },
      {
        "text": "valyuta bazarında iştirak edirlər",
        "correct": false
      }
    ]
  },
  {
    "num": 64,
    "question": "Ayrı-ayrı bank əməliyyatlarını yerinə yetirmək hüququ olan kredit təşkilatıdır:",
    "options": [
      {
        "text": "Bank Birlikləri",
        "correct": false
      },
      {
        "text": "Sığorta Kompaniyaları",
        "correct": false
      },
      {
        "text": "Bank Assosiasiyaları",
        "correct": false
      },
      {
        "text": "bank filiallarının filialları",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatları (BOKT)",
        "correct": true
      }
    ]
  },
  {
    "num": 65,
    "question": "Banklararası kreditin cəlb olunmasında məqsəd:",
    "options": [
      {
        "text": "lizinq əməliyyatlarının genişləndirilməsidir",
        "correct": false
      },
      {
        "text": "inkassasiya fəaliyyətinin yaxşılaşdırılmasıdır",
        "correct": false
      },
      {
        "text": "kommersiya banklarının aktiv əməliyyatlarının genişləndirilməsidir",
        "correct": true
      },
      {
        "text": "kassadakı nağd pulun dəyərdən düşməsidir",
        "correct": false
      },
      {
        "text": "sənəd dövriyyəsinin sürətləndirilməsidir",
        "correct": false
      }
    ]
  },
  {
    "num": 66,
    "question": "Kommersiya banklarının aktiv əməliyyatlarına aiddir:",
    "options": [
      {
        "text": "yalnız kassa əməliyyatları",
        "correct": false
      },
      {
        "text": "kredit əməliyyatları,passiv əməliyyatlar,kassa əməliyyatları",
        "correct": false
      },
      {
        "text": "kredit əməliyyatları, investisiya əməliyyatları və s.",
        "correct": true
      },
      {
        "text": "yalnız investisiya əməliyyatları",
        "correct": false
      },
      {
        "text": "hesablaşma və passiv əməliyyatlar",
        "correct": false
      }
    ]
  },
  {
    "num": 67,
    "question": "Müştərilərə açılmış hesabların qeydiyyatı kitabında aşağıdakı məlumat məcburidir:",
    "options": [
      {
        "text": "yuxarı təşkilatın adı",
        "correct": false
      },
      {
        "text": "şəxsi hesabın nömrəsi",
        "correct": true
      },
      {
        "text": "müştərinin fəaliyyət növü",
        "correct": false
      },
      {
        "text": "müştərinin uçot məlumatları",
        "correct": false
      },
      {
        "text": "müştərinin banka olan borcu",
        "correct": false
      }
    ]
  },
  {
    "num": 68,
    "question": "Mərkəzi Bankın təşkilati sturukturuna daxildir:",
    "options": [
      {
        "text": "əmanətçilər, İdarə Heyəti",
        "correct": false
      },
      {
        "text": "kommersiya bankları, filiallar",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatları (BOKT)",
        "correct": false
      },
      {
        "text": "İdarə Heyəti, Mərkəzi Aparat, Ərazi İdarələri",
        "correct": true
      },
      {
        "text": "fiziki şəxslər, auditorlar",
        "correct": false
      }
    ]
  },
  {
    "num": 69,
    "question": "Kommersiya bankının passiv əməliyyatlarına ............. aiddir:",
    "options": [
      {
        "text": "vəsaitlərin cəlb edilməsi",
        "correct": true
      },
      {
        "text": "müştərilərə sənəd xidmətinin göstərilməsi",
        "correct": false
      },
      {
        "text": "investisiya əməliyyatları",
        "correct": false
      },
      {
        "text": "trast əməliyyatları",
        "correct": false
      },
      {
        "text": "kreditlərin verilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 70,
    "question": "Kredit təşkilatının əsas məqsədidir:",
    "options": [
      {
        "text": "müəssisələri kreditlə təmin etməmək",
        "correct": false
      },
      {
        "text": "mənfəət əldə etmək",
        "correct": true
      },
      {
        "text": "səhmdarlara dividend ödəmək",
        "correct": false
      },
      {
        "text": "hesablaşmaları həyata keçirməmək",
        "correct": false
      },
      {
        "text": "müəssisələrə kassa xidməti göstərməmək",
        "correct": false
      }
    ]
  },
  {
    "num": 71,
    "question": "Qiymətli kağızlara aid edilir:",
    "options": [
      {
        "text": "sertifikatlar",
        "correct": false
      },
      {
        "text": "veksellər",
        "correct": false
      },
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "istiqrazlar",
        "correct": false
      },
      {
        "text": "səhmlər",
        "correct": false
      }
    ]
  },
  {
    "num": 72,
    "question": "Faktorinq əməliyyatında müştəri qismində çıxış edir:",
    "options": [
      {
        "text": "bankın ərazi bölmələri",
        "correct": false
      },
      {
        "text": "qeyri Bank Olmayan Kredit Təşkilatları (BOKT)",
        "correct": false
      },
      {
        "text": "qeyri sığorta kompaniyaları",
        "correct": false
      },
      {
        "text": "bankın kredit idarəsi",
        "correct": false
      },
      {
        "text": "müxtəlif iqtisadi subyektlər",
        "correct": true
      }
    ]
  },
  {
    "num": 73,
    "question": "Bank Səhmdarlarının Ümumi Yığıncağının müstəsna səlahiyyətinə aid deyil ........:",
    "options": [
      {
        "text": "nizamnaməyə əlavələr və dəyişikliklər etmək",
        "correct": false
      },
      {
        "text": "bankın maliyyə və kadr siyasətini müəyyənləşdirmək",
        "correct": false
      },
      {
        "text": "dövri olaraq bankın hesabatını müzakirə etmək",
        "correct": false
      },
      {
        "text": "bankın nizamnaməsini qəbul etmək",
        "correct": false
      },
      {
        "text": "bankın filiallarına lisenziya vermək",
        "correct": true
      }
    ]
  },
  {
    "num": 74,
    "question": "Kapital qoyuluşunun maliyyələşdirmə mənbəələrinə .....aiddir?",
    "options": [
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "bələdiyyə vəsaitləri",
        "correct": false
      },
      {
        "text": "sığorta fondlarının vasitələri",
        "correct": false
      },
      {
        "text": "pensiya fondunun vəsaitləri",
        "correct": false
      },
      {
        "text": "dövlət büdcə vəsaitləri",
        "correct": false
      }
    ]
  },
  {
    "num": 75,
    "question": "Azərbaycan Respublikası Mərkəzi Bankının fəaliyyətinə dair yoxlama ...........tərəfindən aparılır:",
    "options": [
      {
        "text": "Azərbaycan Respublikasının Prezidenti tərəfindən təyin olunmuş auditor",
        "correct": true
      },
      {
        "text": "Sığorta Təşkilatları",
        "correct": false
      },
      {
        "text": "fiziki şəxslər",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyi",
        "correct": false
      },
      {
        "text": "kredit büroları",
        "correct": false
      }
    ]
  },
  {
    "num": 76,
    "question": "Mərkəzi Bankın passiv əməliyyatıdır:",
    "options": [
      {
        "text": "əhaliyə kredit verilməsi",
        "correct": false
      },
      {
        "text": "banknot emissiyası",
        "correct": true
      },
      {
        "text": "banklara qısa müddətli ssuda verilməsi",
        "correct": false
      },
      {
        "text": "fiziki şəxslərin hesablarına qoyuluşlar",
        "correct": false
      },
      {
        "text": "müəssisələrə kredit verilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 77,
    "question": "Lizinq mahiyyətcə:",
    "options": [
      {
        "text": "lizinq verənin lizinq alana avadanlığı icarəyə verməsidir",
        "correct": true
      },
      {
        "text": "bankın banka verdiyi kreditdir",
        "correct": false
      },
      {
        "text": "lizinq alana verilən ipoteka kreditidir",
        "correct": false
      },
      {
        "text": "lizinq alana verilən sənəddir",
        "correct": false
      },
      {
        "text": "lizinq verənə verilən sənəd kreditidir",
        "correct": false
      }
    ]
  },
  {
    "num": 78,
    "question": "Kredit təşkilatının buraxdığı səhmlər hansı qurum tərəfindən dövlət qeydiyyatına alınır ?",
    "options": [
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "kommersiya bankları",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyi",
        "correct": false
      },
      {
        "text": "Nazirlər Kabineti",
        "correct": false
      },
      {
        "text": "İqtisadiyyat Nazirliyyi",
        "correct": false
      }
    ]
  },
  {
    "num": 79,
    "question": "Banklar…. görə universal və ixtisaslaşmış banklara bölünürlər:",
    "options": [
      {
        "text": "ixtisaslaşma səviyyəsinə görə",
        "correct": true
      },
      {
        "text": "mülkiyyət növünə",
        "correct": false
      },
      {
        "text": "xidmət sferasına",
        "correct": false
      },
      {
        "text": "fəaliyyət miqyaslarına",
        "correct": false
      },
      {
        "text": "sayına görə",
        "correct": false
      }
    ]
  },
  {
    "num": 80,
    "question": "İqtisadiyyatın bazar modelində nağdsız pulun emissiyası … tərəfindən həyata keçirilir:",
    "options": [
      {
        "text": "təsərrüfat subyektləri tərəfindən",
        "correct": false
      },
      {
        "text": "Milli Məclis  tərəfindən",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "Banklar Assosiasiyası tərəfindən",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyi tərəfindən",
        "correct": false
      }
    ]
  },
  {
    "num": 81,
    "question": "Öz adından və öz hesabına qiymətli kağızlarla həyata keçirilən peşəkar fəaliyyət adlanır:",
    "options": [
      {
        "text": "diler fəaliyyəti",
        "correct": true
      },
      {
        "text": "depozitar fəaliyyət",
        "correct": false
      },
      {
        "text": "klirinq fəaliyyəti",
        "correct": false
      },
      {
        "text": "lizinq fəaliyyəti",
        "correct": false
      },
      {
        "text": "investisiya fəaliyyəti",
        "correct": false
      }
    ]
  },
  {
    "num": 82,
    "question": "Kommersiya banklarının hansı mülkiyyət formasında yaradılmasına baxmayaraq, onlar.......:",
    "options": [
      {
        "text": "Milli Depozit Sisteminə hesabat verirlər",
        "correct": false
      },
      {
        "text": "Prezidentə hesabat verməlidir",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın İdarə Heyyətindən asılıdır",
        "correct": false
      },
      {
        "text": "Auditorlar Palatasına hesabat verir",
        "correct": false
      },
      {
        "text": "müstəqildir",
        "correct": true
      }
    ]
  },
  {
    "num": 83,
    "question": ".….kreditinin başlıca təyinatı əhalinin istehlak tələbinin ödənilməsidir:",
    "options": [
      {
        "text": "lizinq",
        "correct": false
      },
      {
        "text": "bank",
        "correct": false
      },
      {
        "text": "kommersiya",
        "correct": false
      },
      {
        "text": "blank",
        "correct": false
      },
      {
        "text": "istehlak",
        "correct": true
      }
    ]
  },
  {
    "num": 84,
    "question": "Nağd pul və digər qiymətlilərin daşınmasını həyata keçirən şəxsdir :",
    "options": [
      {
        "text": "mühasib",
        "correct": false
      },
      {
        "text": "kassir",
        "correct": false
      },
      {
        "text": "əməliyyatçı",
        "correct": false
      },
      {
        "text": "mühafizəçi",
        "correct": false
      },
      {
        "text": "inkassator",
        "correct": true
      }
    ]
  },
  {
    "num": 85,
    "question": "Bank əməliyyatlarını həyata keçirə  bilməz :",
    "options": [
      {
        "text": "Bank Olmayan Kredit  Təşkilatları(BOKT)",
        "correct": false
      },
      {
        "text": "İxtisaslaşmış banklar",
        "correct": false
      },
      {
        "text": "Kredit təşkilatları",
        "correct": false
      },
      {
        "text": "Banklar Assosasiyası",
        "correct": true
      },
      {
        "text": "Universal Banklar",
        "correct": false
      }
    ]
  },
  {
    "num": 86,
    "question": "Nağd pul və digər qiymətlilərin daşınması prosesi adlanır :",
    "options": [
      {
        "text": "deflyasiya",
        "correct": false
      },
      {
        "text": "stimulyasiya",
        "correct": false
      },
      {
        "text": "emissiya",
        "correct": false
      },
      {
        "text": "inflyasiya",
        "correct": false
      },
      {
        "text": "inkassasiya",
        "correct": true
      }
    ]
  },
  {
    "num": 87,
    "question": "Mərkəzi Bankın pul kütləsinin azalmasına yönəldilən siyasət necə  adlanır :",
    "options": [
      {
        "text": "komission",
        "correct": false
      },
      {
        "text": "investision",
        "correct": false
      },
      {
        "text": "inflyasion",
        "correct": false
      },
      {
        "text": "restruksion",
        "correct": true
      },
      {
        "text": "sibsidion",
        "correct": false
      }
    ]
  },
  {
    "num": 88,
    "question": "Əhalinin pul yığımları ölkədə hansı  münasibətlərin inkişafının nəticəsidir:",
    "options": [
      {
        "text": "faktorinq",
        "correct": false
      },
      {
        "text": "icarə",
        "correct": false
      },
      {
        "text": "lizinq",
        "correct": false
      },
      {
        "text": "əhalinin pul gəlirlərinin",
        "correct": true
      },
      {
        "text": "forfeytinq",
        "correct": false
      }
    ]
  },
  {
    "num": 89,
    "question": "Banklar tərəfindən vəsaitin cəlb edilməsi əməliyyatıdır:",
    "options": [
      {
        "text": "passiv",
        "correct": true
      },
      {
        "text": "emissiya",
        "correct": false
      },
      {
        "text": "aktiv",
        "correct": false
      },
      {
        "text": "faktorinq",
        "correct": false
      },
      {
        "text": "klirinq",
        "correct": false
      }
    ]
  },
  {
    "num": 90,
    "question": "Xüsusi kapitalın artırılmasının vacib mənbəyi hesab edilir:",
    "options": [
      {
        "text": "xərclər",
        "correct": false
      },
      {
        "text": "fiziki şəxslərin vəsaitləri",
        "correct": false
      },
      {
        "text": "mənfəət",
        "correct": true
      },
      {
        "text": "ipoteka əməliyyatları",
        "correct": false
      },
      {
        "text": "lizinq əməliyyatı",
        "correct": false
      }
    ]
  },
  {
    "num": 91,
    "question": "Depozit dedikdə ... başa düşülür:",
    "options": [
      {
        "text": "yalnız fiziki şəxslərin gəlirləri",
        "correct": false
      },
      {
        "text": "yalnız hüquqi şəxslərin gəlirləri",
        "correct": false
      },
      {
        "text": "fiziki və hüquqi şəxslərin banka vəsait qoyuluşları",
        "correct": true
      },
      {
        "text": "sığorta gəlirləri",
        "correct": false
      },
      {
        "text": "büdcə qoyuluşları",
        "correct": false
      }
    ]
  },
  {
    "num": 92,
    "question": "Mərkəzi Bank haqqında Qanun hansı illərdə qəbul edilmişdir:",
    "options": [
      {
        "text": "1992-ci il, 1996-cı il, 2014-cü il",
        "correct": false
      },
      {
        "text": "1992-ci il, 1996-cı il, 2004-cü il",
        "correct": true
      },
      {
        "text": "1992-ci il, 1996-cı il, 2016-cı il",
        "correct": false
      },
      {
        "text": "1992-ci il, 2004-cü il, 2014-cü il",
        "correct": false
      },
      {
        "text": "1992-ci il, 1996-cı il, 2025cı il",
        "correct": false
      }
    ]
  },
  {
    "num": 93,
    "question": "İri məbləğli ödənişlərin sistemidir:",
    "options": [
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "XÖHKS(Xırda Ödənişlər üzrə Hesablaşma Klirinq Sistemi)",
        "correct": false
      },
      {
        "text": "AZİPS(Real Vaxt Rejimində işləyən Banklararası Milli Hesablaşma Sistemi)",
        "correct": true
      },
      {
        "text": "Vençur sistemi",
        "correct": false
      },
      {
        "text": "veksel",
        "correct": false
      }
    ]
  },
  {
    "num": 94,
    "question": "Analitik hesab nədir?",
    "options": [
      {
        "text": "hesabın daxilindəki məlumatların təfsilatı ilə açıqlanmasını təmin edən hesabdır",
        "correct": true
      },
      {
        "text": "sintetik yoxlanmadır",
        "correct": false
      },
      {
        "text": "kredit hesablarının yoxlanmasıdır",
        "correct": false
      },
      {
        "text": "audit xidmətinin yoxlanmasıdır",
        "correct": false
      },
      {
        "text": "plastik kartların yoxlanmasıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 95,
    "question": "Mühasibat uçotunun aparılmasında bank ..... təmin etməlidir:",
    "options": [
      {
        "text": "hesabat dövrü ərzində həyata keçirilən əməliyyatların qiymətləndirilməsinin əks olunmasını təmin edən uçot siyasətinin dəyişməz qalmasını",
        "correct": false
      },
      {
        "text": "bankın, müştərilərin pullarının və maddi qiymətlilərinin qorunmasını",
        "correct": false
      },
      {
        "text": "kapital qoyuluşu üzrə uçotun və xərclərin uçotunun bir-birindən fərqlənməsini",
        "correct": false
      },
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "hesablama metoduna uyğun olaraq gəlir və xərclərin aid olduğu hesabat dövrünə aid edilməsini",
        "correct": false
      }
    ]
  },
  {
    "num": 96,
    "question": "Təklif edilən ifadələrdən kreditin funksiyasını ayırın:",
    "options": [
      {
        "text": "təkrar istehsal",
        "correct": false
      },
      {
        "text": "vaxtında qaytarılmaq funksiyası",
        "correct": false
      },
      {
        "text": "müvəqqəti azad vəsaitlərin səfərbər olunması",
        "correct": false
      },
      {
        "text": "yenidənbölgü funksiyası",
        "correct": true
      },
      {
        "text": "optimallaşdırma",
        "correct": false
      }
    ]
  },
  {
    "num": 97,
    "question": "Banklarda muhasibat uçotunun əsas predmetidir ....:",
    "options": [
      {
        "text": "düzgün cavab yoxdur",
        "correct": false
      },
      {
        "text": "bank aktivləri, xüsusi vəsaitləri və öhdəlikləri",
        "correct": true
      },
      {
        "text": "yalnız bankın aktivləri",
        "correct": false
      },
      {
        "text": "yalnız bankın passivləri",
        "correct": false
      },
      {
        "text": "dövriyyə sənədləri",
        "correct": false
      }
    ]
  },
  {
    "num": 98,
    "question": "Kredit Təşkilatları İttifaqı və Assosiasiyaları:",
    "options": [
      {
        "text": "istisna hallarda yerinə yetirə bilərlər",
        "correct": false
      },
      {
        "text": "bank filiallarının icazəsi olduqda yerinə yetirə bilərlər",
        "correct": false
      },
      {
        "text": "bank əməliyyatlarını yerinə yetirə bilməzlər",
        "correct": true
      },
      {
        "text": "bank daxili auditin icazəsi olduqda yerinə yetirə bilərlər",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın icazəsi olduqda yerinə yetirə bilərlər",
        "correct": false
      }
    ]
  },
  {
    "num": 99,
    "question": "….. plastik kartı sahibinə yalnız kart hesabında olan məbləğ həcmində hesablaşma aparmaq imkanı verir:",
    "options": [
      {
        "text": "müddətli kartlar",
        "correct": false
      },
      {
        "text": "debet kartları",
        "correct": true
      },
      {
        "text": "super kartlar",
        "correct": false
      },
      {
        "text": "müddətsiz kartlar",
        "correct": false
      },
      {
        "text": "əmtəə kartları",
        "correct": false
      }
    ]
  },
  {
    "num": 100,
    "question": "Kredit təşkilatlarını lisenziyalaşdırır:",
    "options": [
      {
        "text": "Bank Holdinq Şirkətləri",
        "correct": false
      },
      {
        "text": "Beynəlxalq Valyuta Fondu (BVF)",
        "correct": false
      },
      {
        "text": "Maliyyə Monitorinq Mərkəzi",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "bankların filialları",
        "correct": false
      }
    ]
  },
  {
    "num": 101,
    "question": "Kommersiya banklarının kassa əməliyyatıdır:",
    "options": [
      {
        "text": "nağd pulların başqa hesablara köçürülməsi",
        "correct": false
      },
      {
        "text": "veksellərin uçotu",
        "correct": false
      },
      {
        "text": "yalnız nağd pulun qəbulu və ləğv olunması",
        "correct": false
      },
      {
        "text": "qiymətlilərin satılması",
        "correct": false
      },
      {
        "text": "nağd pulların və digər qiymətlilərin qəbulu, verilməsi, saxlanması və qorunması",
        "correct": true
      }
    ]
  },
  {
    "num": 102,
    "question": "Mərkəzi Bank hansı Qanuna əsasən fəaliyyət göstərir:",
    "options": [
      {
        "text": "\"Mərkəzi Bank Haqqında\" Qanuna əsasən",
        "correct": true
      },
      {
        "text": "\"Əsas Bank Haqqında\" Qanuna əsasən",
        "correct": false
      },
      {
        "text": "\"Mərkəzi Bankın fəaliyyəti Haqqında Qanuna\" əsasən",
        "correct": false
      },
      {
        "text": "\"Banklar Bankı Haqqında Qanuna\" əsasən",
        "correct": false
      },
      {
        "text": "\"Dövlət Haqqında\" Qanuna əsasən",
        "correct": false
      }
    ]
  },
  {
    "num": 103,
    "question": "Xırda Ödənişlər üzrə Hesablaşma Klirinq Sistemidir:",
    "options": [
      {
        "text": "AZİPS",
        "correct": false
      },
      {
        "text": "HÖP",
        "correct": false
      },
      {
        "text": "kredit sistemi",
        "correct": false
      },
      {
        "text": "SWİFT",
        "correct": false
      },
      {
        "text": "XÖHKS",
        "correct": true
      }
    ]
  },
  {
    "num": 104,
    "question": "Bank daxili auditin məqsədi nədir?",
    "options": [
      {
        "text": "əmanətçilərin fəaliyyətinə nəzarət etmək məqsədi daşıyır",
        "correct": false
      },
      {
        "text": "daxili auditin məqsədi olmur",
        "correct": false
      },
      {
        "text": "qiymətli kağızlara nəzarət edir",
        "correct": false
      },
      {
        "text": "bank daxili audit - bankın daxili nəzarət və bank risklərinin idarə edilməsi sistemlərinin səmərəliyini artırmaq məqsədi ilə yaradılmışdır",
        "correct": true
      },
      {
        "text": "lizinq əməliyyatlarına nəzarət etmək xidmətidir",
        "correct": false
      }
    ]
  },
  {
    "num": 105,
    "question": "Bankların yaradılması və təşkili hansı variantda doğru verilib?",
    "options": [
      {
        "text": "Açıq Səhmdar Cəmiyyəti formasında yaradılır və fəaliyyət göstərir",
        "correct": true
      },
      {
        "text": "Qapalı Səhmdar Cəmiyyəti formasında yaradılır",
        "correct": false
      },
      {
        "text": "Açıq və Qapalı Səhmdar Cəmiyyəti formasında yaradılır və fəaliyyət göstərir",
        "correct": false
      },
      {
        "text": "Qarışıq Səhmdar Cəmiyyəti formasında yaradılır",
        "correct": false
      },
      {
        "text": "əsas və qeyri məhdud Məsuliyyətli Cəmiyyət formasında yaradılır",
        "correct": false
      }
    ]
  },
  {
    "num": 106,
    "question": "Fəaliyyət ölçülərinə görə banklar ayrılır:",
    "options": [
      {
        "text": "kiçik,səhmdar,kommersiya banklarına",
        "correct": false
      },
      {
        "text": "nümayəndəlik, səhmdar, iri banklara",
        "correct": false
      },
      {
        "text": "çox filiallı, az filiallı banklara",
        "correct": false
      },
      {
        "text": "vasitəçilik,mərkəzi,filiallı",
        "correct": false
      },
      {
        "text": "kiçik, orta, sistem əhəmiyyətli banklara",
        "correct": true
      }
    ]
  },
  {
    "num": 107,
    "question": "Bankların mənafeyini  müdafiə etmək üçün ictimai təşkilat kimi yaradılır:",
    "options": [
      {
        "text": "Banklar Assosiasiyası",
        "correct": true
      },
      {
        "text": "investisiya fondları",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın ərazi idarələri",
        "correct": false
      },
      {
        "text": "kredit təşkilatları və investisiya şirkətləri",
        "correct": false
      },
      {
        "text": "İpoteka Fondları",
        "correct": false
      }
    ]
  },
  {
    "num": 108,
    "question": "Qiymətli kağız:",
    "options": [
      {
        "text": "metalıdır",
        "correct": false
      },
      {
        "text": "plastik kartıdır",
        "correct": false
      },
      {
        "text": "sahibinin aktividir",
        "correct": true
      },
      {
        "text": "kreditidir",
        "correct": false
      },
      {
        "text": "qızıl ehtiyatıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 109,
    "question": "Rəqəmsal ödənişlərin sürətli artımını təmin edən sistemdir:",
    "options": [
      {
        "text": "Bankirlərin Mexanikləşdirilmiş qarşılıqlı Ödəmə Sistemi (BMÖS)",
        "correct": false
      },
      {
        "text": "Bankirlərin Modernləşdirilməsi Ödəmə Sistemi (BMÖS)",
        "correct": false
      },
      {
        "text": "Bankirlərin Mərkəzləşdirilmiş Ödəmə Sistemi (BMÖS)",
        "correct": false
      },
      {
        "text": "Bankların Avtomatlaşdırılması Klirinq Sistemi (BAKS)",
        "correct": true
      },
      {
        "text": "Bankirlərin Vahid Ödəmə Sistemi (BVÖS)",
        "correct": false
      }
    ]
  },
  {
    "num": 110,
    "question": "Rəqəmsal bankçılığın ödəniş vasitəsidir:",
    "options": [
      {
        "text": "səs dinamikləri",
        "correct": false
      },
      {
        "text": "aparıcı terminallar",
        "correct": false
      },
      {
        "text": "ötürücü terminallar",
        "correct": false
      },
      {
        "text": "gücləndirici dinamiklər",
        "correct": false
      },
      {
        "text": "POS terminallar",
        "correct": true
      }
    ]
  },
  {
    "num": 111,
    "question": "Kredit təşkilatının başlıca xüsusiyyətlərindən biri onun …. tipli olmasıdır:",
    "options": [
      {
        "text": "səhmdar",
        "correct": true
      },
      {
        "text": "mükəmməl",
        "correct": false
      },
      {
        "text": "sindikat",
        "correct": false
      },
      {
        "text": "qapalı",
        "correct": false
      },
      {
        "text": "doğru cavab yoxdur",
        "correct": false
      }
    ]
  },
  {
    "num": 112,
    "question": "İqtisadiyyatın …. şəraitində bank sistemi fəal inkişaf edir:",
    "options": [
      {
        "text": "artım",
        "correct": true
      },
      {
        "text": "zəif",
        "correct": false
      },
      {
        "text": "hiperinflyasiya",
        "correct": false
      },
      {
        "text": "depressiv",
        "correct": false
      },
      {
        "text": "böhranlı",
        "correct": false
      }
    ]
  },
  {
    "num": 113,
    "question": "Kommersiya bankı …. :",
    "options": [
      {
        "text": "hökumətin kassiridir",
        "correct": false
      },
      {
        "text": "hökümətin maliyyə agentidir",
        "correct": false
      },
      {
        "text": "bank filiallarına lisenziya verən hüquqi şəxsdir",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliynin struktur bölməsidir",
        "correct": false
      },
      {
        "text": "hesablaşma və kreditləşmədə vasitəçidir",
        "correct": true
      }
    ]
  },
  {
    "num": 114,
    "question": "Kommersiya bankı …. :",
    "options": [
      {
        "text": "hesablaşma və kreditləşmədə vasitəçidir",
        "correct": true
      },
      {
        "text": "Mərkəzi Bankın struktur bölməsidir",
        "correct": false
      },
      {
        "text": "dövlətin kassiridir",
        "correct": false
      },
      {
        "text": "sığorta şirkətinin agentidir",
        "correct": false
      },
      {
        "text": "bank filiallarına lisenziya verən fiziki şəxsdir",
        "correct": false
      }
    ]
  },
  {
    "num": 115,
    "question": "Mərkəzi Bank kommersiya banklarına lisenziya (xüsusi razılıq) verməkdən imtina edə bilərmi?",
    "options": [
      {
        "text": "səbəblər göstərilməklə imtina edə bilər",
        "correct": true
      },
      {
        "text": "imtina edə bilməz",
        "correct": false
      },
      {
        "text": "1 illiyinə imtina edə bilər",
        "correct": false
      },
      {
        "text": "kommersiya bankı kredit faizini ödəyirsə imtina edə bilməz",
        "correct": false
      },
      {
        "text": "Milli Məclisin qərarı ilə imtina edə bilər",
        "correct": false
      }
    ]
  },
  {
    "num": 116,
    "question": "Banknotdur:",
    "options": [
      {
        "text": "dövlət qiymətli kağızları",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın kağız pul formasında tədavülə buraxdığı pul nişanları",
        "correct": true
      },
      {
        "text": "bankın sadə vekseli",
        "correct": false
      },
      {
        "text": "bankın köçürmə vekseli",
        "correct": false
      },
      {
        "text": "sertifikatlı banknotlar",
        "correct": false
      }
    ]
  },
  {
    "num": 117,
    "question": "Pul hesablaşmaları başlıca olaraq hansı dövriyyəyə əsaslanmalıdır:",
    "options": [
      {
        "text": "nağdsız",
        "correct": true
      },
      {
        "text": "nağd",
        "correct": false
      },
      {
        "text": "uzunmüddətli pul dövriyyəsinə",
        "correct": false
      },
      {
        "text": "qarşılıqlı dövriyyəyə",
        "correct": false
      },
      {
        "text": "fasiləsiz",
        "correct": false
      }
    ]
  },
  {
    "num": 118,
    "question": "Xidmət göstərdikləri ərazilərə görə banklar ayrılır:",
    "options": [
      {
        "text": "ştatlar üzrə banklara",
        "correct": false
      },
      {
        "text": "yerli banklara, regional banklara milli banklar, beynəlxalq banklara",
        "correct": true
      },
      {
        "text": "yalnız rayon banklarına",
        "correct": false
      },
      {
        "text": "yalnız şəhərdaxili banklara",
        "correct": false
      },
      {
        "text": "qarışıq banklar, kəndlərarası banklara",
        "correct": false
      }
    ]
  },
  {
    "num": 119,
    "question": "Tədavül xərclərinə qənaət etmək, kreditin ....:",
    "options": [
      {
        "text": "faizidir",
        "correct": false
      },
      {
        "text": "sənədidir",
        "correct": false
      },
      {
        "text": "mahiyyətidir",
        "correct": false
      },
      {
        "text": "müqaviləsidir",
        "correct": false
      },
      {
        "text": "funksiyasıdır",
        "correct": true
      }
    ]
  },
  {
    "num": 120,
    "question": "AZİPS (Real Vaxt Rejimində Banklararası Milli Hesablaşmalar Sistemi) yaranıb:",
    "options": [
      {
        "text": "2020",
        "correct": false
      },
      {
        "text": "2008",
        "correct": false
      },
      {
        "text": "2007",
        "correct": false
      },
      {
        "text": "2001",
        "correct": true
      },
      {
        "text": "2025",
        "correct": false
      }
    ]
  },
  {
    "num": 121,
    "question": "Elektron hesablaşmaları həyata keçirmək üçün istifadə edilən texniki vasitədir:",
    "options": [
      {
        "text": "komisyon kartı",
        "correct": false
      },
      {
        "text": "etibarlı kart",
        "correct": false
      },
      {
        "text": "sənəd kartı",
        "correct": false
      },
      {
        "text": "klassik kart",
        "correct": false
      },
      {
        "text": "plastik kart",
        "correct": true
      }
    ]
  },
  {
    "num": 122,
    "question": "Qiymətli kağızların geniş yayılmış formalarından biri hesab olunur:",
    "options": [
      {
        "text": "əsas vəsaitlər",
        "correct": false
      },
      {
        "text": "şəxsi vəsait",
        "correct": false
      },
      {
        "text": "cəlb olunmuş vəsait",
        "correct": false
      },
      {
        "text": "istiqraz",
        "correct": true
      },
      {
        "text": "xüsusi kapital",
        "correct": false
      }
    ]
  },
  {
    "num": 123,
    "question": "Bank krediti, istehlak krediti, ipoteka krediti, beynəlxalq kredit və s. kreditin .....:",
    "options": [
      {
        "text": "formalarıdır",
        "correct": true
      },
      {
        "text": "sənədidir",
        "correct": false
      },
      {
        "text": "quruluşudur",
        "correct": false
      },
      {
        "text": "əsasıdır",
        "correct": false
      },
      {
        "text": "müddətidir",
        "correct": false
      }
    ]
  },
  {
    "num": 124,
    "question": "Uzunmüddətli vəsait qoyuluşudur:",
    "options": [
      {
        "text": "mənfəət",
        "correct": false
      },
      {
        "text": "qiymətli metallar",
        "correct": false
      },
      {
        "text": "investisiya",
        "correct": true
      },
      {
        "text": "valyuta",
        "correct": false
      },
      {
        "text": "birja",
        "correct": false
      }
    ]
  },
  {
    "num": 125,
    "question": "Forfeytinq və trast kredit təşkilatlarının ...... əməliyyatlarıdır:",
    "options": [
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "valyuta",
        "correct": false
      },
      {
        "text": "ipoteka",
        "correct": false
      },
      {
        "text": "vasitəçilik",
        "correct": true
      },
      {
        "text": "sənəd dövriyyəsi",
        "correct": false
      }
    ]
  },
  {
    "num": 126,
    "question": "Kassa əməliyyatlarına aid gün ərzində rəsmiləşdirilmiş sənəd hesab olunur:",
    "options": [
      {
        "text": "məxfi sənədlər",
        "correct": false
      },
      {
        "text": "təsərrüfat sənədləri",
        "correct": false
      },
      {
        "text": "debet sənədləri",
        "correct": false
      },
      {
        "text": "kassa sənədləri",
        "correct": true
      },
      {
        "text": "lazımsız sənədlər",
        "correct": false
      }
    ]
  },
  {
    "num": 127,
    "question": "Mərkəzi Bankın kapital ehtiyatı hansı mənbə hesabına formalaşır:",
    "options": [
      {
        "text": "kommersiya banklarının mənfəəti hesabına",
        "correct": false
      },
      {
        "text": "büdcə vəsaitlərinin mənfəəti hesabına",
        "correct": false
      },
      {
        "text": "BOKT (Bank Olmayan Kredit Təşkilatılarının) mənfəəti hesabına",
        "correct": false
      },
      {
        "text": "Banklar Assosiasiyasının mənfəəti hesabına",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın illik mənfəətindən ayırmalar hesabına",
        "correct": true
      }
    ]
  },
  {
    "num": 128,
    "question": "Mərkəzi Bank müflis ola bilərmi?",
    "options": [
      {
        "text": "ola bilər",
        "correct": false
      },
      {
        "text": "müştərilərin qərarı ilə müflis ola bilər",
        "correct": false
      },
      {
        "text": "Statistika Komitəsinin razılığı ilə müflis ola bilər",
        "correct": false
      },
      {
        "text": "ola bilməz",
        "correct": true
      },
      {
        "text": "lisenziyası ləğv edilə bilər",
        "correct": false
      }
    ]
  },
  {
    "num": 129,
    "question": "\"Mərkəzi Bank Haqqında\" redaksiyada olan son Qanun qüvvəyə minmişdir :",
    "options": [
      {
        "text": "2014",
        "correct": false
      },
      {
        "text": "2022",
        "correct": false
      },
      {
        "text": "2020",
        "correct": false
      },
      {
        "text": "2004",
        "correct": true
      },
      {
        "text": "2025",
        "correct": false
      }
    ]
  },
  {
    "num": 130,
    "question": "\"Banklar Haqqında\"  redaksiyada olan son  Qanun qüvvəyə minmişdir :",
    "options": [
      {
        "text": "2006",
        "correct": false
      },
      {
        "text": "2016",
        "correct": false
      },
      {
        "text": "2025",
        "correct": false
      },
      {
        "text": "2004",
        "correct": true
      },
      {
        "text": "2024",
        "correct": false
      }
    ]
  },
  {
    "num": 131,
    "question": "Əməliyyat gününün axşamı nağd pul və digər qiymətlilərin qəbulunu həyata keçirən kassadır:",
    "options": [
      {
        "text": "səhər kassası",
        "correct": false
      },
      {
        "text": "bank kassası",
        "correct": false
      },
      {
        "text": "sistem kassası",
        "correct": false
      },
      {
        "text": "axşam kassası",
        "correct": true
      },
      {
        "text": "gündüz kassası",
        "correct": false
      }
    ]
  },
  {
    "num": 132,
    "question": "Kassirin iştirakı olmadan nağd pulların verilməsi və qəbul edilməsi üçün istifadə edilən avtomat qurğudur:",
    "options": [
      {
        "text": "pul sayan qurğu",
        "correct": false
      },
      {
        "text": "bankın pul sayğacı",
        "correct": false
      },
      {
        "text": "bankın pul sayan aparatı",
        "correct": false
      },
      {
        "text": "bankomat",
        "correct": true
      },
      {
        "text": "kassirin pul sayan aparatı",
        "correct": false
      }
    ]
  },
  {
    "num": 133,
    "question": "Müştərilərin kassa əməliyyatlarını həyata keçirən şəxsdir:",
    "options": [
      {
        "text": "mühafizəçi",
        "correct": false
      },
      {
        "text": "inkasator",
        "correct": false
      },
      {
        "text": "mühasib",
        "correct": false
      },
      {
        "text": "baş mühasib",
        "correct": false
      },
      {
        "text": "kassir",
        "correct": true
      }
    ]
  },
  {
    "num": 134,
    "question": "Vasitəçilik əməliyyatlarına görə banklar müştərilərdən alır:",
    "options": [
      {
        "text": "rüblərə bölünən haqq",
        "correct": false
      },
      {
        "text": "haqq almırlar",
        "correct": false
      },
      {
        "text": "kredit haqqı",
        "correct": false
      },
      {
        "text": "müştərək haqq",
        "correct": false
      },
      {
        "text": "komisyon haqq",
        "correct": true
      }
    ]
  },
  {
    "num": 135,
    "question": "Müştərinin tapşırığına əsasən əmlakın etibarlı idarə edilməsi ...... əməliyyatıdır:",
    "options": [
      {
        "text": "menecment",
        "correct": false
      },
      {
        "text": "kredit",
        "correct": false
      },
      {
        "text": "debet",
        "correct": false
      },
      {
        "text": "trast",
        "correct": true
      },
      {
        "text": "audit",
        "correct": false
      }
    ]
  },
  {
    "num": 136,
    "question": "Maliyyə və operativ (əməliyyat) lizinq, lizinqin ....:",
    "options": [
      {
        "text": "mahiyyətidir",
        "correct": false
      },
      {
        "text": "formalarıdır",
        "correct": true
      },
      {
        "text": "məqsədidir",
        "correct": false
      },
      {
        "text": "dövriyyəsidir",
        "correct": false
      },
      {
        "text": "sənədləridir",
        "correct": false
      }
    ]
  },
  {
    "num": 137,
    "question": "Lizinq, faktorinq, forfeytinq, trast əməliyyatları kredit təşkilatlarının ...... əməliyyatlarıdır:",
    "options": [
      {
        "text": "investisiya",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "klirinq",
        "correct": false
      },
      {
        "text": "vasitəçilik",
        "correct": true
      },
      {
        "text": "sığorta",
        "correct": false
      }
    ]
  },
  {
    "num": 138,
    "question": "Azərbaycan Respublikasının valyutasına aiddir:",
    "options": [
      {
        "text": "ingilis funt- sterlinqi",
        "correct": false
      },
      {
        "text": "dövriyyədə olan Türk lirəsi",
        "correct": false
      },
      {
        "text": "dövriyyədə olan və dövriyyədən çıxarılan Mərkəzi Bankın qəpik və manatları",
        "correct": true
      },
      {
        "text": "dövriyyədə olan sənədlər",
        "correct": false
      },
      {
        "text": "dövriyyədə olan qiymətli metallar",
        "correct": false
      }
    ]
  },
  {
    "num": 139,
    "question": "11 iyul 2008-ci ildə yaranıb:",
    "options": [
      {
        "text": "FES (Federal Ehtiyat Sistemi)",
        "correct": false
      },
      {
        "text": "HÖP (Hökümət Ödəniş Portalı)",
        "correct": false
      },
      {
        "text": "SWİFT( Ümumdünya Banklararası Maliyyə Telekommunikasiya Sistemi)",
        "correct": false
      },
      {
        "text": "KÖMİS (Kütləvi Ödənişlər üzrə Mərkəzləşdirilmiş İnformasiya Sistemi)",
        "correct": true
      },
      {
        "text": "XÖHKS (Xırda Ödənişlər üzrə Hesablaşma Klirinq Sistemi)",
        "correct": false
      }
    ]
  },
  {
    "num": 140,
    "question": "Ödəniş sistemidir:",
    "options": [
      {
        "text": "depozit sistemi",
        "correct": false
      },
      {
        "text": "BVF (Beynəlxalq Valyuta Fondu)",
        "correct": false
      },
      {
        "text": "FES (Federal Ehtiyat Sistemi)",
        "correct": false
      },
      {
        "text": "AZİPS (Real Vaxt Rejimində Banklararası Milli Hesablaşmalar Sistemi) , XÖHKS (Xırda Ödənişlər üzrə Hesablaşma Klirinq Sistemi)",
        "correct": true
      },
      {
        "text": "kredit sistemi, pul sistemi",
        "correct": false
      }
    ]
  },
  {
    "num": 141,
    "question": "Nağdsız hesablaşma üsuludur:",
    "options": [
      {
        "text": "subhesab",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "trast",
        "correct": false
      },
      {
        "text": "klirinq",
        "correct": true
      },
      {
        "text": "sığorta",
        "correct": false
      }
    ]
  },
  {
    "num": 142,
    "question": "Borc öhdəliyi hesab olunur:",
    "options": [
      {
        "text": "valyuta",
        "correct": false
      },
      {
        "text": "dövriyyə sənədi",
        "correct": false
      },
      {
        "text": "lisenziya",
        "correct": false
      },
      {
        "text": "akkreditiv",
        "correct": false
      },
      {
        "text": "veksel",
        "correct": true
      }
    ]
  },
  {
    "num": 143,
    "question": "Kredit təşkilatlarının xüsusi kapitalının funksiyalarını göstərin:",
    "options": [
      {
        "text": "nəzarət, monitorinq",
        "correct": false
      },
      {
        "text": "depozit, tənzimlənmə",
        "correct": false
      },
      {
        "text": "pul vəsaiti, depozit",
        "correct": false
      },
      {
        "text": "müdafiə, operativ, tənzimləmə",
        "correct": true
      },
      {
        "text": "kredit, faktorinq",
        "correct": false
      }
    ]
  },
  {
    "num": 144,
    "question": "Kredit təşkilatlarının faiz dərəcələrinin müəyyən edilməsində həlledici rola malikdir:",
    "options": [
      {
        "text": "Audit komitəsi",
        "correct": false
      },
      {
        "text": "Direktor müavini",
        "correct": false
      },
      {
        "text": "Baş mühasibin müavini",
        "correct": false
      },
      {
        "text": "Müşahidə Şurası",
        "correct": true
      },
      {
        "text": "Baş mühasib",
        "correct": false
      }
    ]
  },
  {
    "num": 145,
    "question": "Kredit təşkilatlarına Mərkəzi Bank lisenziyanı (xüsusi razılıq) verir:",
    "options": [
      {
        "text": "lisenziyanın müddəti 15 ildir",
        "correct": false
      },
      {
        "text": "lisenziyanı 7 il müddətinə verir",
        "correct": false
      },
      {
        "text": "lisenziyanın müddəti 3 il olur",
        "correct": false
      },
      {
        "text": "müddətsiz",
        "correct": true
      },
      {
        "text": "Mərkəzi Bank kredit təşkilatlarına lisenziya vermir",
        "correct": false
      }
    ]
  },
  {
    "num": 146,
    "question": "Mərkəzi Bank:",
    "options": [
      {
        "text": "manatın xarici valyutalara nisbətdə rəsmi məzənnəsini müəyyən və elan etmək Mərkəzi Bankın lisenziyavermə əməliyyatıdır",
        "correct": false
      },
      {
        "text": "manatın xarici valyutalara nisbətdə rəsmi məzənnəsini müəyyən və elan etmək Mərkəzin Bankın fəaliyyətinə aid deyil",
        "correct": false
      },
      {
        "text": "manatın xarici valyutalara nisbətdə rəsmi məzənnəsini müəyyən və elan etmək Mərkəzin Bankın səlahiyyətinə aid deyil",
        "correct": false
      },
      {
        "text": "manatın xarici valyutalara nisbətdə rəsmi məzənnəsini müəyyən və elan edir",
        "correct": true
      },
      {
        "text": "manatın xarici valyutalara nisbətdə rəsmi məzənnəsini müəyyən və elan etmək Mərkəzin Bankın iş prinspinə aid deyil",
        "correct": false
      }
    ]
  },
  {
    "num": 147,
    "question": "Azərbaycan Respublikasının mənafeyini təmsil edir, beynəlxalq kredit təşkilatlarının fəaliyyətində iştirak edir:",
    "options": [
      {
        "text": "kredit büroları",
        "correct": false
      },
      {
        "text": "kredit təşkilatları",
        "correct": false
      },
      {
        "text": "bankların nümayəndəlikləri",
        "correct": false
      },
      {
        "text": "bankların filialları",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      }
    ]
  },
  {
    "num": 148,
    "question": "1992-ci il 7 avqust tarixində ...... ilk Qanun qəbul olunmuşdur:",
    "options": [
      {
        "text": "\"BOKT-lar (Bank Olmayan Kredit Təşkilatı) Haqqında\" Qanun",
        "correct": false
      },
      {
        "text": "\"Sığorta fəaliyyəti Haqqında\" Qanun",
        "correct": false
      },
      {
        "text": "\"Depozit Sistemi Haqqında\" Qanun",
        "correct": false
      },
      {
        "text": "\"Banklar və bank fəaliyyəti Haqqında\" Qanun",
        "correct": true
      },
      {
        "text": "\"Qiymətli Kağızlar Haqqında\" Qanun",
        "correct": false
      }
    ]
  },
  {
    "num": 149,
    "question": "Nizamnamə kapitalı 1 milyon manat olan kredit təşkilatıdır:",
    "options": [
      {
        "text": "XÖHKS (Xırda Ödənişlər üzrə  Hesablaşma Klirinq Sistemi)",
        "correct": false
      },
      {
        "text": "KÖMİS (Kütləvi Ödənişlər üzrə Mərkəzləşdirilmiş İnformasiya Sistemi)",
        "correct": false
      },
      {
        "text": "BOKT (Bank Olmayan Kredit Təşkilatı)",
        "correct": true
      },
      {
        "text": "BVF (Beynəlxalq Valyuta Fondu)",
        "correct": false
      },
      {
        "text": "FES (Federal Ehtiyat Sistemi)",
        "correct": false
      }
    ]
  },
  {
    "num": 150,
    "question": "Bank lisenziyasına malik bir və ya bir neçə törəmə bankı olan, fəaliyyəti baş ofisin yerləşdiyi ölkənin bank tənzimlənməsi orqanları tərəfindən tənzimlənən və nəzarət olunan şirkətdir:",
    "options": [
      {
        "text": "Depozit şirkətləri",
        "correct": false
      },
      {
        "text": "Sığorta şirkəti",
        "correct": false
      },
      {
        "text": "İnvestisiya şirkəti",
        "correct": false
      },
      {
        "text": "Bank Holdinq şirkəti",
        "correct": true
      },
      {
        "text": "Müəssisə və şirkətlər",
        "correct": false
      }
    ]
  },
  {
    "num": 151,
    "question": "Pul-kredit tənzimləyicisidir:",
    "options": [
      {
        "text": "İxtisaslaşmış banklar",
        "correct": false
      },
      {
        "text": "Universal banklar",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "Bank Holdinq şirkətləri",
        "correct": false
      },
      {
        "text": "BOKT-lar (Bank Olmayan Kredit Təşkilatı)",
        "correct": false
      }
    ]
  },
  {
    "num": 152,
    "question": "Valyuta məhdudiyyətlərini tətbiq edir:",
    "options": [
      {
        "text": "Sığorta şirkətləri",
        "correct": false
      },
      {
        "text": "Kredit təşkilatları",
        "correct": false
      },
      {
        "text": "Depozit banklar",
        "correct": false
      },
      {
        "text": "Səhmdar banklar",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      }
    ]
  },
  {
    "num": 153,
    "question": "Kommersiya banklarının öz müştərilərinə (fiziki və hüquqi şəxslərə) göstərdiyi vasitəçilik əməliyyatıdır:",
    "options": [
      {
        "text": "kredit",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "əmtəə",
        "correct": false
      },
      {
        "text": "trast",
        "correct": true
      },
      {
        "text": "klirinq",
        "correct": false
      }
    ]
  },
  {
    "num": 154,
    "question": "Pul dövriyyəsində aşağıdakı hansı növ pul nişanlarından istifadə edilir:",
    "options": [
      {
        "text": "sintetik pullardan",
        "correct": false
      },
      {
        "text": "lazımsız pullardan",
        "correct": false
      },
      {
        "text": "yalnız banknot pullardan",
        "correct": false
      },
      {
        "text": "yalnız xəzinədarlıq biletlərindən",
        "correct": false
      },
      {
        "text": "banknot, metal pullardan",
        "correct": true
      }
    ]
  },
  {
    "num": 155,
    "question": "Beynəlxalq kredit verilir:",
    "options": [
      {
        "text": "beynəlxalq kredit verilmir",
        "correct": false
      },
      {
        "text": "yalnız ikinci ölkənin valyutasında",
        "correct": false
      },
      {
        "text": "yalnız kredit alan ölkənin valyutasında",
        "correct": false
      },
      {
        "text": "kreditor ölkəsinin, borcalanın ölkəsinin, üçüncü ölkənin valyutalarında və ya beynəlxalq pul vahidlərində",
        "correct": true
      },
      {
        "text": "yalnız kredit verən ölkənin valyutasında",
        "correct": false
      }
    ]
  },
  {
    "num": 156,
    "question": "Azərbaycanın müasir Bank Sistemi …. tiplidir:",
    "options": [
      {
        "text": "keçid",
        "correct": false
      },
      {
        "text": "bazar",
        "correct": true
      },
      {
        "text": "bölüşdürücü",
        "correct": false
      },
      {
        "text": "nəzarət",
        "correct": false
      },
      {
        "text": "mərkəzləşmiş",
        "correct": false
      }
    ]
  },
  {
    "num": 157,
    "question": "Kommersiya bankı ..........funksiyasını yerinə yetirir:",
    "options": [
      {
        "text": "audit orqanının",
        "correct": false
      },
      {
        "text": "bank nəzarəti orqanının",
        "correct": false
      },
      {
        "text": "hökümətin xəzinadarı",
        "correct": false
      },
      {
        "text": "maliyyə vasitəçisi",
        "correct": true
      },
      {
        "text": "son instansiya kreditoru",
        "correct": false
      }
    ]
  },
  {
    "num": 158,
    "question": "Kredit təşkilatı yaradılarkən təsisçilər nizamnamə kapitalına köçürə bilərlər:",
    "options": [
      {
        "text": "kredit faizini",
        "correct": false
      },
      {
        "text": "yalnız qeyri-pul formasında olan əmtəələri",
        "correct": false
      },
      {
        "text": "yalnız pul vəsaitlərini",
        "correct": true
      },
      {
        "text": "yalnız uçot məlumatlarını",
        "correct": false
      },
      {
        "text": "yalnız sənədləri",
        "correct": false
      }
    ]
  },
  {
    "num": 159,
    "question": "İxtisaslaşma səviyyəsinə görə banklar ....... bölünür:",
    "options": [
      {
        "text": "dövlət, səhmdar, xüsusi, özəl və qarışıq banklara",
        "correct": false
      },
      {
        "text": "filialsız banklara və çoxfiliallı banklara",
        "correct": false
      },
      {
        "text": "regional, regionlararası, milli və beynəlxalq banklara",
        "correct": false
      },
      {
        "text": "universal və ixtisaslaşmış banklara",
        "correct": true
      },
      {
        "text": "milli və xarici banklara",
        "correct": false
      }
    ]
  },
  {
    "num": 160,
    "question": "............ kommersiya bankının funksiyasıdır:",
    "options": [
      {
        "text": "kağız pulların emissiyası",
        "correct": false
      },
      {
        "text": "kredit təşkilatlarının fəaliyyətinə nəzarət",
        "correct": false
      },
      {
        "text": "pul-kredit siyasətini həyata keçirmək",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın kreditləşdirilməsi",
        "correct": false
      },
      {
        "text": "müştərilərə hesablaşma kassa xidmətlərinin göstərilməsi",
        "correct": true
      }
    ]
  },
  {
    "num": 161,
    "question": "Rəqəmsal bankların strateji istiqamətidir:",
    "options": [
      {
        "text": "ödəniş sistemlərinin azalması",
        "correct": false
      },
      {
        "text": "rəqəmsal ödəniş infrastrukturunun əhatə dairəsinin genişləndirilməsi",
        "correct": true
      },
      {
        "text": "ödəniş sisteminin bloklanması",
        "correct": false
      },
      {
        "text": "ödəniş infrastrukurunun mexanikləşdirilməsi",
        "correct": false
      },
      {
        "text": "ödəniş sisteminin uyğunlaşdırılması",
        "correct": false
      }
    ]
  },
  {
    "num": 162,
    "question": "Qaytarılmaq kreditin....:",
    "options": [
      {
        "text": "nüfuzudur",
        "correct": false
      },
      {
        "text": "formasıdır",
        "correct": false
      },
      {
        "text": "prinsipidir",
        "correct": true
      },
      {
        "text": "funksiyasıdır",
        "correct": false
      },
      {
        "text": "növüdür",
        "correct": false
      }
    ]
  },
  {
    "num": 163,
    "question": "Mərkəzi Bankın “uçot dərəcəsi”……deməkdir:",
    "options": [
      {
        "text": "Mərkəz Bankın kommersiya banklarına verdiyi kreditə görə faiz dərəcəsi",
        "correct": true
      },
      {
        "text": "qiymətli kağızların girovu zamanı diskont dərəcəsi",
        "correct": false
      },
      {
        "text": "problemli kreditlərə görə faiz dərəcəsi",
        "correct": false
      },
      {
        "text": "məcburi ehtiyatların müəyyən edilməsi",
        "correct": false
      },
      {
        "text": "kommersiya banklarının ssuda faizinin məhdudlaşdırılması",
        "correct": false
      }
    ]
  },
  {
    "num": 164,
    "question": "Valyuta siyasətini həyata keçirən və müəyyən edən orqan.......:",
    "options": [
      {
        "text": "Milli Depozit Sistemidir",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatıdır (BOKT)",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankdır",
        "correct": true
      },
      {
        "text": "kommersiya banklarıdır",
        "correct": false
      },
      {
        "text": "sığorta şirkətləridir",
        "correct": false
      }
    ]
  },
  {
    "num": 165,
    "question": "Kredit təşkilatının nizamnamə kapitalında dəyişiklik ... edilir:",
    "options": [
      {
        "text": "İdarə Heyətinin qərarı ilə",
        "correct": false
      },
      {
        "text": "Muşahidə Şurasının qərarı ilə",
        "correct": false
      },
      {
        "text": "Səhmdarların Ümumi Yığıncağının qərarı ilə",
        "correct": true
      },
      {
        "text": "Auditorlar Palatasının qərarı ilə",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyinin razılığı ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 166,
    "question": "Lizinq əməliyyatında iştirak edə bilər:",
    "options": [
      {
        "text": "lisenziyası (xüsusi icazə) olmayan banklar",
        "correct": false
      },
      {
        "text": "lizinq alan istənilən hüquqi və fiziki şəxs",
        "correct": true
      },
      {
        "text": "hüquqi şəxs olan kredit göndərən",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": false
      },
      {
        "text": "Gömrük Komitəsinin lisenziyasını alan banklar",
        "correct": false
      }
    ]
  },
  {
    "num": 167,
    "question": "Xidmət göstərdiyi əraziyə görə banklar bölünürlər:",
    "options": [
      {
        "text": "bir və iki pilləli banklara",
        "correct": false
      },
      {
        "text": "xırda,orta,iri banklara",
        "correct": false
      },
      {
        "text": "universal və ixtisaslaşmış banklara",
        "correct": false
      },
      {
        "text": "filialsız və çox filiallı banklara",
        "correct": false
      },
      {
        "text": "regional, beynəlxalq banklara",
        "correct": true
      }
    ]
  },
  {
    "num": 168,
    "question": "Banklarda cəlb olunmuş vəsaitlər hansı əməliyyatlar hesabına səfərbər edilir:",
    "options": [
      {
        "text": "bankın vasitəçilik əməliyyatları",
        "correct": false
      },
      {
        "text": "bankın hesablaşma əməliyyatları",
        "correct": false
      },
      {
        "text": "bankın aktiv əməliyyatları",
        "correct": false
      },
      {
        "text": "bankın passiv əməliyyatları",
        "correct": true
      },
      {
        "text": "bankın kredit əməliyyatları",
        "correct": false
      }
    ]
  },
  {
    "num": 169,
    "question": "Hüquqi şəxs kimi bankın malik olduğu kapitalın pul ilə ifadəsi:",
    "options": [
      {
        "text": "nizamnamə fondu adlanır",
        "correct": true
      },
      {
        "text": "yığım fondu adlanır",
        "correct": false
      },
      {
        "text": "ehtiyat fondu adlanır",
        "correct": false
      },
      {
        "text": "dəyən zərərin ödənilməsi üçün olan vəsaitlər adlanır",
        "correct": false
      },
      {
        "text": "tənzimləmə fondu adlanır",
        "correct": false
      }
    ]
  },
  {
    "num": 170,
    "question": "Kreditə olan tələbin artması faiz dərəcəsini:",
    "options": [
      {
        "text": "artırır",
        "correct": true
      },
      {
        "text": "üzən məzənnə ilə artırır",
        "correct": false
      },
      {
        "text": "ədədi silsilə ilə azaldır",
        "correct": false
      },
      {
        "text": "həndəsi silsilə ilə bərabərləşdirir",
        "correct": false
      },
      {
        "text": "azaldır",
        "correct": false
      }
    ]
  },
  {
    "num": 171,
    "question": "Aktiv əməliyyatlar bankların ........artırır?",
    "options": [
      {
        "text": "statusunu",
        "correct": false
      },
      {
        "text": "gəlirini",
        "correct": true
      },
      {
        "text": "lisenziyanın ləğv edilməsi təhlükəsini",
        "correct": false
      },
      {
        "text": "xərcini",
        "correct": false
      },
      {
        "text": "iflas olmasını",
        "correct": false
      }
    ]
  },
  {
    "num": 172,
    "question": "Mərkəzi Bankın aktiv əməliyyatıdır:",
    "options": [
      {
        "text": "dövlətin qiymətli kağızlarına qoyuluşlar",
        "correct": true
      },
      {
        "text": "əmanətlərə görə faizlər ödəmək",
        "correct": false
      },
      {
        "text": "depozit cəlb etmək",
        "correct": false
      },
      {
        "text": "istehlak əməliyyatlarını həyata keçirmək",
        "correct": false
      },
      {
        "text": "əhalinin əmanətlərini qaytarmaq",
        "correct": false
      }
    ]
  },
  {
    "num": 173,
    "question": "Mərkəzi Bankın kapitalı ibarətdir:",
    "options": [
      {
        "text": "Mərkəzi Bankın kapital ehtiyatından və verdiyi lisenziyaların sayından",
        "correct": false
      },
      {
        "text": "dövlət büdcəsindən verilən vəsaitdən",
        "correct": false
      },
      {
        "text": "nizamnamə fondu və kapital ehtiyatlarından",
        "correct": true
      },
      {
        "text": "yalnız ianə kapitalından",
        "correct": false
      },
      {
        "text": "verdiyi kreditlərə görə faizlərdən",
        "correct": false
      }
    ]
  },
  {
    "num": 174,
    "question": "Kommersiya banklarının fəaliyyətinin təhlilində xüsusi əhəmiyyətə malikdir:",
    "options": [
      {
        "text": "milli Məclisin Hesabatları",
        "correct": false
      },
      {
        "text": "auditorlar Palatasının Hesabatları",
        "correct": false
      },
      {
        "text": "əmtəə hesabatları",
        "correct": false
      },
      {
        "text": "mənfəət norması",
        "correct": false
      },
      {
        "text": "maliyyə hesabatları",
        "correct": true
      }
    ]
  },
  {
    "num": 175,
    "question": "Trast əməliyyatlarının sifarışçisi kimlər hesab olunur?",
    "options": [
      {
        "text": "İnvestisiya Təşviqi Fondu",
        "correct": false
      },
      {
        "text": "marketinq sahibiləri",
        "correct": false
      },
      {
        "text": "əmlak sahibləri",
        "correct": true
      },
      {
        "text": "Mərkəzi Bank",
        "correct": false
      },
      {
        "text": "sığortaçılar",
        "correct": false
      }
    ]
  },
  {
    "num": 176,
    "question": "Trast əməliyyatlarının icraçıları kimlərdir?",
    "options": [
      {
        "text": "kreditorlar",
        "correct": false
      },
      {
        "text": "auditolar",
        "correct": false
      },
      {
        "text": "depozitorlar",
        "correct": false
      },
      {
        "text": "etibarlı və peşəkar idarə edənlər",
        "correct": true
      },
      {
        "text": "brokerlər",
        "correct": false
      }
    ]
  },
  {
    "num": 177,
    "question": "Kommersiya banklarının kassa əməliyyatları ......... :",
    "options": [
      {
        "text": "nağd pulların mədaxili və məxaricidir",
        "correct": true
      },
      {
        "text": "AZİPS - əməliyyatıdır",
        "correct": false
      },
      {
        "text": "sənədlərin qeydiyyatdan keçirilməsidir",
        "correct": false
      },
      {
        "text": "pul siyasəti əməliyyatıdır",
        "correct": false
      },
      {
        "text": "faktorinq əməliyyatıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 178,
    "question": "…. banklar öz müştəriləri üçün bütün bank xidmətlərini yerinə yetirir:",
    "options": [
      {
        "text": "investisiya",
        "correct": false
      },
      {
        "text": "innovasiya",
        "correct": false
      },
      {
        "text": "universal",
        "correct": true
      },
      {
        "text": "ixtisaslaşmış",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": false
      }
    ]
  },
  {
    "num": 179,
    "question": "Kreditə xas olan xassəni göstərin:",
    "options": [
      {
        "text": "ödənişli xarakter daşıması",
        "correct": true
      },
      {
        "text": "dəyər xarakterli olması",
        "correct": false
      },
      {
        "text": "funksional xarakterli olması",
        "correct": false
      },
      {
        "text": "uçot xarakterli olması",
        "correct": false
      },
      {
        "text": "əməli xarakter olması",
        "correct": false
      }
    ]
  },
  {
    "num": 180,
    "question": "Bank lisenziyası verilir:",
    "options": [
      {
        "text": "1 illiyinə",
        "correct": false
      },
      {
        "text": "müddətsiz",
        "correct": true
      },
      {
        "text": "8 illiyinə",
        "correct": false
      },
      {
        "text": "3 il müddətinə",
        "correct": false
      },
      {
        "text": "5 illiyinə",
        "correct": false
      }
    ]
  },
  {
    "num": 181,
    "question": "Lizinq kreditinin obyekti kimi çıxış edir:",
    "options": [
      {
        "text": "maliyyə müqaviləsi",
        "correct": false
      },
      {
        "text": "qiymətli kağızlar",
        "correct": false
      },
      {
        "text": "valyuta qiymətliləri",
        "correct": false
      },
      {
        "text": "daşınan əmlak",
        "correct": true
      },
      {
        "text": "uçot sənədləri",
        "correct": false
      }
    ]
  },
  {
    "num": 182,
    "question": "Bank sektorunun məcmu kapitalının strukturu  və dinamikasının təhlili üçün  hansı göstəricilərdən istifadə olunur:",
    "options": [
      {
        "text": "I (əsas) və II (əlavə) dərəcəli kapitaldan",
        "correct": true
      },
      {
        "text": "heç bir kapitaldan istifədə olunmur",
        "correct": false
      },
      {
        "text": "investisiya kapitalından",
        "correct": false
      },
      {
        "text": "ipoteka kreditindən",
        "correct": false
      },
      {
        "text": "bankın əmək haqqlarından",
        "correct": false
      }
    ]
  },
  {
    "num": 183,
    "question": "…. görə emissiya, depozit və kommersiya bankları fərqləndirilir:",
    "options": [
      {
        "text": "quruluş formasına",
        "correct": false
      },
      {
        "text": "əməliyyatlarının sayına",
        "correct": false
      },
      {
        "text": "funksional təyinatına",
        "correct": true
      },
      {
        "text": "filialların səviyyəsinə",
        "correct": false
      },
      {
        "text": "mülkiyyət hüquqlarına",
        "correct": false
      }
    ]
  },
  {
    "num": 184,
    "question": "Pul çeki icra üçün qəbul edildikdən  sonra çekin nəzarət hissəsi ......:",
    "options": [
      {
        "text": "müştəriyə qaytarılmır",
        "correct": false
      },
      {
        "text": "vasitəçiyə verilir",
        "correct": false
      },
      {
        "text": "müştəriyə qaytarılır",
        "correct": true
      },
      {
        "text": "depozitə qoyulur",
        "correct": false
      },
      {
        "text": "çeklə birlikdə sığortaçıya göndərilir",
        "correct": false
      }
    ]
  },
  {
    "num": 185,
    "question": "Bank kreditində kreditor kimi çıxış edə bilər:",
    "options": [
      {
        "text": "kredit əməliyyatları aparmaq üçün lisenziyası olan kredit - maliyyə təşkilatları",
        "correct": true
      },
      {
        "text": "müvəqqəti sərbəst pul vəsaitinə malik olan amma lisenziyası olmayan maliyyə idarələri",
        "correct": false
      },
      {
        "text": "yalnız sığorta və investisiya şirkətləri",
        "correct": false
      },
      {
        "text": "poçt müəssisələri",
        "correct": false
      },
      {
        "text": "lizinq şirkətləri",
        "correct": false
      }
    ]
  },
  {
    "num": 186,
    "question": "Bankın iş fəaliyyətində müxtəlif texniki və texnologiyanın istifadəsi ilə əlaqədar risk adlanır:",
    "options": [
      {
        "text": "alternativ risk",
        "correct": false
      },
      {
        "text": "səmərəli risk",
        "correct": false
      },
      {
        "text": "əmək fəaliyyəti riski",
        "correct": false
      },
      {
        "text": "texnoloji risk",
        "correct": true
      },
      {
        "text": "ödəniş riski",
        "correct": false
      }
    ]
  },
  {
    "num": 187,
    "question": "Kredit təşkilatlarına Mərkəzi Bank lisenziyanı (xüsusi razılıq) verir:",
    "options": [
      {
        "text": "5 illiyinə verir",
        "correct": false
      },
      {
        "text": "10 illiyinə",
        "correct": false
      },
      {
        "text": "həm müddətli, həm də müddətsiz",
        "correct": false
      },
      {
        "text": "müddətsiz",
        "correct": true
      },
      {
        "text": "Mərkəzi Bank kredit təşkilatlarına lisenziya vermir",
        "correct": false
      }
    ]
  },
  {
    "num": 188,
    "question": "Kredit təşkilatının fəaliyyət xarakteri haqqında ictimaiyyətdə yayılan neqativ təsəvvürün formalaşması ilə əlaqədar yaranan riskdir:",
    "options": [
      {
        "text": "lisenziyanın itirilmə riski",
        "correct": false
      },
      {
        "text": "işgüzar nüfüzun itirilməsi riski",
        "correct": true
      },
      {
        "text": "nəticələrin pozulma riski",
        "correct": false
      },
      {
        "text": "məsuliyyətə cəlb olunma riski",
        "correct": false
      },
      {
        "text": "likvidliyin itirilmə riski",
        "correct": false
      }
    ]
  },
  {
    "num": 189,
    "question": "Kreditin resurs mənbələri kimi çıxış edir:",
    "options": [
      {
        "text": "yalnız xüsusi vəsaitlər",
        "correct": false
      },
      {
        "text": "yalnız cəlb edilən vəsaitlər",
        "correct": false
      },
      {
        "text": "dolayı vəsaitlər",
        "correct": false
      },
      {
        "text": "faktorinqə verilən vəsaitlər",
        "correct": false
      },
      {
        "text": "xüsusi və cəlb edilən vəsaitlər",
        "correct": true
      }
    ]
  },
  {
    "num": 190,
    "question": "Kredit təşkilatı yaradılır:",
    "options": [
      {
        "text": "ən azı beş hüquqi şəxs tərəfindən",
        "correct": false
      },
      {
        "text": "ən azı üç hüquqi və ya fiziki şəxs tərəfindən",
        "correct": true
      },
      {
        "text": "son kapitalı ödəmək imkanına malik olan fərdi şəxs tərəfindən",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın dəstəyi ilə",
        "correct": false
      },
      {
        "text": "dövlət dəstəyi olan istənilən hüquqi şəxs tərəfindən",
        "correct": false
      }
    ]
  },
  {
    "num": 191,
    "question": "Nağd pul dövriyyəsinin təşkilinin məqsədi:",
    "options": [
      {
        "text": "nağdsız pulların emissiyasını təmin etməkdir",
        "correct": false
      },
      {
        "text": "pul tədavülünün sabitliyini, elastikliyini və dayanıqlığını təmin etməkdir",
        "correct": true
      },
      {
        "text": "nağdsız pul tədavülünü bütövlükdə əvəz etməkdir",
        "correct": false
      },
      {
        "text": "vahid emissiya mərkəzi yaratmaqdır",
        "correct": false
      },
      {
        "text": "nağdsız pulların tətbiqini atrırmaqdır",
        "correct": false
      }
    ]
  },
  {
    "num": 192,
    "question": "Kommersiya bankının şöbəsi kredit verə bilərmi?",
    "options": [
      {
        "text": "şöbə Mərkəzi Bankda razılığı olduqda kredit verə bilər",
        "correct": false
      },
      {
        "text": "şöbə kredit verə bilməz",
        "correct": true
      },
      {
        "text": "şöbənin rəhbərinin icazəsi olduqda kredit verə bilər",
        "correct": false
      },
      {
        "text": "şöbə kredit verə bilər",
        "correct": false
      },
      {
        "text": "şöbədə pul vəsaiti olduqda kredit verə bilər",
        "correct": false
      }
    ]
  },
  {
    "num": 193,
    "question": "Kreditin prinsipidir:",
    "options": [
      {
        "text": "bölüşdürücülük",
        "correct": false
      },
      {
        "text": "nəzarətçilik",
        "correct": false
      },
      {
        "text": "idarəçilik",
        "correct": false
      },
      {
        "text": "sərbəstlik",
        "correct": false
      },
      {
        "text": "faizin ödənilməsi (ödənişlik)",
        "correct": true
      }
    ]
  },
  {
    "num": 194,
    "question": "Təklif edilən ifadələrdən kreditin funksiyasını ayırın:",
    "options": [
      {
        "text": "yenidənbölgü funksiyası",
        "correct": true
      },
      {
        "text": "müvəqqəti azad vəsaitlərin səfərbər olunması və fazilərin hesablanma funksiyası",
        "correct": false
      },
      {
        "text": "vaxtında qaytarılmaq və lisenziya vermək funksiyası",
        "correct": false
      },
      {
        "text": "optimallaşdırma və sistemləşdirmə funksiyası",
        "correct": false
      },
      {
        "text": "təkrar istehsal  funksiyası",
        "correct": false
      }
    ]
  },
  {
    "num": 195,
    "question": "Bank ssudalarının verilməsi hansı sənəd ilə rəsimləşdirilir:",
    "options": [
      {
        "text": "zəmanət və himayədarlıqla",
        "correct": false
      },
      {
        "text": "müştərinin icazəsi ilə",
        "correct": false
      },
      {
        "text": "sənəd dövriyyəsi ilə",
        "correct": false
      },
      {
        "text": "yalnız kredit müqaviləsi ilə",
        "correct": true
      },
      {
        "text": "kreditin ödənilməsi risqinin sığortalanması ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 196,
    "question": "Bank kreditində kreditor kimi çıxış edə bilər:",
    "options": [
      {
        "text": "Banklar Assosiasiyası",
        "correct": false
      },
      {
        "text": "fiziki şəxslər",
        "correct": false
      },
      {
        "text": "Sığorta Təşkilatları",
        "correct": false
      },
      {
        "text": "kredit əməliyyatlarını aparmaq üçün lisenziyası olan kredit-maliyyə təşkilatları",
        "correct": true
      },
      {
        "text": "valyuta mərkəzləri",
        "correct": false
      }
    ]
  },
  {
    "num": 197,
    "question": "Sintetik uçot məlumatlarından istifadə olunur:",
    "options": [
      {
        "text": "ilkin pul hesablaşma sənədlərinin ümumiləşdirilməsində",
        "correct": false
      },
      {
        "text": "bankın daxili fəaliyyəti haqqında hesablaşmaların ümumiləşdirilməsində",
        "correct": false
      },
      {
        "text": "mühasibat hesablarının nəzarətində",
        "correct": false
      },
      {
        "text": "kadrların fəallığının təhlilində",
        "correct": false
      },
      {
        "text": "bank fəaliyyətinin təhlili və idarə olunmasında",
        "correct": true
      }
    ]
  },
  {
    "num": 198,
    "question": "Hazırda manat təmin edilir:",
    "options": [
      {
        "text": "ərazi banklarının bütün aktivləri ilə",
        "correct": false
      },
      {
        "text": "təsərrüfat subyektlərinin əmtəə qiymətlilərinin ehtiyatları ilə",
        "correct": false
      },
      {
        "text": "dövlət büdcəsinin bütün gəlirləri ilə",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın  aktivləri ilə",
        "correct": true
      },
      {
        "text": "xəzinədarlığın mədaxili ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 199,
    "question": "Emissiya və pul tədavülü mexanizmi dedikdə … başa düşülür:",
    "options": [
      {
        "text": "pulların dövriyyəyə buraxılması",
        "correct": true
      },
      {
        "text": "emissiya mərkəzi və ölkənin inkasso xidməti",
        "correct": false
      },
      {
        "text": "pulun hazırlanması texnologiyası",
        "correct": false
      },
      {
        "text": "banknot və xırda pulların kəsilməsi texnologiyasını həyata keçirmək",
        "correct": false
      },
      {
        "text": "ölkənin emissiya mərkəzi və hesablaşma kassa mərkəzi",
        "correct": false
      }
    ]
  },
  {
    "num": 200,
    "question": "Kommersiya banklarının aktiv əməliyyatı..........deməkdir:",
    "options": [
      {
        "text": "bankın yalnız cəlb edilmiş vəsaitlərdən istifadə edilməsi",
        "correct": false
      },
      {
        "text": "faktorinq əməliyyatı deməkdir",
        "correct": false
      },
      {
        "text": "bankın ehtiyat fondundan olan cəlb edilən vəsaitlərdən istifadə edilməsi",
        "correct": false
      },
      {
        "text": "bankın yalnız öz xüsusi vəsaitlərindən cəlb edilməsi",
        "correct": false
      },
      {
        "text": "mənfəət əldə etmək üçün bankın öz xüsusi vəsaitlərindən və cəlb edilmiş vəsaitlərdən istifadə edilməsi",
        "correct": true
      }
    ]
  },
  {
    "num": 201,
    "question": "Valyuta bazarının iştirakçısıdır ........:",
    "options": [
      {
        "text": "lisenziyası olmayan lombardlar",
        "correct": false
      },
      {
        "text": "Pul tədavülü şirkətləri",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın icazəsi ilə bütün sığorta təşkilatları",
        "correct": false
      },
      {
        "text": "valyuta əməliyyatlarını yerinə yetirmək səlahiyyəti olan müvəkkil banklar",
        "correct": true
      },
      {
        "text": "Banklar Assosiasiyasının bütün şöbələri",
        "correct": false
      }
    ]
  },
  {
    "num": 202,
    "question": "Valyuta bazarının subyektlərini göstərin:",
    "options": [
      {
        "text": "lizinq şirkətləri",
        "correct": false
      },
      {
        "text": "Statistika Komitəsi",
        "correct": false
      },
      {
        "text": "trast şirkətləri",
        "correct": false
      },
      {
        "text": "faktorinq firmaları",
        "correct": false
      },
      {
        "text": "banklar və birjalar",
        "correct": true
      }
    ]
  },
  {
    "num": 203,
    "question": "...... əməliyyatları pul siyasətinin əməliyyat hədəflərinin reallaşması məqsədi ilə dövriyyədə olan pul kütləsinin tənzimlənməsi və banklararası pul bazarında faiz dərəcələrinə təsir etmək məqsədi ilə Mərkəzi Bank tərəfindən həyata keçirilir:",
    "options": [
      {
        "text": "investisiya və faktorinq əməliyyatları",
        "correct": false
      },
      {
        "text": "lizinq əməliyyatları",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın valyuta əməliyyatları",
        "correct": false
      },
      {
        "text": "kredit və trast əməliyyatları",
        "correct": false
      },
      {
        "text": "açıq bazar əməliyyatları",
        "correct": true
      }
    ]
  },
  {
    "num": 204,
    "question": "......xarici dövlətlərin hökumətlərinə bank xidmətləri göstərə bilər:",
    "options": [
      {
        "text": "Banklar Assosasiyası",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "Dövlət Statistika Komitəsi",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyi",
        "correct": false
      },
      {
        "text": "İqtisadiyyat Nazirliyi",
        "correct": false
      }
    ]
  },
  {
    "num": 205,
    "question": "Mərkəzi Bankın …. funksiyası banknot buraxılışına inhisardan və ölkədə pul tədavülünün tənzimlənməsindən ibarətdir:",
    "options": [
      {
        "text": "informasiya",
        "correct": false
      },
      {
        "text": "nəzarət",
        "correct": false
      },
      {
        "text": "emissiya",
        "correct": true
      },
      {
        "text": "inflyasiya",
        "correct": false
      },
      {
        "text": "vasitəçilik",
        "correct": false
      }
    ]
  },
  {
    "num": 206,
    "question": "Qanunvericiliyə əsasən Azərbaycan Respublikasının Mərkəzi Bankının Kollegial Orqanı və Ali İdarəetmə Orqanı ….:",
    "options": [
      {
        "text": "İdarə Heyətidir",
        "correct": true
      },
      {
        "text": "bank nəzarəti komitəsidir",
        "correct": false
      },
      {
        "text": "Milli Bank Şurasıdır",
        "correct": false
      },
      {
        "text": "Direktorlar Şurasıdır",
        "correct": false
      },
      {
        "text": "Audit Komitəsidir",
        "correct": false
      }
    ]
  },
  {
    "num": 207,
    "question": "Milli Ödəniş Sisteminin arxitekturasının ikinci mühüm elementi olan Xırda Ödənişlər üzrə Hesablaşma Klirinq Sistemi (XÖHKS) istifadəyə verilmişdir:",
    "options": [
      {
        "text": "2003",
        "correct": false
      },
      {
        "text": "2002",
        "correct": true
      },
      {
        "text": "1990",
        "correct": false
      },
      {
        "text": "2025",
        "correct": false
      },
      {
        "text": "2021",
        "correct": false
      }
    ]
  },
  {
    "num": 208,
    "question": "\"İpoteka Haqqında\" Qanun qəbul edilmişdir:",
    "options": [
      {
        "text": "2024",
        "correct": false
      },
      {
        "text": "2005",
        "correct": true
      },
      {
        "text": "2020",
        "correct": false
      },
      {
        "text": "2023",
        "correct": false
      },
      {
        "text": "2001",
        "correct": false
      }
    ]
  },
  {
    "num": 209,
    "question": "Kredit təşkilatlarının hüquqi statusunu müəyyən edən:",
    "options": [
      {
        "text": "Milli Depozit Sistemi haqqında Qanunvericilikdir",
        "correct": false
      },
      {
        "text": "ölkə parlamentidir",
        "correct": false
      },
      {
        "text": "ölkə Prezidentidir",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankdır",
        "correct": false
      },
      {
        "text": "Banklar haqqında Qanunvericilikdir",
        "correct": true
      }
    ]
  },
  {
    "num": 210,
    "question": "\"Trast\" ifadəsi nə deməkdir:",
    "options": [
      {
        "text": "kredit",
        "correct": false
      },
      {
        "text": "hesablaşma",
        "correct": false
      },
      {
        "text": "qiymətli kağızlar",
        "correct": false
      },
      {
        "text": "etibar etmə",
        "correct": true
      },
      {
        "text": "birja",
        "correct": false
      }
    ]
  },
  {
    "num": 211,
    "question": "Bank menecmentinin əsas prinsiplərindən biridir:",
    "options": [
      {
        "text": "bank texnologiyalarının səmərəsizliyini yoxlamaq",
        "correct": false
      },
      {
        "text": "bank fəaliyyətində nəticələrin göstəricilərinin uçotunu aparmaq",
        "correct": false
      },
      {
        "text": "daxili uçotun vəziyyətini müəyyənləşdirmək",
        "correct": false
      },
      {
        "text": "heyətin səmərəli təşkili və ondan səmərəli istifadə",
        "correct": true
      },
      {
        "text": "bankın hesab planına riayət edilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 212,
    "question": "Depozit, ssuda və banklararası kredit üzrə faizlər… … müəyyənləşdirilir:",
    "options": [
      {
        "text": "iqtisadiyyatın ümumi vəziyyətinə görə",
        "correct": true
      },
      {
        "text": "kredit idarələrinin sayına görə",
        "correct": false
      },
      {
        "text": "lisenziya faizinə görə",
        "correct": false
      },
      {
        "text": "kreditin formalarına görə",
        "correct": false
      },
      {
        "text": "maliyyə təşkilatlarının sayına görə",
        "correct": false
      }
    ]
  },
  {
    "num": 213,
    "question": "Emissiya nədir?",
    "options": [
      {
        "text": "tədavülə pul nişanlarının, qiymətli kağızların  buraxılmasıdır",
        "correct": true
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatlarının (BOKT) fəaliyyətidir",
        "correct": false
      },
      {
        "text": "dövriyyəyə sənədlərin buraxılmasıdır",
        "correct": false
      },
      {
        "text": "kommersiya banklarının vasitəçilik əməliyyatlarıdır",
        "correct": false
      },
      {
        "text": "dövriyyəyə metalların buraxılmasıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 214,
    "question": "Kommersiya bankı bu fəaliyyət ilə məşğul ola bilməz :",
    "options": [
      {
        "text": "vasitəçilik əməliyyatları ilə",
        "correct": false
      },
      {
        "text": "depozit qəbul etmək ilə",
        "correct": false
      },
      {
        "text": "topdan satış ticarət ilə",
        "correct": true
      },
      {
        "text": "kredit vermək ilə",
        "correct": false
      },
      {
        "text": "investisiya fəaliyyəti ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 215,
    "question": "Kommersiya banklarının resurslarını göstərin:",
    "options": [
      {
        "text": "hesabdan silinən vəsaitlər",
        "correct": false
      },
      {
        "text": "yalnız cəlb olunmuş vəsaitlər",
        "correct": false
      },
      {
        "text": "xüsusi kapital və cəlb edilmiş vəsaitlər",
        "correct": true
      },
      {
        "text": "yalnız şəxsi vəsaitlər",
        "correct": false
      },
      {
        "text": "yalnız mənfəətə cəlb olunmuş vəsaitlər",
        "correct": false
      }
    ]
  },
  {
    "num": 216,
    "question": "Azərbaycan Respublikasında ilk milli valyuta nə vaxt tədavülə buraxılıb?",
    "options": [
      {
        "text": "1992-ci ildə",
        "correct": true
      },
      {
        "text": "1993-cü ildə",
        "correct": false
      },
      {
        "text": "1994-cü ildə",
        "correct": false
      },
      {
        "text": "2025-ci ildə",
        "correct": false
      },
      {
        "text": "2024-cü ildə",
        "correct": false
      }
    ]
  },
  {
    "num": 217,
    "question": "….kreditlər hökumətlərarası razılaşmaya əsaslanır:",
    "options": [
      {
        "text": "banklararası",
        "correct": false
      },
      {
        "text": "ipotekada olan",
        "correct": false
      },
      {
        "text": "dövlətlərarası",
        "correct": true
      },
      {
        "text": "kommersiyada olan",
        "correct": false
      },
      {
        "text": "ölkədaxili",
        "correct": false
      }
    ]
  },
  {
    "num": 218,
    "question": "İpoteka kreditində kreditin qaytarılmasına zəmanət kimi çıxış edir:",
    "options": [
      {
        "text": "qiymətli kağızların girovu",
        "correct": false
      },
      {
        "text": "bankın girovu",
        "correct": false
      },
      {
        "text": "mənzilin, yaşayış yerinin girovu",
        "correct": true
      },
      {
        "text": "qiymətli metalların girovu",
        "correct": false
      },
      {
        "text": "sənədlərin girovu",
        "correct": false
      }
    ]
  },
  {
    "num": 219,
    "question": "Veksel əsasən …….. istifadə edilir:",
    "options": [
      {
        "text": "iri maliyyə-ticarət sövdələşmələrinə, topdan satış ticarətə",
        "correct": true
      },
      {
        "text": "bank müqaviləsinə",
        "correct": false
      },
      {
        "text": "fiziki şəxslərə və emissiya banklarına",
        "correct": false
      },
      {
        "text": "bank ticarətinə",
        "correct": false
      },
      {
        "text": "xəzinədarlıq əməliyyatlarına",
        "correct": false
      }
    ]
  },
  {
    "num": 220,
    "question": "Müştərinin cari hesabındaki qalıq nəyi göstərir:",
    "options": [
      {
        "text": "bankın ödəniş qabiliyyətini",
        "correct": false
      },
      {
        "text": "müştərinin sərbəst pul vəsaitlərinin olmasını",
        "correct": true
      },
      {
        "text": "bankın Mərkəzi Banka ödəyəcəyi məbləği",
        "correct": false
      },
      {
        "text": "müştərinin banka borcununun olmamasını",
        "correct": false
      },
      {
        "text": "müştərinin tərəfdaşlarına olan borcunu",
        "correct": false
      }
    ]
  },
  {
    "num": 221,
    "question": "Kommersiya banklarının cəlb etdiyi vəsaitdir.......:",
    "options": [
      {
        "text": "bankın emissiya gəliri",
        "correct": false
      },
      {
        "text": "bölüşdürülməmiş mənfəət",
        "correct": false
      },
      {
        "text": "nizamnamə kapitalı",
        "correct": false
      },
      {
        "text": "ehtiyat fondu",
        "correct": false
      },
      {
        "text": "banklararası kredit",
        "correct": true
      }
    ]
  },
  {
    "num": 222,
    "question": "Kommersiya banklarının pul resurslarının artırılmasına yönəldilən əməliyyatdır:",
    "options": [
      {
        "text": "aktiv əməliyyatlar",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın dövlətə verdiyi kredit əməliyyatları",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatlarının (BOKT) cəlb etdiyi vəsaitlərdə olan əməliyyatlar",
        "correct": false
      },
      {
        "text": "passiv əməliyyatlar",
        "correct": true
      },
      {
        "text": "zərərli əməliyyatlar",
        "correct": false
      }
    ]
  },
  {
    "num": 223,
    "question": "Müştərinin kredit üzrə öz borcunu vaxtında və tam ödəmək qabiliyyətidir.....:",
    "options": [
      {
        "text": "ödəmə qabiliyyətinin olmaması",
        "correct": false
      },
      {
        "text": "hesablaşma qabiliyyətliliyi",
        "correct": false
      },
      {
        "text": "risklilik qabiliyyətliliyi",
        "correct": false
      },
      {
        "text": "ödəmə qabiliyyətinin olması",
        "correct": true
      },
      {
        "text": "mübadilə qabiliyyətliliyi",
        "correct": false
      }
    ]
  },
  {
    "num": 224,
    "question": "Azərbaycan Respublikasının Bank Sistemi neçə pilləlidir?",
    "options": [
      {
        "text": "üç pilləlidir",
        "correct": false
      },
      {
        "text": "pillələrin sayı maliyyə sisteminin inkişaf səviyyəsindən asılıdır",
        "correct": false
      },
      {
        "text": "bir pilləlidir",
        "correct": false
      },
      {
        "text": "üç pilləlidir (banklar, qeyri-bank maliyyə institutları və müxtəlif kompaniyalar)",
        "correct": false
      },
      {
        "text": "iki pilləlidir (Mərkəzi Bank və kredit təşkilatları)",
        "correct": true
      }
    ]
  },
  {
    "num": 225,
    "question": "Kredit təşkilatının filialı hansı əməliyyatları apara bilər?",
    "options": [
      {
        "text": "kredit təşkilatının lisenziyasında göstərilən bütün əməliyyatları",
        "correct": true
      },
      {
        "text": "Mərkəzi Bankın fiziki şəxslərə kreditlərin verilməsi əməliyyatlarını",
        "correct": false
      },
      {
        "text": "lisenziyada nəzərdə tutulmayan əməliyyatları",
        "correct": false
      },
      {
        "text": "heç bir əməliyyatlar apara bilməz",
        "correct": false
      },
      {
        "text": "sənədləşmə əməliyyatlarını",
        "correct": false
      }
    ]
  },
  {
    "num": 226,
    "question": "İpoteka dedikdə nə başa düşülür?",
    "options": [
      {
        "text": "sənədin girov qoyulması",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "vəsaitin girov qoyulması",
        "correct": false
      },
      {
        "text": "mənzillərin, yaşayış sahələrinin girov qoyulması",
        "correct": true
      },
      {
        "text": "faktorinq",
        "correct": false
      }
    ]
  },
  {
    "num": 227,
    "question": "Kommersiya bankının başlıca xüsusiyyətlərindən biri onların …. tipli olmasıdır:",
    "options": [
      {
        "text": "qapalı",
        "correct": false
      },
      {
        "text": "səhmdar",
        "correct": true
      },
      {
        "text": "böhranlı",
        "correct": false
      },
      {
        "text": "sistem əhəmiyyətli",
        "correct": false
      },
      {
        "text": "qarışıq",
        "correct": false
      }
    ]
  },
  {
    "num": 228,
    "question": "Hüquqi və fiziki şəxslər tərəfindən nağdsız hesablaşmalar aşağıdakıların köməyi ilə icra olunur:",
    "options": [
      {
        "text": "bank sənədlərinin",
        "correct": false
      },
      {
        "text": "sığorta təşkilatlarının",
        "correct": false
      },
      {
        "text": "ərazi idarələrinin",
        "correct": false
      },
      {
        "text": "Milli Depozit Sisteminin",
        "correct": false
      },
      {
        "text": "kommersiya banklarının",
        "correct": true
      }
    ]
  },
  {
    "num": 229,
    "question": "Kommersiya bankları müştərilərin hesabları üzrə əməliyyatları nəyə əsasən həyata keçirir:",
    "options": [
      {
        "text": "hesab-qaiməyə əsasən",
        "correct": false
      },
      {
        "text": "uyğunluq sertifikatına əsasən",
        "correct": false
      },
      {
        "text": "hesablaşma sənədlərinə əsasən",
        "correct": true
      },
      {
        "text": "Auditorlar Palatasının verdiyi sənədlərə əsasən",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın verdiyi icazəyə əsasən",
        "correct": false
      }
    ]
  },
  {
    "num": 230,
    "question": "Banklar arasında qarşılıqlı tələblər üzrə hesablaşmalar:",
    "options": [
      {
        "text": "eyni hesablaşma - kassa mərkəzində xidmət göstərən banklar arasında mümkündür",
        "correct": false
      },
      {
        "text": "mümkün deyil",
        "correct": false
      },
      {
        "text": "fiziki şəxslərin icazəsi olmalıdır",
        "correct": false
      },
      {
        "text": "yalnız müxtəlif ərazidə fəaliyyət göstərən banklar arasında mümkündür",
        "correct": false
      },
      {
        "text": "məhdudiyyətsiz mümkündür",
        "correct": true
      }
    ]
  },
  {
    "num": 231,
    "question": "Banklar müştərilərin hesabı üzrə əməliyyatları nəyə əsasən həyata keçirir:",
    "options": [
      {
        "text": "vençur müqaviləsinə əsasən",
        "correct": false
      },
      {
        "text": "hesablaşma sənədlərinə əsasən",
        "correct": true
      },
      {
        "text": "pul hesablaşmalarına əsasən",
        "correct": false
      },
      {
        "text": "banklar arasında razılıq olmalıdır",
        "correct": false
      },
      {
        "text": "müştərilər arasında bağlanan pul vəsaitinə əsasən",
        "correct": false
      }
    ]
  },
  {
    "num": 232,
    "question": "Emissiya bankları kimlərə xidmət göstərir?",
    "options": [
      {
        "text": "bank nümayəndəliklərinə",
        "correct": false
      },
      {
        "text": "bank holdinqlərinə",
        "correct": false
      },
      {
        "text": "trast şirkətlərinə",
        "correct": false
      },
      {
        "text": "sığorta şirkətlərinə",
        "correct": false
      },
      {
        "text": "hökümətə və kredit təşkilatlarına",
        "correct": true
      }
    ]
  },
  {
    "num": 233,
    "question": "Mərkəzi Bankın aktiv əməliyyatlarına aiddir:",
    "options": [
      {
        "text": "hökümətə və banklara verilən kreditlər",
        "correct": true
      },
      {
        "text": "istehlak əməliyyatlarını həyata keçirmək",
        "correct": false
      },
      {
        "text": "əhalinin əmanətlərini qaytarmaq",
        "correct": false
      },
      {
        "text": "əmanətlərə görə faizlər ödəmək",
        "correct": false
      },
      {
        "text": "lisenziya verilməsi əməliyyatları",
        "correct": false
      }
    ]
  },
  {
    "num": 234,
    "question": "Lizinq ifadəsi nədir?",
    "options": [
      {
        "text": "pul vəsaiti",
        "correct": false
      },
      {
        "text": "razılıq",
        "correct": false
      },
      {
        "text": "kredit",
        "correct": false
      },
      {
        "text": "icazə",
        "correct": false
      },
      {
        "text": "daşınan əmlakın icarəsi",
        "correct": true
      }
    ]
  },
  {
    "num": 235,
    "question": "Kommersiya banklarının nizamnamə kapitalı ........ vəsaitdir:",
    "options": [
      {
        "text": "banklararası bazarda əldə olunan",
        "correct": false
      },
      {
        "text": "bankın yarandığı zaman formalaşan ilkin kapitalın minimum miqdarıdır",
        "correct": true
      },
      {
        "text": "bankın balansdan kənar öhdəlikləri olan",
        "correct": false
      },
      {
        "text": "aktiv və passivlərdə olan",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın kommersiya banklarına verdiyi vəsaitdir",
        "correct": false
      }
    ]
  },
  {
    "num": 236,
    "question": "Passiv əməliyyatlar bankın......... formalaşdırır:",
    "options": [
      {
        "text": "statusunu",
        "correct": false
      },
      {
        "text": "əlavə gəlirini",
        "correct": false
      },
      {
        "text": "pulu qiymətdən salır",
        "correct": false
      },
      {
        "text": "xərclərini",
        "correct": true
      },
      {
        "text": "gəlirini",
        "correct": false
      }
    ]
  },
  {
    "num": 237,
    "question": "Kreditin prinsipidir:",
    "options": [
      {
        "text": "borcu saxlamaq",
        "correct": false
      },
      {
        "text": "qaytarılmaq",
        "correct": true
      },
      {
        "text": "bankların əsas əməliyyatları",
        "correct": false
      },
      {
        "text": "bankların passiv əməliyyatları",
        "correct": false
      },
      {
        "text": "borc verməmək",
        "correct": false
      }
    ]
  },
  {
    "num": 238,
    "question": "Pul hesablaşmaları başlıca olaraq hansı dövriyyəyə əsaslanmalıdır:",
    "options": [
      {
        "text": "fasiləsiz",
        "correct": false
      },
      {
        "text": "uzunmüddətli pul dövriyyəsinə",
        "correct": false
      },
      {
        "text": "nağd",
        "correct": false
      },
      {
        "text": "qarşılıqlı dövriyyə",
        "correct": false
      },
      {
        "text": "nağdsız",
        "correct": true
      }
    ]
  },
  {
    "num": 239,
    "question": "Kreditin prinsipidir:",
    "options": [
      {
        "text": "kredit müqaviləsi",
        "correct": false
      },
      {
        "text": "bank hesabı müqaviləsi",
        "correct": false
      },
      {
        "text": "müştərinin vaxtı keçmiş borcunun olması",
        "correct": false
      },
      {
        "text": "qaytarılmaq",
        "correct": true
      },
      {
        "text": "mal-material qiymətliləri",
        "correct": false
      }
    ]
  },
  {
    "num": 240,
    "question": "Banklar funksional səlahiyyət statusuna görə bölünürlər:",
    "options": [
      {
        "text": "regional, regionlararası, beynəlxalq banklara",
        "correct": false
      },
      {
        "text": "açıq və qapalı banklara",
        "correct": false
      },
      {
        "text": "emissiya və kommersiya banklarına",
        "correct": true
      },
      {
        "text": "kicik, orta, iri banklara",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatlarına (BOKT)",
        "correct": false
      }
    ]
  },
  {
    "num": 241,
    "question": "Bank Olmayan Kredit Təşkilatlarının (BOKT)  fəaliyyəti ...... tərəfindən tənzimlənir:",
    "options": [
      {
        "text": "Maliyyə Nazirliyi",
        "correct": false
      },
      {
        "text": "kommersiya bankları",
        "correct": false
      },
      {
        "text": "Banklar Assosasiyası",
        "correct": false
      },
      {
        "text": "Milli Depozit Sistemi",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      }
    ]
  },
  {
    "num": 242,
    "question": "Kreditin funksiyasını göstərin:",
    "options": [
      {
        "text": "vaxta qənaət",
        "correct": false
      },
      {
        "text": "hesablara qənaət",
        "correct": false
      },
      {
        "text": "resursa qənaət",
        "correct": false
      },
      {
        "text": "kapitala qənaət",
        "correct": false
      },
      {
        "text": "tədavül xərclərinə qənaət",
        "correct": true
      }
    ]
  },
  {
    "num": 243,
    "question": "Bank qarşısında öhdəliyin vaxtında və ya tam icra olunmaması nəticəsində yaranan ... riskdir?",
    "options": [
      {
        "text": "kapital riski",
        "correct": false
      },
      {
        "text": "kredit riski",
        "correct": true
      },
      {
        "text": "strateji risk",
        "correct": false
      },
      {
        "text": "valyuta riski",
        "correct": false
      },
      {
        "text": "sənəd riski",
        "correct": false
      }
    ]
  },
  {
    "num": 244,
    "question": "…. banklar öz müştəriləri üçün bütün bank xidmətlərini yerinə yetirir:",
    "options": [
      {
        "text": "səmərəli",
        "correct": false
      },
      {
        "text": "investisiya",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "ixtisaslaşmış",
        "correct": false
      },
      {
        "text": "universal",
        "correct": true
      }
    ]
  },
  {
    "num": 245,
    "question": "Emissiya mexanizmi dedikdə … başa düşülür:",
    "options": [
      {
        "text": "pulun hazırlanması texnologiyası",
        "correct": false
      },
      {
        "text": "emissiya mərkəzi və ölkənin inkasso xidməti",
        "correct": false
      },
      {
        "text": "pulların dövriyyəyə buraxılması",
        "correct": true
      },
      {
        "text": "ölkənin emissiya mərkəzi və hesablaşma kassa mərkəzi",
        "correct": false
      },
      {
        "text": "banknot və xırda pulların kəsilməsi texnologiyasını həyata keçirmək",
        "correct": false
      }
    ]
  },
  {
    "num": 246,
    "question": "Bankların mənafeyini müdafiə etmək üçün yaradılır:",
    "options": [
      {
        "text": "Maliyyə İnstitutları",
        "correct": false
      },
      {
        "text": "kommersiya bankları",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatları (BOKT)",
        "correct": false
      },
      {
        "text": "Auditorlar Palatası",
        "correct": false
      },
      {
        "text": "Banklar Assosiasiyası",
        "correct": true
      }
    ]
  },
  {
    "num": 247,
    "question": "Qiymətli kağızlar bazarı neçə yerə bölünür:",
    "options": [
      {
        "text": "iki yerə: ilkin bazar, ikinci bazar",
        "correct": true
      },
      {
        "text": "iki yerə: ikinci bazar, birja bazarı",
        "correct": false
      },
      {
        "text": "üç yerə:  valyuta bazarı, qiymətli kağızlar bazarı, kredit bazarı",
        "correct": false
      },
      {
        "text": "üç yerə: ikinci bazar, bank bazarı,kredit bazarı",
        "correct": false
      },
      {
        "text": "üç yerə: ilkin bazar, valyuta bazarı, pul bazarı",
        "correct": false
      }
    ]
  },
  {
    "num": 248,
    "question": "Kredit təşkilatının öz öhdəliklərini tam yerinə yetirməməklə əlaqədar itkilərin yaranma riskidir:",
    "options": [
      {
        "text": "fəaliyyət riski",
        "correct": false
      },
      {
        "text": "bazar riski",
        "correct": false
      },
      {
        "text": "likvidlik riski",
        "correct": true
      },
      {
        "text": "əməliyyat riski",
        "correct": false
      },
      {
        "text": "sənəd riski",
        "correct": false
      }
    ]
  },
  {
    "num": 249,
    "question": "Passiv əməliyyatların aparılmasında məqsəd:",
    "options": [
      {
        "text": "xüsusi kapitalın və resursların formalaşmasıdır",
        "correct": true
      },
      {
        "text": "faiz borcunun formalaşmasıdır",
        "correct": false
      },
      {
        "text": "əmtəə borcunun formalaşmasıdır",
        "correct": false
      },
      {
        "text": "son kapitalın formalaşmasıdır",
        "correct": false
      },
      {
        "text": "kapitalın azalmasıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 250,
    "question": "...... ölkədə pul kütləsinin və bank sisteminin likvidliyinin tənzimlənməsində istifadə olunan pul siyasəti alətidir:",
    "options": [
      {
        "text": "bankın rüblük kassasında olan vəsaitlər",
        "correct": false
      },
      {
        "text": "məcburi olmayan ehtiyat norması",
        "correct": false
      },
      {
        "text": "bankın gündəlik kassasında olan vəsaitlər",
        "correct": false
      },
      {
        "text": "məcburi ehtiyat normaları",
        "correct": true
      },
      {
        "text": "Mərkəzi Bankın kommersiya banklarına verdiyi lisenziya",
        "correct": false
      }
    ]
  },
  {
    "num": 251,
    "question": "XÖHKS-(Xırda Ödənişlər üzrə Hesablaşma Klirinq Sistemi) fəaliyyət göstərir:",
    "options": [
      {
        "text": "2002",
        "correct": true
      },
      {
        "text": "2025",
        "correct": false
      },
      {
        "text": "2019",
        "correct": false
      },
      {
        "text": "2023",
        "correct": false
      },
      {
        "text": "2018",
        "correct": false
      }
    ]
  },
  {
    "num": 252,
    "question": "Mərkəzi Bank məcburi ehtiyat normasını qaldırdıqda kommersiya banklarının kredit potensialı …:",
    "options": [
      {
        "text": "artır",
        "correct": false
      },
      {
        "text": "dəyişməz qalır",
        "correct": false
      },
      {
        "text": "bərabərləşir",
        "correct": false
      },
      {
        "text": "azalır",
        "correct": true
      },
      {
        "text": "həndəsi silsilə ilə qalxır",
        "correct": false
      }
    ]
  },
  {
    "num": 253,
    "question": "\"Milli Bank\" ifadəsi nə zamandan  \"Mərkəzi Bank\" ifadəsi ilə əvəz edilmişdir?",
    "options": [
      {
        "text": "12 mart 2018",
        "correct": false
      },
      {
        "text": "26 iyun 2025",
        "correct": false
      },
      {
        "text": "31 dekabr 2008",
        "correct": false
      },
      {
        "text": "16 oktyabr 1991",
        "correct": false
      },
      {
        "text": "18 mart 2009",
        "correct": true
      }
    ]
  },
  {
    "num": 254,
    "question": "Azərbaycan Respublikasında ilk milli valyuta nə vaxt tədavülə buraxılıb?",
    "options": [
      {
        "text": "1994-ci ildə",
        "correct": false
      },
      {
        "text": "1992-ci ildə",
        "correct": true
      },
      {
        "text": "2024-ci ildə",
        "correct": false
      },
      {
        "text": "2000-ci ildə",
        "correct": false
      },
      {
        "text": "1993-ci ildə",
        "correct": false
      }
    ]
  },
  {
    "num": 255,
    "question": "Azərbaycan Respublikasının manatı yeganə  valyuta kimi nə vaxtdan istifadə olunur?",
    "options": [
      {
        "text": "1997-ci ildən",
        "correct": false
      },
      {
        "text": "2025-ci ildən",
        "correct": false
      },
      {
        "text": "2000-ci ildən",
        "correct": false
      },
      {
        "text": "1995 ci ildən",
        "correct": false
      },
      {
        "text": "1994-ci ildən",
        "correct": true
      }
    ]
  },
  {
    "num": 256,
    "question": "Bir kommersiya bankı digər kommersiya bankının müştərisi ola bilərmi ?",
    "options": [
      {
        "text": "ola bilər",
        "correct": true
      },
      {
        "text": "ola bilməz",
        "correct": false
      },
      {
        "text": "Milli Məclisin icazəsi ilə ola bilər",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatlarının (BOKT) icazəsi ilə ola bilər",
        "correct": false
      },
      {
        "text": "Auditor Palatasının icazəsi ilə ola bilər",
        "correct": false
      }
    ]
  },
  {
    "num": 257,
    "question": "Kütləvi Ödənişlər üzrə Mərkəzləşdirilmiş İnformasiya Sistemi (KÖMİS) yaranıb:",
    "options": [
      {
        "text": "11 iyul 2008",
        "correct": true
      },
      {
        "text": "30 sentyabr 2019",
        "correct": false
      },
      {
        "text": "15 iyul 2009",
        "correct": false
      },
      {
        "text": "5 dekabr 2006",
        "correct": false
      },
      {
        "text": "20 dekabr 2025",
        "correct": false
      }
    ]
  },
  {
    "num": 258,
    "question": "Subyektin hüquqi şəxs kimi tanınması üçün ..... olmalıdır:",
    "options": [
      {
        "text": "mal alışı və satışı müqaviləsi",
        "correct": false
      },
      {
        "text": "lisenziyası",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın razılığı",
        "correct": false
      },
      {
        "text": "kredit təşkilatında hesabının olması",
        "correct": true
      },
      {
        "text": "banklarla hesabatı",
        "correct": false
      }
    ]
  },
  {
    "num": 259,
    "question": "Depozit əməliyyatlarını kim yerinə yetirə bilər?",
    "options": [
      {
        "text": "yalnız Kredit İttifaqları",
        "correct": false
      },
      {
        "text": "Banklar Assosiasiyası",
        "correct": false
      },
      {
        "text": "Kredit İttifaqları və Bank Olmayan Kredit Təşkilatları(BOKT)",
        "correct": false
      },
      {
        "text": "Kommersiya bankları",
        "correct": true
      },
      {
        "text": "Səhmdar Cəmiyyətlər",
        "correct": false
      }
    ]
  },
  {
    "num": 260,
    "question": "Məcburi ehtiyatların səviyyəsi müəyyən edilir:",
    "options": [
      {
        "text": "bankın fəaliyyəti növündən asılı olaraq",
        "correct": false
      },
      {
        "text": "bank fəaliyyətinin keyfiyyətindən asılı olaraq",
        "correct": false
      },
      {
        "text": "bankın müxtəlif sənədlərinin səviyyəsindən asılı olaraq",
        "correct": false
      },
      {
        "text": "bankın statusuna görə",
        "correct": false
      },
      {
        "text": "bankın cəlb etdiyi depozit və əmanətlərin həcmindən asılı olaraq",
        "correct": true
      }
    ]
  },
  {
    "num": 261,
    "question": "AR Mərkəzi Bankı neçənci ildə yaranmışdır?",
    "options": [
      {
        "text": "1992",
        "correct": true
      },
      {
        "text": "2000",
        "correct": false
      },
      {
        "text": "1998",
        "correct": false
      },
      {
        "text": "2025",
        "correct": false
      },
      {
        "text": "2002",
        "correct": false
      }
    ]
  },
  {
    "num": 262,
    "question": "Ödəniş tapşırığı bank tərəfindən icraya qəbul edilir:",
    "options": [
      {
        "text": "müştərinin yazılı zəmanəti olduqda",
        "correct": false
      },
      {
        "text": "ödəyicinin vaxtı keçmiş borcu olmadıqda",
        "correct": false
      },
      {
        "text": "hesabda vəsait olmadıqda",
        "correct": false
      },
      {
        "text": "hesabda kifayət qədər vəsait olduqda",
        "correct": true
      },
      {
        "text": "müştərinin müraciəti gecikdikdə",
        "correct": false
      }
    ]
  },
  {
    "num": 263,
    "question": "Banklarda müxbir hesablar açılır:",
    "options": [
      {
        "text": "Hesablama Palatasının göstərişi ilə",
        "correct": false
      },
      {
        "text": "banklararası razılaşma əsasında",
        "correct": true
      },
      {
        "text": "bələdiyyələrin göstərişi ilə",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyinin göstərişi ilə",
        "correct": false
      },
      {
        "text": "Banklar Assosiasiyasının göstərişi ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 264,
    "question": "Nizamnamə kapitalı nədir?",
    "options": [
      {
        "text": "bank yarandığı anda yaradılan ilkin kapitaldır",
        "correct": true
      },
      {
        "text": "çatışmayan kapitaldır",
        "correct": false
      },
      {
        "text": "əlavə kapitaldır",
        "correct": false
      },
      {
        "text": "borc kapitalıdır",
        "correct": false
      },
      {
        "text": "sonradan əldə edilən kapitaldır",
        "correct": false
      }
    ]
  },
  {
    "num": 265,
    "question": "Kommersiya bankı:",
    "options": [
      {
        "text": "filiallara lisenziya verən təşkilatdır",
        "correct": false
      },
      {
        "text": "pul-kredit siyasətini həyata keçirən orqandır",
        "correct": false
      },
      {
        "text": "maddi istehsal sferası məhsulunu istehsal edən kommersiya təşkilatıdır",
        "correct": false
      },
      {
        "text": "maliyyə xidmətləri təqdim edən spesifik hüquqi şəxsdir",
        "correct": true
      },
      {
        "text": "bazar iqtisadiyyatı şəraitində banknot emissiyasını həyata keçirən orqandır",
        "correct": false
      }
    ]
  },
  {
    "num": 266,
    "question": "Kommersiya bankının hansı mülkiyyət  formasında yaradılmasına baxmayaraq, onlar.......:",
    "options": [
      {
        "text": "Milli Depozit Sisteminə hesabat verirlər",
        "correct": false
      },
      {
        "text": "fiziki şəxslərdən asılıdır",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın İdarə Heyətindən asılıdır",
        "correct": false
      },
      {
        "text": "müstəqildir",
        "correct": true
      },
      {
        "text": "Prezidentə hesabat verməlidir",
        "correct": false
      }
    ]
  },
  {
    "num": 267,
    "question": "Lizinq verən ... şəxsdir:",
    "options": [
      {
        "text": "öz vəsaiti və borc vəsaiti hesabına əldə edilən əmlakı lizinq alana təqdim edən",
        "correct": true
      },
      {
        "text": "Auditorlar Palatasından olan",
        "correct": false
      },
      {
        "text": "Beynəlxalq Valyuta Fondundan (BVF) cəlb olunmuş vəsait hesabına mülkiyyət əldə edən",
        "correct": false
      },
      {
        "text": "yalnız cəlb olunmuş vəsait hesabına əmlak əldə edib başqasına təqdim edən",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın işçiləri olan",
        "correct": false
      }
    ]
  },
  {
    "num": 268,
    "question": "…. görə emissiya, depozit və kommersiya banklarını fərqləndirirlər:",
    "options": [
      {
        "text": "təşkilati formasına",
        "correct": false
      },
      {
        "text": "filialların sayına",
        "correct": false
      },
      {
        "text": "funksional təyinatına",
        "correct": true
      },
      {
        "text": "mülkiyyət formasına",
        "correct": false
      },
      {
        "text": "əməliyyatlarının xarakterinə",
        "correct": false
      }
    ]
  },
  {
    "num": 269,
    "question": "Bank sektorunun məcmu kapitalının strukturu  və dinamikasının təhlili üçün  hansı göstəricilərdən istifadə olunur:",
    "options": [
      {
        "text": "heç bir kapitaldan istifədə olunmur",
        "correct": false
      },
      {
        "text": "nizamnamə kapitalından",
        "correct": false
      },
      {
        "text": "bankın əmək haqqlarından",
        "correct": false
      },
      {
        "text": "I (əsas) və II (əlavə) dərəcəli kapitaldan",
        "correct": true
      },
      {
        "text": "ipoteka kreditindən",
        "correct": false
      }
    ]
  },
  {
    "num": 270,
    "question": "Mərkəzi Bankın mənfəəti",
    "options": [
      {
        "text": "fəaliyyətindən əldə etdiyi gəlirlər hesabına formalaşır",
        "correct": true
      },
      {
        "text": "nağdsız ödənişlər hesabına formalaşır",
        "correct": false
      },
      {
        "text": "fiziki şəxslərə verdiyi kreditlər hesabına formalaşır",
        "correct": false
      },
      {
        "text": "lizinq faizləri hesabına formalaşır",
        "correct": false
      },
      {
        "text": "dondurulmuş vəsaitlər hesabına formalaşır",
        "correct": false
      }
    ]
  },
  {
    "num": 271,
    "question": "İnvestisiya nə deməkdir?",
    "options": [
      {
        "text": "mənfəət əldə etmək məqsədi ilə uzunmüddətli vəsait qoyuluşudur",
        "correct": true
      },
      {
        "text": "borc əməliyyatıdır",
        "correct": false
      },
      {
        "text": "ödəniş əməliyyatıdır",
        "correct": false
      },
      {
        "text": "zərər əldə etmək məqsədi ilə qısamüddətli vəsait qoyuluşudur",
        "correct": false
      },
      {
        "text": "gələcəkdə mənfəət əldə etmək üçün klirinq əməliyyatıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 272,
    "question": "Maliyyə bazarlarını tənzimləyən nəzarət orqanı hansıdır?",
    "options": [
      {
        "text": "xüsusi banklar",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "dövlət idarələri",
        "correct": false
      },
      {
        "text": "sənaye bankları",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatı (BOKT)",
        "correct": false
      }
    ]
  },
  {
    "num": 273,
    "question": "Kreditin prinsiplərini göstərin:",
    "options": [
      {
        "text": "qaytarılmaq, müddədlilik, təminatlılıq, ödənişlik, məqsədlilik",
        "correct": true
      },
      {
        "text": "yalnız məqsədli xarakter daşıması",
        "correct": false
      },
      {
        "text": "müddətlilik,ödənişlik,lizinq,faktorinq",
        "correct": false
      },
      {
        "text": "yalnız %-ni ödəmək",
        "correct": false
      },
      {
        "text": "yalnız qaytarılmaq",
        "correct": false
      }
    ]
  },
  {
    "num": 274,
    "question": "Bankın cari fəaliyyəti zamanı meydana çıxan itkilər .... hesabına ödənilir:",
    "options": [
      {
        "text": "ehtiyat fondu",
        "correct": true
      },
      {
        "text": "ictimai təminatlı fondu",
        "correct": false
      },
      {
        "text": "bank filialının fondu",
        "correct": false
      },
      {
        "text": "İpoteka Fondu",
        "correct": false
      },
      {
        "text": "sığorta fondu",
        "correct": false
      }
    ]
  },
  {
    "num": 275,
    "question": "Nağd pul dövriyyəsi:",
    "options": [
      {
        "text": "yararsız pulların tədavüldən çxarılmasıdır",
        "correct": false
      },
      {
        "text": "tədavüldən nağd pulların çıxarılması və emissiyasıdır",
        "correct": false
      },
      {
        "text": "nağd pul nişanlarının tədavülüdür",
        "correct": true
      },
      {
        "text": "tədavülə nağdsız pulların emissiyasıdır",
        "correct": false
      },
      {
        "text": "nağd pulların nağdsız pullara keçməsidir",
        "correct": false
      }
    ]
  },
  {
    "num": 276,
    "question": "Alıcı ona xidmət göstərən bank depozitində olan vəsait və ya bankın zəmanəti ilə  satıcının ərazisində yerləşən malın dəyərinin, ödəyicinin (alıcının) müəyyən etdiyi şərtlərlə ödənilməsinə dair verdiyi  tapşırığa əsasən hesablaşmanın aparıldığı forma ……adlanır:",
    "options": [
      {
        "text": "inkasso",
        "correct": false
      },
      {
        "text": "çeklərlə hesablaşma",
        "correct": false
      },
      {
        "text": "ödəniş tapşırığı",
        "correct": false
      },
      {
        "text": "veksel",
        "correct": false
      },
      {
        "text": "akkreditiv",
        "correct": true
      }
    ]
  },
  {
    "num": 277,
    "question": "Banklar nağdsız hesablaşmaları və pul köçürmələrini ......... həyata keçirirlər:",
    "options": [
      {
        "text": "Maliyyə Nazirliyinin göstərişinə uyğun olaraq",
        "correct": false
      },
      {
        "text": "auditor xidmətinə uyğun olaraq",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın qəbul etdiyi normativ aktlara uyğun olaraq",
        "correct": true
      },
      {
        "text": "vətəndaşlıq aktlarına uyğun olaraq",
        "correct": false
      },
      {
        "text": "Banklar Assosiasiyasının təlimatına uyğun olaraq",
        "correct": false
      }
    ]
  },
  {
    "num": 278,
    "question": "Mərkəzi Bankın daxili audit bölməsi həyata keçirir:",
    "options": [
      {
        "text": "İdarə Heyəti üzvlərinin fəaliyyətinə nəzarət edir",
        "correct": false
      },
      {
        "text": "rüblük maliyyə hesabatını təsdiq edir",
        "correct": false
      },
      {
        "text": "bank rəhbərini təyin edir",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın İdarə Heyətinin fəaliyyətinə nəzarət edir",
        "correct": false
      },
      {
        "text": "struktur bölmələrinin auditini həyata keçirir",
        "correct": true
      }
    ]
  },
  {
    "num": 279,
    "question": "Nağdsız hesablaşma sisteminin sabit işləməsini təmin etmək, onların fəaliyyətini təşkil etmək, əlaqələndirmək və nəzarət etmək …səlahiyyətindədir:",
    "options": [
      {
        "text": "Mərkəzi Bankın",
        "correct": true
      },
      {
        "text": "Hesablama Palatasının",
        "correct": false
      },
      {
        "text": "Milli Depozit Sisteminin",
        "correct": false
      },
      {
        "text": "faktorinq firmalarının",
        "correct": false
      },
      {
        "text": "Klirinq Mərkəzinin",
        "correct": false
      }
    ]
  },
  {
    "num": 280,
    "question": "Mərkəzi Bankın kapitalı ibarətdir:",
    "options": [
      {
        "text": "Mərkəzi Bankın verdiyi kreditlərə görə faizlərdən",
        "correct": false
      },
      {
        "text": "nizamnamə fondu və kapital ehtiyatından",
        "correct": true
      },
      {
        "text": "fiziki şəxslərin vəsaitlərindən",
        "correct": false
      },
      {
        "text": "dövlət büdcəsinin kapitalından",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın kapital və sənəd ehtiyatından",
        "correct": false
      }
    ]
  },
  {
    "num": 281,
    "question": "Kreditləşmənin son instansiya kreditoru qismində Mərkəzi Bank ...... :",
    "options": [
      {
        "text": "kritik vəziyyətlərdə istehsal müəssisələrinə kreditlər verir",
        "correct": false
      },
      {
        "text": "vətəndaşlara istehlak kreditləri verir",
        "correct": false
      },
      {
        "text": "ödəmə qabiliyyətinin qısa müddətli pozulması  və likvidlik çatışmazlığı ilə  üzləşmiş banklara kredit verə bilər",
        "correct": true
      },
      {
        "text": "vətəndaşlara lizinq krediti verir",
        "correct": false
      },
      {
        "text": "maliyyə çətinliyi çəkən milli müəssisələri kreditləşdirir",
        "correct": false
      }
    ]
  },
  {
    "num": 282,
    "question": "Bankların mənafeyini müdafiə edir:",
    "options": [
      {
        "text": "Xəzinədarlıq",
        "correct": false
      },
      {
        "text": "Sığorta Kompaniyaları",
        "correct": false
      },
      {
        "text": "Banklar Assosiasiyası",
        "correct": true
      },
      {
        "text": "Kredit İttifaqları",
        "correct": false
      },
      {
        "text": "İnvestisiya Fondları",
        "correct": false
      }
    ]
  },
  {
    "num": 283,
    "question": "Bank Sisteminə aid edilir:",
    "options": [
      {
        "text": "lizinq şirkətləri",
        "correct": false
      },
      {
        "text": "Bank Assosiasiyaları",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank və kredit təşkilatları",
        "correct": true
      },
      {
        "text": "faktorinq şirkətləri",
        "correct": false
      },
      {
        "text": "bank birlikləri və bank büroları",
        "correct": false
      }
    ]
  },
  {
    "num": 284,
    "question": "Mərkəzi Bank ona məxsus əmlakın:",
    "options": [
      {
        "text": "ödəyicisidir",
        "correct": false
      },
      {
        "text": "sahibidir",
        "correct": true
      },
      {
        "text": "müvəqqəti sahibidir",
        "correct": false
      },
      {
        "text": "müvəqqəti təsisçisidir",
        "correct": false
      },
      {
        "text": "daimi icarədarıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 285,
    "question": "Mərkəzi Bankın iqtisadiyyatdakı məqsədi müəyyən edilir:",
    "options": [
      {
        "text": "vergi xidmətinin təşkili ilə",
        "correct": false
      },
      {
        "text": "bankların səmərəsiz fəaliyyəti ilə",
        "correct": false
      },
      {
        "text": "dövlət büdcəsindəki limitin tənzimlənməsi ilə",
        "correct": false
      },
      {
        "text": "qiymətlərin sabitliyinin təmin edilməsi ilə",
        "correct": true
      },
      {
        "text": "sığorta işinin təşkili ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 286,
    "question": "Bankın səhmdarı ola bilərlər:",
    "options": [
      {
        "text": "siyasi partiyalar",
        "correct": false
      },
      {
        "text": "qeyri-kommersiya təşkilatları",
        "correct": false
      },
      {
        "text": "ictimai fondlar",
        "correct": false
      },
      {
        "text": "ictimai birliklər",
        "correct": false
      },
      {
        "text": "heç biri",
        "correct": true
      }
    ]
  },
  {
    "num": 287,
    "question": "Kommersiya bankının yaradılmasında minimum neçə təsisçi iştirak edə bilər ?",
    "options": [
      {
        "text": "heç kəs iştirak etmir",
        "correct": false
      },
      {
        "text": "5 təsisçi",
        "correct": false
      },
      {
        "text": "2 təsisçi",
        "correct": false
      },
      {
        "text": "3 təsisçi",
        "correct": true
      },
      {
        "text": "1 təsisçi",
        "correct": false
      }
    ]
  },
  {
    "num": 288,
    "question": "Bazar riskinə aid olmayan riski seçin ......:",
    "options": [
      {
        "text": "kapital riski",
        "correct": false
      },
      {
        "text": "xarici valyuta riski",
        "correct": false
      },
      {
        "text": "əmtəə-mal riski",
        "correct": false
      },
      {
        "text": "pul riski",
        "correct": false
      },
      {
        "text": "əməliyyat riski",
        "correct": true
      }
    ]
  },
  {
    "num": 289,
    "question": "Bankın aktivlərində olan artımı maliyyələşdirə bilməməsi və öz öhdəliklərinin vaxtı-vaxtında yerinə yetirə bilməməsi ....:",
    "options": [
      {
        "text": "valyuta riskidir",
        "correct": false
      },
      {
        "text": "faiz dərəcəsi riskidir",
        "correct": false
      },
      {
        "text": "əmtəə-mal riskidir",
        "correct": false
      },
      {
        "text": "likvidlik riskidir",
        "correct": true
      },
      {
        "text": "kapital riskidir",
        "correct": false
      }
    ]
  },
  {
    "num": 290,
    "question": "Mərkəzi Bankın əməliyyatları.....bölünür:",
    "options": [
      {
        "text": "dondurulmuş əməliyyatlara",
        "correct": false
      },
      {
        "text": "aktiv və passiv əməliyyatlara",
        "correct": true
      },
      {
        "text": "sadə və çətin əməliyyatlara",
        "correct": false
      },
      {
        "text": "investisiya əməliyyatlarına",
        "correct": false
      },
      {
        "text": "REPO əməliyyatlarına",
        "correct": false
      }
    ]
  },
  {
    "num": 291,
    "question": "Rəqəmsal bankçılıq bank  müştərisinə ...rejimində bank funksiyalarına giriş imkanı verir:",
    "options": [
      {
        "text": "7/24",
        "correct": true
      },
      {
        "text": "7/8",
        "correct": false
      },
      {
        "text": "7/7",
        "correct": false
      },
      {
        "text": "7/12",
        "correct": false
      },
      {
        "text": "7/5",
        "correct": false
      }
    ]
  },
  {
    "num": 292,
    "question": "Rəqəmsal bankçılığın ödəniş alətidir:",
    "options": [
      {
        "text": "bank kartları",
        "correct": true
      },
      {
        "text": "SOS terminalları",
        "correct": false
      },
      {
        "text": "bilet kartları",
        "correct": false
      },
      {
        "text": "ötürücü kartlar",
        "correct": false
      },
      {
        "text": "keçid kartları",
        "correct": false
      }
    ]
  },
  {
    "num": 293,
    "question": "Emissiya balansı tərtib edilir:",
    "options": [
      {
        "text": "ərazi idaləri və kommersiya bankları ilə birgə",
        "correct": false
      },
      {
        "text": "SWİFT tərəfindən",
        "correct": false
      },
      {
        "text": "Milli Depozit Sistemi tərəfindən",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank tərəfindən",
        "correct": true
      },
      {
        "text": "Maliyyə Nazirliyi tərəfindən",
        "correct": false
      }
    ]
  },
  {
    "num": 294,
    "question": "Malgöndərəndən ödəniş tələbnamələrinin alınması əməliyyatıdır:",
    "options": [
      {
        "text": "lizinq",
        "correct": false
      },
      {
        "text": "trast",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "kredit",
        "correct": false
      },
      {
        "text": "faktorinq",
        "correct": true
      }
    ]
  },
  {
    "num": 295,
    "question": "Bankların xərclərini təhlil edərkən ən böyük..... hesab olunur?",
    "options": [
      {
        "text": "gəlir xərcləri",
        "correct": false
      },
      {
        "text": "əmtəə xərcləri",
        "correct": false
      },
      {
        "text": "faiz xərcləri",
        "correct": true
      },
      {
        "text": "əmək haqqı xərcləri",
        "correct": false
      },
      {
        "text": "investisiya xərcləri",
        "correct": false
      }
    ]
  },
  {
    "num": 296,
    "question": "Audit Komitəsi:",
    "options": [
      {
        "text": "bank əməkdaşlarına əmək haqqı verən orqandır",
        "correct": false
      },
      {
        "text": "banka nəzarət edən orqanlardan biridir",
        "correct": false
      },
      {
        "text": "bank monitorinqini həyata keçirən orqandır",
        "correct": false
      },
      {
        "text": "bankı idarə edən orqanlardan biridir",
        "correct": true
      },
      {
        "text": "banka lisenziya verən orqandır",
        "correct": false
      }
    ]
  },
  {
    "num": 297,
    "question": "Kredit təşkilatlarını lisenziyalaşdırır:",
    "options": [
      {
        "text": "Mərkəzi Bank  Bank Assosiasiyası ilə birlikdə",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "Milli Depozit Sistemi",
        "correct": false
      },
      {
        "text": "Banklar Assosasiyası",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyi",
        "correct": false
      }
    ]
  },
  {
    "num": 298,
    "question": "Mərkəzi Bankın hesabat ilinin mənfəəti ilk növbədə yönəldilir:",
    "options": [
      {
        "text": "Mərkəzi Bankın kapital ehtiyatlarının formalaşmasına",
        "correct": true
      },
      {
        "text": "kommersiya banklarının nizamnamə kapitalına",
        "correct": false
      },
      {
        "text": "Dövlət Büdcəsinin formalaşmasına",
        "correct": false
      },
      {
        "text": "maddi maraq fondunun yaradılmasına",
        "correct": false
      },
      {
        "text": "fiziki şəxslərin depozitlərinə",
        "correct": false
      }
    ]
  },
  {
    "num": 299,
    "question": "Mərkəzi Bankın hesabat ilinin mənfəəti ilk növbədə yönəldilir:",
    "options": [
      {
        "text": "maddi maraq fondunun yaradılmasına",
        "correct": false
      },
      {
        "text": "keçən ilki itkilərin ödənilməsinə",
        "correct": false
      },
      {
        "text": "dövlət büdcəsinin formalaşmasına",
        "correct": false
      },
      {
        "text": "işçi heyətinin mükafatlandırılmasına",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın kapital ehtiyatlarının formalaşmasına",
        "correct": true
      }
    ]
  },
  {
    "num": 300,
    "question": "Emissiya balansı tərtib edilir:",
    "options": [
      {
        "text": "kommersiya banklarının filialları tərəfindən",
        "correct": false
      },
      {
        "text": "Milli Depozit Sistemi tərəfindən",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank tərəfindən",
        "correct": true
      },
      {
        "text": "Maliyyə Nazirliyi tərəfindən",
        "correct": false
      },
      {
        "text": "ərazi idaləri və kommersiya bankları ilə birgə",
        "correct": false
      }
    ]
  },
  {
    "num": 301,
    "question": "Bankların mənafeyini  müdafiə etmək üçün ictimai təşkilat kimi yaradılır:",
    "options": [
      {
        "text": "kredit təşkilatları və investisya şirkətləri",
        "correct": false
      },
      {
        "text": "Banklar Assosiasiyası",
        "correct": true
      },
      {
        "text": "İpoteka Fondları",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın ərazi idarələri",
        "correct": false
      },
      {
        "text": "investisiya fondları",
        "correct": false
      }
    ]
  },
  {
    "num": 302,
    "question": "Bu və ya digər bank əməliyyatlarını yerinə yetirmək hüququ olan kredit təşkilatıdır:",
    "options": [
      {
        "text": "bank birlikləri",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatları (BOKT)",
        "correct": true
      },
      {
        "text": "sığorta kompaniyaları",
        "correct": false
      },
      {
        "text": "bankların şöbələri",
        "correct": false
      },
      {
        "text": "Bank Assosasiyaları",
        "correct": false
      }
    ]
  },
  {
    "num": 303,
    "question": "Fəaliyyət ölçülərinə görə banklar ayrılır:",
    "options": [
      {
        "text": "nümayəndəlik,səhmdar,iri",
        "correct": false
      },
      {
        "text": "çox filiallı,az filiallı",
        "correct": false
      },
      {
        "text": "kiçik,səhmdar,kommersiya",
        "correct": false
      },
      {
        "text": "kiçik, orta, sistem əhəmiyyətli banklar",
        "correct": true
      },
      {
        "text": "vasitəçilik,mərkəzi,filiallı",
        "correct": false
      }
    ]
  },
  {
    "num": 304,
    "question": "Həcminə görə kredit ayrılır:",
    "options": [
      {
        "text": "yalnız iri məbləğli kreditlər",
        "correct": false
      },
      {
        "text": "yalnız orta məbləğli kreditlər",
        "correct": false
      },
      {
        "text": "iri kreditlər, orta kreditlər,kiçik kreditlər, mikro kreditlər",
        "correct": true
      },
      {
        "text": "sonsuz kreditlər",
        "correct": false
      },
      {
        "text": "yalnız xırda məbləğli kreditlər",
        "correct": false
      }
    ]
  },
  {
    "num": 305,
    "question": "Hüquqi şəxs kimi bankın malik olduğu kapitalın pul ilə ifadəsi:",
    "options": [
      {
        "text": "ehtiyat fondu adlanır",
        "correct": false
      },
      {
        "text": "yığım fondu adlanır",
        "correct": false
      },
      {
        "text": "tənzimləmə fondu adlanır",
        "correct": false
      },
      {
        "text": "nizamnamə kapitalı adlanır",
        "correct": true
      },
      {
        "text": "dəyən zərərin ödənilməsi üçün olan vəsaitlər adlanır",
        "correct": false
      }
    ]
  },
  {
    "num": 306,
    "question": "Dövriyyəyə pulun buraxılmasında və tədavüldən çıxarılmasında pulun miqdarı:",
    "options": [
      {
        "text": "artıb və ya azala bilər",
        "correct": true
      },
      {
        "text": "sıfıra bərabər olur",
        "correct": false
      },
      {
        "text": "hər zaman artır",
        "correct": false
      },
      {
        "text": "hər zaman azalır",
        "correct": false
      },
      {
        "text": "sabit qalır",
        "correct": false
      }
    ]
  },
  {
    "num": 307,
    "question": "Nağdsız pul dövriyyəsinin nağd dövriyyə ilə müqayisədə tədavül xərcləri:",
    "options": [
      {
        "text": "olduqca çoxdur",
        "correct": false
      },
      {
        "text": "olduqca azdır",
        "correct": true
      },
      {
        "text": "mövcud deyildir",
        "correct": false
      },
      {
        "text": "həddindən çoxdur",
        "correct": false
      },
      {
        "text": "sıfıra bərabərdir",
        "correct": false
      }
    ]
  },
  {
    "num": 308,
    "question": "Bazar iqtisadiyyatlı ölkələrdə Bank Sistemi ola bilər:",
    "options": [
      {
        "text": "yalnız bir pilləli",
        "correct": false
      },
      {
        "text": "minimum on üç pilləli",
        "correct": false
      },
      {
        "text": "həm bir pilləli həm on dörd pilləli",
        "correct": false
      },
      {
        "text": "belə ölkələrdə bank sistemi olmur",
        "correct": false
      },
      {
        "text": "iki pilləli",
        "correct": true
      }
    ]
  },
  {
    "num": 309,
    "question": "Bazar iqtisadiyyatlı ölkələrdə Bank Sistemi ola bilər:",
    "options": [
      {
        "text": "iki pilləli",
        "correct": true
      },
      {
        "text": "pillələrin sayı yoxdur",
        "correct": false
      },
      {
        "text": "on dörd pilləli",
        "correct": false
      },
      {
        "text": "bir pilləli",
        "correct": false
      },
      {
        "text": "səkkiz pilləli",
        "correct": false
      }
    ]
  },
  {
    "num": 310,
    "question": "Cəlb olunmuş vəsaitlər hansı əməliyyatlar hesabına səfərbər edilir",
    "options": [
      {
        "text": "bankın vasitəçilik əməliyyatları",
        "correct": false
      },
      {
        "text": "bankın passiv əməliyyatları",
        "correct": true
      },
      {
        "text": "trast əməliyyatları",
        "correct": false
      },
      {
        "text": "mənfəət əməliyyatları",
        "correct": false
      },
      {
        "text": "bankın aktiv əməliyyatları",
        "correct": false
      }
    ]
  },
  {
    "num": 311,
    "question": "Ödəniş xidməti təchizatçıları tərəfindən göstərilən xidmət necə adlanır?",
    "options": [
      {
        "text": "emissiya",
        "correct": false
      },
      {
        "text": "krosslaşdırma",
        "correct": false
      },
      {
        "text": "ekvayrinq",
        "correct": true
      },
      {
        "text": "yaddaş plastik kartları",
        "correct": false
      },
      {
        "text": "köçürmə",
        "correct": false
      }
    ]
  },
  {
    "num": 312,
    "question": "Bankın təsisçilərinin təsis yığıncağında ....... iştirak etdikdə səlahiyyətli sayılır:",
    "options": [
      {
        "text": "digər kredit təşkilatları",
        "correct": false
      },
      {
        "text": "dövlət orqanları",
        "correct": false
      },
      {
        "text": "bütün təsisçilər və ya onların nümayəndələri",
        "correct": true
      },
      {
        "text": "bütün işçilər",
        "correct": false
      },
      {
        "text": "müştərilər iştirak etdikdə",
        "correct": false
      }
    ]
  },
  {
    "num": 313,
    "question": "Azərbaycan Respublikasında fəaliyyət göstərən kredit təşkilatlarında xarici bank kapitalının iştirak limitini müəyyən edir:",
    "options": [
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "Maliyyə Nazirliyi",
        "correct": false
      },
      {
        "text": "bankların əməkdaşları",
        "correct": false
      },
      {
        "text": "Banklar Assosiasiyası",
        "correct": false
      },
      {
        "text": "Nazirlər Kabineti",
        "correct": false
      }
    ]
  },
  {
    "num": 314,
    "question": "Azərbaycan Respublikası Mərkəzi Bankının nizamnamə fondu ....... təşkil edir:",
    "options": [
      {
        "text": "500 mlrd. manat",
        "correct": false
      },
      {
        "text": "100 mln. manat",
        "correct": false
      },
      {
        "text": "500 min. manat",
        "correct": false
      },
      {
        "text": "500 mln. manat",
        "correct": true
      },
      {
        "text": "50 mln. manat",
        "correct": false
      }
    ]
  },
  {
    "num": 315,
    "question": "Banknot nədir?",
    "options": [
      {
        "text": "ölkənin Mərkəzi Bankı tərəfindən buraxılan çeklərdir",
        "correct": false
      },
      {
        "text": "plastik kartdır",
        "correct": false
      },
      {
        "text": "Milli Ödəniş Sistemidir",
        "correct": false
      },
      {
        "text": "kağız pullardır",
        "correct": true
      },
      {
        "text": "depozitdir",
        "correct": false
      }
    ]
  },
  {
    "num": 316,
    "question": "İxtisaslaşmış banklar  hansı növ əməliyyat üzrə ixtisaslaşır?",
    "options": [
      {
        "text": "bank əməliyyatlarının məhdud növü üzrə ixtisaslaşır",
        "correct": true
      },
      {
        "text": "fasiləli fəaliyyət göstərirlər",
        "correct": false
      },
      {
        "text": "düzgün cavab yoxdur",
        "correct": false
      },
      {
        "text": "fasiləsiz fəaliyyət göstərirlər",
        "correct": false
      },
      {
        "text": "bütün bank əməliyyatlarını həyata keçirirlər",
        "correct": false
      }
    ]
  },
  {
    "num": 317,
    "question": "İstehlak kreditinin formasını göstərin:",
    "options": [
      {
        "text": "xalq istehlakı mallarının istehsalı üçün verilən kredit",
        "correct": false
      },
      {
        "text": "bank müəssisəyə ssuda vermir",
        "correct": false
      },
      {
        "text": "sənaye müəssisəsi tərəfindən təsərrüfat ehtiyaclarına verilən kredit",
        "correct": false
      },
      {
        "text": "məişət texnikası alınması üçün fiziki şəxslərə bankdan verilən kredit",
        "correct": true
      },
      {
        "text": "bir bankın digər banka verdiyi kredit",
        "correct": false
      }
    ]
  },
  {
    "num": 318,
    "question": "Bankın filialı yerinə yetirə bilər:",
    "options": [
      {
        "text": "yalnız sənəd vermə əməliyyatlarını",
        "correct": false
      },
      {
        "text": "yalnız əmtəə mübadiləsi əməliyyatlarını",
        "correct": false
      },
      {
        "text": "lisenziya əməliyyatlarını",
        "correct": false
      },
      {
        "text": "kredit təşkilatına verilən lisenziyada göstərilən bütün əməliyyatları",
        "correct": true
      },
      {
        "text": "lisenziyanı ləğv etmə əməliyyatlarını",
        "correct": false
      }
    ]
  },
  {
    "num": 319,
    "question": "Aşağıdakılardan hansı Bank Sisteminin ünsürü deyil:",
    "options": [
      {
        "text": "Bank Olmayan Kredit Təşkilatı (BOKT)",
        "correct": false
      },
      {
        "text": "kommersiya bankları",
        "correct": false
      },
      {
        "text": "emissiya bankları",
        "correct": false
      },
      {
        "text": "poçt müəssisələri",
        "correct": false
      },
      {
        "text": "xəzinədarlıq",
        "correct": true
      }
    ]
  },
  {
    "num": 320,
    "question": "Bazar tipli Bank Sistemini bölüşdürücü bank sistemindən fərqləndirən nədir:",
    "options": [
      {
        "text": "bankların mülkiyyət formalarına məhdudiyyətlərin qoyulması",
        "correct": false
      },
      {
        "text": "bankların mülkiyyət formalarının eyniliyi",
        "correct": false
      },
      {
        "text": "yalnız dövlət banklarının fəaliyyətinin mümkünlüyü",
        "correct": false
      },
      {
        "text": "yalnız xarici kapitallı bankların olması",
        "correct": false
      },
      {
        "text": "bankların mülkiyyət formalarının müxtəlifliyi",
        "correct": true
      }
    ]
  },
  {
    "num": 321,
    "question": "Bank Sistemi …. məcmusudur:",
    "options": [
      {
        "text": "beynəlxalq kredit təşkilatlarının",
        "correct": false
      },
      {
        "text": "ölkədə pul tədavülünün təşkilinin forma və metodlarının",
        "correct": false
      },
      {
        "text": "maliyyə nəzarət orqanlarının",
        "correct": false
      },
      {
        "text": "emissiya banklarının və lizinq şirkətlərinin",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank və kredit təşkilatlarının",
        "correct": true
      }
    ]
  },
  {
    "num": 322,
    "question": "Faktorinqin formalarını göstərin:",
    "options": [
      {
        "text": "kredit və faktorinq",
        "correct": false
      },
      {
        "text": "depozit və faktorinq",
        "correct": false
      },
      {
        "text": "investisiya və faktorinq",
        "correct": false
      },
      {
        "text": "malgöndərənin faktorinqi və malalanın faktorinqi",
        "correct": true
      },
      {
        "text": "lizinq və faktorinq",
        "correct": false
      }
    ]
  },
  {
    "num": 323,
    "question": "Trast əməliyyatı nə deməkdir?",
    "options": [
      {
        "text": "qiymətli kağızların idarə olunması",
        "correct": false
      },
      {
        "text": "əmlakın idarə olunması",
        "correct": false
      },
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "pul vasitələrinin idarə olunması",
        "correct": false
      },
      {
        "text": "daşınan əmlakın idarə olunması",
        "correct": false
      }
    ]
  },
  {
    "num": 324,
    "question": "Bankların vasitəçilik əməliyyatlarıdır:",
    "options": [
      {
        "text": "lizinq",
        "correct": false
      },
      {
        "text": "faktorinq",
        "correct": false
      },
      {
        "text": "forfeytinq",
        "correct": false
      },
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "trast",
        "correct": false
      }
    ]
  },
  {
    "num": 325,
    "question": "Bankların vasitəçilik əməliyyatlarını göstərin:",
    "options": [
      {
        "text": "avans",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "trast",
        "correct": true
      },
      {
        "text": "investisiya",
        "correct": false
      },
      {
        "text": "kredit",
        "correct": false
      }
    ]
  },
  {
    "num": 326,
    "question": "Aşağıdakı qiymətli kağızlardan hansı nağdsız hesablaşmalarda hesablaşma sənədi kimi isitfadə olunur:",
    "options": [
      {
        "text": "səhm",
        "correct": false
      },
      {
        "text": "istiqraz",
        "correct": false
      },
      {
        "text": "varrant",
        "correct": false
      },
      {
        "text": "çek",
        "correct": true
      },
      {
        "text": "konossament",
        "correct": false
      }
    ]
  },
  {
    "num": 327,
    "question": "Qiymətli kağızdır:",
    "options": [
      {
        "text": "metal pullar",
        "correct": false
      },
      {
        "text": "qiymətli metallar",
        "correct": false
      },
      {
        "text": "kredit",
        "correct": false
      },
      {
        "text": "depozit sertifikatı",
        "correct": true
      },
      {
        "text": "plastik kartlar",
        "correct": false
      }
    ]
  },
  {
    "num": 328,
    "question": "Likvidlik dedikdə ........ başa düşülür:",
    "options": [
      {
        "text": "bankın İdarə Heyəti qarşısındakı bacarığı",
        "correct": false
      },
      {
        "text": "bankın İnvestisiya Şirkətlərinin qarşısındakı fəaliyyət bacarığı",
        "correct": false
      },
      {
        "text": "bankın Müşahidə Şurası qarşısındakı bacarığı",
        "correct": false
      },
      {
        "text": "bankın əmanətçilərinin və digər borcluların qarşısında öhdəliklərini yerinə yetirmək bacarığı",
        "correct": true
      },
      {
        "text": "pul itkisidir",
        "correct": false
      }
    ]
  },
  {
    "num": 329,
    "question": "Veksel və çekdəki verilmə imzası … adlanır:",
    "options": [
      {
        "text": "indossament",
        "correct": true
      },
      {
        "text": "konosament",
        "correct": false
      },
      {
        "text": "inkasso",
        "correct": false
      },
      {
        "text": "trasslaşdırma",
        "correct": false
      },
      {
        "text": "krosslaşdırma",
        "correct": false
      }
    ]
  },
  {
    "num": 330,
    "question": "Qiymət riskini göstərin:",
    "options": [
      {
        "text": "bankın dəyişmə riski",
        "correct": false
      },
      {
        "text": "depozitin dəyişmə riski",
        "correct": false
      },
      {
        "text": "həyatın dəyişmə riski",
        "correct": false
      },
      {
        "text": "pulun dəyişmə riski",
        "correct": false
      },
      {
        "text": "% dərəcəsinin dəyişmə riski",
        "correct": true
      }
    ]
  },
  {
    "num": 331,
    "question": "Qiymətli kağızlar bazarının məqsədi....?",
    "options": [
      {
        "text": "inflyasiyaya təsir etməkdir",
        "correct": false
      },
      {
        "text": "bank yaratmaqdır",
        "correct": false
      },
      {
        "text": "sərbəst maliyyə resurslarını səfərbər etməkdir",
        "correct": true
      },
      {
        "text": "əmək haqqı verməkdir",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatları (BOKT) yaratmaqdır",
        "correct": false
      }
    ]
  },
  {
    "num": 332,
    "question": "Səhmdar Cəmiyyət nədir?",
    "options": [
      {
        "text": "fiziki və hüquqi şəxslərin sazişi əsasında yaradılan müəssisədir",
        "correct": true
      },
      {
        "text": "bankın faktorinq bölməsidir",
        "correct": false
      },
      {
        "text": "banknotlardır",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın ərazi idarələridir",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatlardır (BOKT)",
        "correct": false
      }
    ]
  },
  {
    "num": 333,
    "question": "Faktorinq əməliyyatı zamanı müştəri ödəniş etmək hüququnu güzəştə gedir ........:",
    "options": [
      {
        "text": "dövlətə",
        "correct": false
      },
      {
        "text": "Mərkəzi Banka",
        "correct": false
      },
      {
        "text": "sığorta kompaniyalarına",
        "correct": false
      },
      {
        "text": "vasitəçilərə",
        "correct": true
      },
      {
        "text": "vergi orqanlarına",
        "correct": false
      }
    ]
  },
  {
    "num": 334,
    "question": "Operativ lizinqin müqavilə müddəti başa çatdıqda:",
    "options": [
      {
        "text": "mülkiyyət hüququnun keçməsi mümkün deyil",
        "correct": false
      },
      {
        "text": "lizinq əşyasının bir hissəsi lizinq verənə qaytarılır",
        "correct": false
      },
      {
        "text": "lizinq əmlakı lizinq verənə qaytarılır",
        "correct": true
      },
      {
        "text": "lizinq əşyasının yalnız 30% lizinq verənə qaytarılır",
        "correct": false
      },
      {
        "text": "lizinq əmlakı lizinq verənə hədiyyə edilir",
        "correct": false
      }
    ]
  },
  {
    "num": 335,
    "question": "Kommersiya bankının kredit əməliyyatları ............. ilə əlaqəlidir:",
    "options": [
      {
        "text": "müştərilərə pul vəsaitlərin əvəzsiz ötürülməsi",
        "correct": false
      },
      {
        "text": "qaytarılma müddətini müəyyən etmədən vəsaitlərin ötürülməsi",
        "correct": false
      },
      {
        "text": "bank zəmanətlərinin verilməsi",
        "correct": false
      },
      {
        "text": "qaytarılmaq şərti ilə borcalana vəsaitlərin verilməsi",
        "correct": true
      },
      {
        "text": "bank akkreditivinin verilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 336,
    "question": ".......... kommersiya bankının funksiyasıdır:",
    "options": [
      {
        "text": "sığorta təşkilatlarının fəaliyyətinə nəzarət",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın kreditləşdirilməsi",
        "correct": false
      },
      {
        "text": "banknot emissiyası",
        "correct": false
      },
      {
        "text": "müştərilərə hesablaşma-kassa xidmətlərinin göstərilməsi",
        "correct": true
      },
      {
        "text": "poçt filiallarının fəaliyyətinə nəzarət",
        "correct": false
      }
    ]
  },
  {
    "num": 337,
    "question": "Banklar müştərilərin hesabları üzrə əməliyyatları nəyə əsasən həyata keçirir:",
    "options": [
      {
        "text": "gömrük sənədlərinə əsasən",
        "correct": false
      },
      {
        "text": "nəqliyyat sənədlərinə əsasən",
        "correct": false
      },
      {
        "text": "uyğunluq sertifikatına əsasən",
        "correct": false
      },
      {
        "text": "hesablaşma sənədlərinə əsasən",
        "correct": true
      },
      {
        "text": "hesab-qaiməyə əsasən",
        "correct": false
      }
    ]
  },
  {
    "num": 338,
    "question": "Kredit təşkilatının buraxdığı səhmlər hansı qurum tərəfindən dövlət qeydiyyatına alınır ?",
    "options": [
      {
        "text": "İqtisadiyyat Nazirliyyi",
        "correct": false
      },
      {
        "text": "kommersiya bankları",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "Nazirlər Kabineti",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyi",
        "correct": false
      }
    ]
  },
  {
    "num": 339,
    "question": "Səhmdar Cəmiyyətlər neçə formada yaradılır və hansılardır?",
    "options": [
      {
        "text": "yalnız qapalı tipli",
        "correct": false
      },
      {
        "text": "bank formasında və açıq tipli formada",
        "correct": false
      },
      {
        "text": "2 formada: açıq və qapalı tipli",
        "correct": true
      },
      {
        "text": "qarışıq formada, açıq formada, qapalı formada",
        "correct": false
      },
      {
        "text": "yalnız açıq tipli",
        "correct": false
      }
    ]
  },
  {
    "num": 340,
    "question": "Kommersiya banklarının resurslarını göstərin:",
    "options": [
      {
        "text": "hesabdan silinən vəsaitlər",
        "correct": false
      },
      {
        "text": "şəxsi(xüsusi) vəsaitlər, cəlb olunmuş vəsaitlər",
        "correct": true
      },
      {
        "text": "yalnız şəxsi vəsaitlər",
        "correct": false
      },
      {
        "text": "yalnız mənfəətə cəlb olunmuş vəsaitlər",
        "correct": false
      },
      {
        "text": "yalnız cəlb olunmuş vəsaitlər",
        "correct": false
      }
    ]
  },
  {
    "num": 341,
    "question": "İpoteka krediti kreditin........:",
    "options": [
      {
        "text": "uçotudur",
        "correct": false
      },
      {
        "text": "müddətidir",
        "correct": false
      },
      {
        "text": "növüdür",
        "correct": false
      },
      {
        "text": "formasıdır",
        "correct": true
      },
      {
        "text": "prinsipidir",
        "correct": false
      }
    ]
  },
  {
    "num": 342,
    "question": "Mərkəzi Bank müflis elan oluna bilərmi?",
    "options": [
      {
        "text": "müflis elan edilə bilər",
        "correct": false
      },
      {
        "text": "müflis elan olunmaq Mərkəzi Bankın funksiyasıdır",
        "correct": false
      },
      {
        "text": "lisenziyası ləğv edilə bilməz",
        "correct": false
      },
      {
        "text": "müflis elan edilə bilməz",
        "correct": true
      },
      {
        "text": "lisenziyası ləğv edilə bilər",
        "correct": false
      }
    ]
  },
  {
    "num": 343,
    "question": "Banknot emissiyası Mərkəzi Bankın..... əməliyyatıdır:",
    "options": [
      {
        "text": "məzənnə",
        "correct": false
      },
      {
        "text": "uçot",
        "correct": false
      },
      {
        "text": "passiv",
        "correct": true
      },
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "aktiv",
        "correct": false
      }
    ]
  },
  {
    "num": 344,
    "question": "Azərbaycan Respublikasında bank fəaliyəti ilə məşğul olmaqdan ötrü lisensiyanı kim verir:",
    "options": [
      {
        "text": "Statistika Komitəsi",
        "correct": false
      },
      {
        "text": "İqtisadiyyat Nazirliyi",
        "correct": false
      },
      {
        "text": "Milli Məclis",
        "correct": false
      },
      {
        "text": "Nazirlər Kabineti",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      }
    ]
  },
  {
    "num": 345,
    "question": "Bank menecmentinin əsas vəzifəsi hesab edilir:",
    "options": [
      {
        "text": "müştərinin istəyinə görə hesablaşmaları aparmaq",
        "correct": false
      },
      {
        "text": "bankın likvidliyini hesablamaq",
        "correct": false
      },
      {
        "text": "dəyəri olmayan, istifadə edilməyən pulların uçotunu aparmaq",
        "correct": false
      },
      {
        "text": "kreditin təminatına görə hesabları aparmaq",
        "correct": false
      },
      {
        "text": "bankın likvidliyini qorumaq",
        "correct": true
      }
    ]
  },
  {
    "num": 346,
    "question": "Bank fəaliyyətinin planlaşdırılması prosesi banka nəyi müəyyənləşdirməyə imkan verir?",
    "options": [
      {
        "text": "bankın məqsədini, vəzifələrini, strategiya və taktikasını",
        "correct": true
      },
      {
        "text": "müştərilərin tələblərinin yerinə yetirilməsini",
        "correct": false
      },
      {
        "text": "kreditləşmə prosesinin müqavilə əsasında aparılmasını",
        "correct": false
      },
      {
        "text": "ödəniş sisteminin məqsədyönümlülüyünü",
        "correct": false
      },
      {
        "text": "bank fəaliyyətinin əlaqələndirilməsini",
        "correct": false
      }
    ]
  },
  {
    "num": 347,
    "question": "Bank personalının idarə edilməsinin funksional həlqəsidir:",
    "options": [
      {
        "text": "kadrların seçilib yerləşdirilməsi siyasəti",
        "correct": false
      },
      {
        "text": "əməyin ödəniş formalarının olmaması",
        "correct": false
      },
      {
        "text": "əmək intizamı vəziyyəti",
        "correct": false
      },
      {
        "text": "əmək ödənişlərinin həvəsləndirici sisteminin olmaması",
        "correct": false
      },
      {
        "text": "əməyin ödənilməsi və həvəsləndirilməsi",
        "correct": true
      }
    ]
  },
  {
    "num": 348,
    "question": "Bankın qeyri-qənaətbəxş idarə edilmə əlamətidir:",
    "options": [
      {
        "text": "bank məhsulları haqqında geniş məlumat sistemini yaratmaq",
        "correct": false
      },
      {
        "text": "kreditləşmə prinsiplərini əldə rəhbər tutmaq",
        "correct": false
      },
      {
        "text": "kredit və depozitlərin müddətlərinə əməl etməmək",
        "correct": true
      },
      {
        "text": "personalın idarə edilməsi",
        "correct": false
      },
      {
        "text": "müştərilərin tələblərinin ödənilməsinə istinad etmək",
        "correct": false
      }
    ]
  },
  {
    "num": 349,
    "question": "Bank sferasında differensial xidmət nəyə əsaslanır?",
    "options": [
      {
        "text": "risk-menecmentin tələblərinə",
        "correct": false
      },
      {
        "text": "bankın müştərilərlə qarşılıqlı münasibətlərinin müqavilə xarakterliliyinə",
        "correct": false
      },
      {
        "text": "bank fəaliyyətinin xüsusiliyinə",
        "correct": false
      },
      {
        "text": "bank məhsullarının abstraktlığına",
        "correct": false
      },
      {
        "text": "bank fəaliyyətinin universallığına",
        "correct": true
      }
    ]
  },
  {
    "num": 350,
    "question": "Marketinq xidmətinin fəaliyyətinə aiddir:",
    "options": [
      {
        "text": "tədbirlərin həyata keçirilməsinin hazırlanması",
        "correct": false
      },
      {
        "text": "bank rəhbərliyinə təkliflərin işlənib hazırlanması",
        "correct": false
      },
      {
        "text": "bütün cavablar düzdür",
        "correct": true
      },
      {
        "text": "bank xidmətləri bazarının təhlili",
        "correct": false
      },
      {
        "text": "marketinq planının hazırlanması",
        "correct": false
      }
    ]
  },
  {
    "num": 351,
    "question": "Bank menecmentinin əsas prinsiplərindən biridir:",
    "options": [
      {
        "text": "daxili uçotun vəziyyətini müəyyənləşdirmək",
        "correct": false
      },
      {
        "text": "bankın əməliyyatlarını həyata keçirmək",
        "correct": false
      },
      {
        "text": "bank texnologiyalarının səmərəsizliyi",
        "correct": false
      },
      {
        "text": "bank fəaliyyətinin nəticələri və göstəricilərinin uçotu",
        "correct": false
      },
      {
        "text": "heyyətin səmərəli təşkili və ondan səmərəli istifadə",
        "correct": true
      }
    ]
  },
  {
    "num": 352,
    "question": "Faktor- vasitəçi rolunda çıxış edə bilər:",
    "options": [
      {
        "text": "Mərkəzi Bankın faktorinq idarəsi",
        "correct": false
      },
      {
        "text": "bankın uçot şöbəsi",
        "correct": false
      },
      {
        "text": "bankın kredit şöbəsi",
        "correct": false
      },
      {
        "text": "bankın faktorinq bölməsi",
        "correct": true
      },
      {
        "text": "bankın baş mühasibi",
        "correct": false
      }
    ]
  },
  {
    "num": 353,
    "question": "Vasitəçilik əməliyyatı hesab edilir:",
    "options": [
      {
        "text": "kassa əməliyyatları",
        "correct": false
      },
      {
        "text": "ipoteka",
        "correct": false
      },
      {
        "text": "kredit",
        "correct": false
      },
      {
        "text": "investisiya",
        "correct": false
      },
      {
        "text": "forfeytinq",
        "correct": true
      }
    ]
  },
  {
    "num": 354,
    "question": "Bankın vasitəçilik əməliyyatı hesab edilir:",
    "options": [
      {
        "text": "maliyyə əməliyyatı",
        "correct": false
      },
      {
        "text": "kreditlərin rəsmiləşdirilməsi əməliyyatı",
        "correct": false
      },
      {
        "text": "kreditləşmə obyektlərinin müəyyən olunma əməliyyatı",
        "correct": false
      },
      {
        "text": "bankda hesabların açılması əməliyyatı",
        "correct": false
      },
      {
        "text": "faktorinq əməliyyatı",
        "correct": true
      }
    ]
  },
  {
    "num": 355,
    "question": "Bankın trast şöbələri öz xidmətinə görə alırlar:",
    "options": [
      {
        "text": "günəmuzd əmək haqqı",
        "correct": false
      },
      {
        "text": "status",
        "correct": false
      },
      {
        "text": "differensial əmək haqqı",
        "correct": false
      },
      {
        "text": "komisyon mükafat",
        "correct": true
      },
      {
        "text": "lisenziya",
        "correct": false
      }
    ]
  },
  {
    "num": 356,
    "question": "Lizinq alanların aldıqları kredit....... formasında olur:",
    "options": [
      {
        "text": "nağd pul",
        "correct": false
      },
      {
        "text": "pul",
        "correct": false
      },
      {
        "text": "nağdsız pul",
        "correct": false
      },
      {
        "text": "əmlak",
        "correct": true
      },
      {
        "text": "veksel",
        "correct": false
      }
    ]
  },
  {
    "num": 357,
    "question": "Bankın vasitəçilik əməliyyatına daxildir:",
    "options": [
      {
        "text": "trast əməliyyatları",
        "correct": true
      },
      {
        "text": "kredit qabiliyyətini müəyyən etmək əməliyyatları",
        "correct": false
      },
      {
        "text": "blank əməliyyatları",
        "correct": false
      },
      {
        "text": "tibet əməliyyatları",
        "correct": false
      },
      {
        "text": "investisiya əməliyyatları",
        "correct": false
      }
    ]
  },
  {
    "num": 358,
    "question": "Kommersiya banklarının vasitəçilik əməliyyatıdır:",
    "options": [
      {
        "text": "sığorta əməliyyatları",
        "correct": false
      },
      {
        "text": "sahələrin kreditləşdirilməsi",
        "correct": false
      },
      {
        "text": "investisiya əməliyyatları",
        "correct": false
      },
      {
        "text": "lizinq əməliyyatları",
        "correct": true
      },
      {
        "text": "kənd təsərrüfatının kreditləşdirilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 359,
    "question": "Vasitəçilik əməliyyatıdır:",
    "options": [
      {
        "text": "balans",
        "correct": false
      },
      {
        "text": "kredit",
        "correct": false
      },
      {
        "text": "sığorta əməliyyatları",
        "correct": false
      },
      {
        "text": "istehlak əməliyyatları",
        "correct": false
      },
      {
        "text": "forfeytinq",
        "correct": true
      }
    ]
  },
  {
    "num": 360,
    "question": "Bankların faiz gəlirlərinin təhlilinə aiddir:",
    "options": [
      {
        "text": "qiymətli kağızlar üzrə gəlirlərin təhlili",
        "correct": false
      },
      {
        "text": "komisyon gəlirlərə görə təhlil",
        "correct": false
      },
      {
        "text": "kreditlər üzrə gəlirlərin təhlili",
        "correct": false
      },
      {
        "text": "valyutalar üzrə gəlirlərin təhlili",
        "correct": false
      },
      {
        "text": "hamısı",
        "correct": true
      }
    ]
  },
  {
    "num": 361,
    "question": "Bank aktivlərinin təhlili dedikdə...........nə başa düşülür:",
    "options": [
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "bank resurslarının məbləği",
        "correct": false
      },
      {
        "text": "bank resurslarının müddəti",
        "correct": false
      },
      {
        "text": "bank resurslarından istifadə edilməsi",
        "correct": false
      },
      {
        "text": "bank resurslarının məqsədi",
        "correct": false
      }
    ]
  },
  {
    "num": 362,
    "question": "Kommersiya banklarının II dərəcəli kapitalı .....kapitaldır:",
    "options": [
      {
        "text": "I və II dərəcəli kapitalın vəsaitləri olan",
        "correct": false
      },
      {
        "text": "sonuncu",
        "correct": false
      },
      {
        "text": "ilkin",
        "correct": false
      },
      {
        "text": "ilkin və sonuncu",
        "correct": false
      },
      {
        "text": "əlavə",
        "correct": true
      }
    ]
  },
  {
    "num": 363,
    "question": "Bankın filialı ......:",
    "options": [
      {
        "text": "bank lisenziyası verən şöbədir",
        "correct": false
      },
      {
        "text": "bankın öhdəliklərinə görə məsuliyyət daşıyan bölmədir",
        "correct": false
      },
      {
        "text": "kommersiya banklarına sənəd verən bölmədir",
        "correct": false
      },
      {
        "text": "bank lisenziyasında nəzərdə tutulmuş fəaliyyət növlərini yerinə yetirən bölmədir",
        "correct": true
      },
      {
        "text": "Maliyyə Nazirliyinin verdiyi səlahiyyət daxilində fəaliyyət göstərən bölmədir",
        "correct": false
      }
    ]
  },
  {
    "num": 364,
    "question": "Kommersiya banklarının nizamnamə kapitalının minimum həcmi.......:",
    "options": [
      {
        "text": "50 mln. manatdır",
        "correct": true
      },
      {
        "text": "500 mln. manatdır",
        "correct": false
      },
      {
        "text": "10 mln. manatdır",
        "correct": false
      },
      {
        "text": "40 mln. manatdır",
        "correct": false
      },
      {
        "text": "məhdudiyyət qoyulmur",
        "correct": false
      }
    ]
  },
  {
    "num": 365,
    "question": "Bankın Nizamnamə kapitalında dəyişiklik ... edilir:",
    "options": [
      {
        "text": "Muşahidə Şurasının qərarı ilə",
        "correct": false
      },
      {
        "text": "Səhmdarların Ümumi Yığıncağının qərarı ilə",
        "correct": true
      },
      {
        "text": "Auditorlar Palatasının qərarı ilə",
        "correct": false
      },
      {
        "text": "İdarə Heyətinin qərarı ilə",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyinin razılığı ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 366,
    "question": "Kommersiya bankları ……üzrə əməliyyatları yerinə yetirirlər:",
    "options": [
      {
        "text": "yalnız kredit əməliyyatları",
        "correct": false
      },
      {
        "text": "uçot dərəcəsini müəyyənləşdirirlər",
        "correct": false
      },
      {
        "text": "yalnız fiziki şəxslərin pul vəsaitlərinin əmanətə cəlb edilməsi",
        "correct": false
      },
      {
        "text": "fiziki və hüquqi şəxslərin pul vəsaitlərinin əmanətə cəlb edilməsi",
        "correct": true
      },
      {
        "text": "yalnız faktorinq əməliyyatları",
        "correct": false
      }
    ]
  },
  {
    "num": 367,
    "question": "Kommersiya banklarının strateji vəzifələrini müəyyən edir:",
    "options": [
      {
        "text": "Mərkəzi Bankın İdarə Heyəti",
        "correct": false
      },
      {
        "text": "Kredit Komitəsi",
        "correct": false
      },
      {
        "text": "Səhmdarların Ümumi Yığıncağı",
        "correct": true
      },
      {
        "text": "Bankın İdarə Heyəti",
        "correct": false
      },
      {
        "text": "Audit Komitəsi",
        "correct": false
      }
    ]
  },
  {
    "num": 368,
    "question": "Kommersiya bankının funksiyasıdır:",
    "options": [
      {
        "text": "sənəd dövriyyəsini həyata keçirmək",
        "correct": false
      },
      {
        "text": "Milli Məclisə hesabat vermək",
        "correct": false
      },
      {
        "text": "emissiya bankıdır",
        "correct": false
      },
      {
        "text": "vəsaitlərin cəlb edilməsi",
        "correct": true
      },
      {
        "text": "banklar bankıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 369,
    "question": "Kommersiya banklarının nizamnamə kapitalı yaradılır:",
    "options": [
      {
        "text": "bankın yaranma anında Mərkəzi Bankın vəsaiti hesabına",
        "correct": false
      },
      {
        "text": "bank yarandıqdan sonra təsisçilər tərəfindən",
        "correct": false
      },
      {
        "text": "büdcə vəsaiti hesabına",
        "correct": false
      },
      {
        "text": "bankın yaranması anında təsisçilərin vəsaiti hesabına",
        "correct": true
      },
      {
        "text": "bankın yaranma anında dövlət vəsaiti hesabına",
        "correct": false
      }
    ]
  },
  {
    "num": 370,
    "question": "Kommersiya banklarının funksiyasıdır:",
    "options": [
      {
        "text": "Milli Məclisə hesabat vermək",
        "correct": false
      },
      {
        "text": "Prezidentə hesabat vermək",
        "correct": false
      },
      {
        "text": "banknot emissiyası",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyinə hesabat vermək",
        "correct": false
      },
      {
        "text": "müştərilərə hesablaşma-kassa xidməti göstərmək",
        "correct": true
      }
    ]
  },
  {
    "num": 371,
    "question": "Kommersiya bankı ………:",
    "options": [
      {
        "text": "fiziki və hüquqi şəxslərin kreditorudur",
        "correct": true
      },
      {
        "text": "depozit siyasətini müəyyən edir",
        "correct": false
      },
      {
        "text": "dövlətin xəzinədarıdır",
        "correct": false
      },
      {
        "text": "regional kassa hesablaşma mərkəzidir",
        "correct": false
      },
      {
        "text": "dövlətin pul siyasətini müəyyən edir",
        "correct": false
      }
    ]
  },
  {
    "num": 372,
    "question": "Daxili audit necə fəaliyyət göstərir?",
    "options": [
      {
        "text": "monetar",
        "correct": false
      },
      {
        "text": "qanundan kənar",
        "correct": false
      },
      {
        "text": "qərəzli",
        "correct": false
      },
      {
        "text": "asılı",
        "correct": false
      },
      {
        "text": "müstəqil",
        "correct": true
      }
    ]
  },
  {
    "num": 373,
    "question": "Daxili auditin məqsədi:",
    "options": [
      {
        "text": "investisiya əməliyyatlarını həyata keçirməkdir",
        "correct": false
      },
      {
        "text": "bank lisenziyası verməkdir",
        "correct": false
      },
      {
        "text": "depozit cəlb etməkdir",
        "correct": false
      },
      {
        "text": "aşkar edilmiş nöqsanların aradan qaldırılması və tövsiyyələri işləyib hazırlamaqdır",
        "correct": true
      },
      {
        "text": "kredit cəlb etməkdir",
        "correct": false
      }
    ]
  },
  {
    "num": 374,
    "question": "Daxili auditin prinsiplərini seçin:",
    "options": [
      {
        "text": "peşəkarlıq",
        "correct": false
      },
      {
        "text": "davamlılıq",
        "correct": false
      },
      {
        "text": "tərəfsizlik",
        "correct": false
      },
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "müstəqillik",
        "correct": false
      }
    ]
  },
  {
    "num": 375,
    "question": "Bankın marketinq prosesi bir sıra mərhələlərdən ibarətdir:",
    "options": [
      {
        "text": "maliyyə bazarının kompleks tətbiqi",
        "correct": false
      },
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "istehlakçıların konkret bank xidmətinə olan tələbinin öyrənilməsi",
        "correct": false
      },
      {
        "text": "marketinqin planlaşdırılması",
        "correct": false
      },
      {
        "text": "reklam",
        "correct": false
      }
    ]
  },
  {
    "num": 376,
    "question": "İri məbləğli ödənişlərin köçürülməsi sistemidir:",
    "options": [
      {
        "text": "kredit sistemi",
        "correct": false
      },
      {
        "text": "XÖHKS",
        "correct": false
      },
      {
        "text": "HÖP",
        "correct": false
      },
      {
        "text": "AZİPS",
        "correct": true
      },
      {
        "text": "depozit sistemi",
        "correct": false
      }
    ]
  },
  {
    "num": 377,
    "question": "Mərkəzi Bankın pul siyasəti alətidir:",
    "options": [
      {
        "text": "açıq bazarda əməliyyatların aparılması",
        "correct": false
      },
      {
        "text": "kredit təşkilatlarının yenidən maliyyələşdirilməsi",
        "correct": false
      },
      {
        "text": "kredit təşkilatları üçün məcburi ehtiyatların müəyyən edilməsi",
        "correct": false
      },
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "faiz dərəcələrinin müəyyən edilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 378,
    "question": "Manatın xarici valyutalara nisbətdə rəsmi məzənnəsini mütəmadi müəyyən edir və elan edir:",
    "options": [
      {
        "text": "kommersiya bankları",
        "correct": false
      },
      {
        "text": "maliyyə idarələri",
        "correct": false
      },
      {
        "text": "SWİFT",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "BOKT-lar (Bank Olmayan Kredit Təşkilatı)",
        "correct": false
      }
    ]
  },
  {
    "num": 379,
    "question": "\"Milli Bank\" ifadəsi nə zamandan \"Mərkəzi Bank\" ifadəsi ilə əvəz olunmuşdur:",
    "options": [
      {
        "text": "1990",
        "correct": false
      },
      {
        "text": "2023",
        "correct": false
      },
      {
        "text": "2009",
        "correct": true
      },
      {
        "text": "2020",
        "correct": false
      },
      {
        "text": "2000",
        "correct": false
      }
    ]
  },
  {
    "num": 380,
    "question": "Kütləvi Ödənişlər üzrə Mərkəzləşdirilmiş İnformasiya Sistemidir:",
    "options": [
      {
        "text": "HÖP",
        "correct": false
      },
      {
        "text": "AZİPS",
        "correct": false
      },
      {
        "text": "SWİFT",
        "correct": false
      },
      {
        "text": "KÖMİS",
        "correct": true
      },
      {
        "text": "AÖS",
        "correct": false
      }
    ]
  },
  {
    "num": 381,
    "question": "…. nağd pul nişanlarının emissiyasında inhisarçı hüquqa malikdir:",
    "options": [
      {
        "text": "Auditorlar Palatası",
        "correct": false
      },
      {
        "text": "Vergilər Nazirliyi",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyi",
        "correct": false
      },
      {
        "text": "Parlament",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      }
    ]
  },
  {
    "num": 382,
    "question": "Bank passivlərinin təhlilində bir qayda olaraq....kapitalın təhlilinə xüsusi yer verilir:",
    "options": [
      {
        "text": "istehlak",
        "correct": false
      },
      {
        "text": "trast",
        "correct": false
      },
      {
        "text": "ipoteka",
        "correct": false
      },
      {
        "text": "risk",
        "correct": false
      },
      {
        "text": "məcmu",
        "correct": true
      }
    ]
  },
  {
    "num": 383,
    "question": "Banklarda maliyyə təhlilinin əsas məlumat mənbəyini təşkil edən sənədlər hansılardır:",
    "options": [
      {
        "text": "xarici normativ sənədlər",
        "correct": false
      },
      {
        "text": "daxili normativ sənədlər",
        "correct": false
      },
      {
        "text": "təsis sənədləri",
        "correct": false
      },
      {
        "text": "maliyyə,mühasibat və statistik hesabatlar",
        "correct": true
      },
      {
        "text": "biznes planlar",
        "correct": false
      }
    ]
  },
  {
    "num": 384,
    "question": "Banklar və Bank Olmayan Kredit Təşkilatları (BOKT) ölkə ərazisində hesablaşmaların aparılmasından ötrü biri digərində … … hesablar açırlar:",
    "options": [
      {
        "text": "loro",
        "correct": false
      },
      {
        "text": "müxbir",
        "correct": true
      },
      {
        "text": "xəzinə",
        "correct": false
      },
      {
        "text": "veksel",
        "correct": false
      },
      {
        "text": "büdcə",
        "correct": false
      }
    ]
  },
  {
    "num": 385,
    "question": "Mərkəzi Bankın əsas resurs mənbəyidir:",
    "options": [
      {
        "text": "lizinq faizləri",
        "correct": false
      },
      {
        "text": "nağdsız ödənişlər",
        "correct": false
      },
      {
        "text": "fiziki şəxslərə verdiyi kreditlər",
        "correct": false
      },
      {
        "text": "dondurulmuş vəsaitlər",
        "correct": false
      },
      {
        "text": "banknot emissiyası",
        "correct": true
      }
    ]
  },
  {
    "num": 386,
    "question": "Mərkəzi Bankın nizamnamə fondu ........ təşkil edir:",
    "options": [
      {
        "text": "500 min manat",
        "correct": false
      },
      {
        "text": "5 mln.manat",
        "correct": false
      },
      {
        "text": "500 mln.manat",
        "correct": true
      },
      {
        "text": "25 mln.dollar",
        "correct": false
      },
      {
        "text": "8 mln.manat",
        "correct": false
      }
    ]
  },
  {
    "num": 387,
    "question": "Manat necə valyutadır:",
    "options": [
      {
        "text": "ehtiyat",
        "correct": false
      },
      {
        "text": "açıq",
        "correct": false
      },
      {
        "text": "qapalı",
        "correct": false
      },
      {
        "text": "qismən konvertasiya olunan",
        "correct": true
      },
      {
        "text": "tam dönərli",
        "correct": false
      }
    ]
  },
  {
    "num": 388,
    "question": "O hansı valyutadır ki, yalnız bir ölkənin hüdudları çərçivəsində fəalliyət göstərir və heç bir xarici valyutaya dəyişdirilmir:",
    "options": [
      {
        "text": "dünya pulu",
        "correct": false
      },
      {
        "text": "açıq valyuta",
        "correct": false
      },
      {
        "text": "qismən konvertasiya olunan",
        "correct": false
      },
      {
        "text": "qapalı valyuta",
        "correct": true
      },
      {
        "text": "ehtiyat valyutası",
        "correct": false
      }
    ]
  },
  {
    "num": 389,
    "question": "Akkreditivin müsbət cəhəti:",
    "options": [
      {
        "text": "bank hesabında olan vəsaitin çoxluğudur",
        "correct": false
      },
      {
        "text": "fazilərin ödənilməsinin tezliyidir",
        "correct": false
      },
      {
        "text": "malgöndərənə ödəmənin yerinə yetirilməsi üçün zəmanətin verilməsidir",
        "correct": true
      },
      {
        "text": "ödənişin real vaxt rejimində olmasıdır",
        "correct": false
      },
      {
        "text": "sövdələşmənin tərtibatının qeyri-müəyyənliyidir",
        "correct": false
      }
    ]
  },
  {
    "num": 390,
    "question": "Çek kitabçalarının blank formaları müəyyən edilir:",
    "options": [
      {
        "text": "rezidentlər tərəfindən",
        "correct": false
      },
      {
        "text": "auditorlar tərəfindən",
        "correct": false
      },
      {
        "text": "Sığorta təşkilatları tərəfindən",
        "correct": false
      },
      {
        "text": "İqtisadiyyat Nazirliyi tərəfindən",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank tərəfindən",
        "correct": true
      }
    ]
  },
  {
    "num": 391,
    "question": "Bank tərəfindən ödəyicidən ödəmə tapşırığı icra üçün qəbul edilir, yalnız:",
    "options": [
      {
        "text": "ödəyici vəsaiti başqasına verdikdə",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın İdarəçiliyinin ödəmə üçün razılığı əsasında",
        "correct": false
      },
      {
        "text": "ödəyici kommersiya təşkilatı olduğu halda",
        "correct": false
      },
      {
        "text": "ödəyicinin hesabında vəsaiti olduğu halda",
        "correct": true
      },
      {
        "text": "benefisiar bankın razılığı ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 392,
    "question": "Mənfəət əldə etmək üçün bankların öz xüsusi vəsaitlərindən və cəlb olunmuş vəsaitlərdən istifadə etməsi .........:",
    "options": [
      {
        "text": "lizinq əməliyyatıdır",
        "correct": false
      },
      {
        "text": "aktiv və passiv əməliyyatdır",
        "correct": false
      },
      {
        "text": "passiv əməliyyatdır",
        "correct": false
      },
      {
        "text": "vasitəçilik əməliyyatıdır",
        "correct": false
      },
      {
        "text": "aktiv əməliyyatdır",
        "correct": true
      }
    ]
  },
  {
    "num": 393,
    "question": "Banklarda I dərəcəli kapital hesab edilir:",
    "options": [
      {
        "text": "əlavə kapital,sonradan yaradılan əlavə kapital",
        "correct": false
      },
      {
        "text": "II dərəcəli kapital və son kapital",
        "correct": false
      },
      {
        "text": "sonradan yaranan kapital",
        "correct": false
      },
      {
        "text": "əsas və II dərəcəli kapital",
        "correct": false
      },
      {
        "text": "əsas kapital",
        "correct": true
      }
    ]
  },
  {
    "num": 394,
    "question": "Banklarda depozit əməliyyatları hansı vəsaitlər hesab olunur?",
    "options": [
      {
        "text": "bankın dövriyyəsində olan vəsaitlər",
        "correct": false
      },
      {
        "text": "müştərilərin borcu olan vəsaitlər",
        "correct": false
      },
      {
        "text": "bankların fiziki və hüquqi şəxslərə verdikləri kreditlər",
        "correct": false
      },
      {
        "text": "bank masasında olan vəsaitlər",
        "correct": false
      },
      {
        "text": "cəlb edilmiş vəsaitlər",
        "correct": true
      }
    ]
  },
  {
    "num": 395,
    "question": "Qeyri-kommersiya təşkilatları bankın səhmdarı ola bilərlər?",
    "options": [
      {
        "text": "Nazirlər Kabinetinin razılığı ilə ola bilər",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirinin razılığı ilə ola bilər",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın razılığı ilə ola bilər",
        "correct": false
      },
      {
        "text": "ola bilməzlər",
        "correct": true
      },
      {
        "text": "Sığorta İdarəsinin icazasi ilə ola bilər",
        "correct": false
      }
    ]
  },
  {
    "num": 396,
    "question": "Kommersiya banklarına lisenziyanı (xüsusi icazə) kim verir?",
    "options": [
      {
        "text": "Beynəlxalq Bank",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyi",
        "correct": false
      },
      {
        "text": "Banklar Assosiasiyası",
        "correct": false
      },
      {
        "text": "Azərbaycan Respublikasının Mərkəzi Bankı",
        "correct": true
      },
      {
        "text": "bankın nümayəndəliyi",
        "correct": false
      }
    ]
  },
  {
    "num": 397,
    "question": "Bank lisenziyası nədir və kim tərəfindən verilir:",
    "options": [
      {
        "text": "xüsusi razılıqdır və Mərkəzi Bank tərəfindən verilir",
        "correct": true
      },
      {
        "text": "xüsusi razılıqdır yalnız Banklar Assosiasiyası tərəfindən verilir",
        "correct": false
      },
      {
        "text": "xüsusi razılıqdır BOKT(Bank Olmayan Kredit Təşkilatı) tərəfindən verilir",
        "correct": false
      },
      {
        "text": "xüsusi razılıqdır Milli Məclis tərəfindən verilir",
        "correct": false
      },
      {
        "text": "xüsusi razılıqdır Beynəlxalq Bank tərəfindən verilir",
        "correct": false
      }
    ]
  },
  {
    "num": 398,
    "question": "Bank lisenziyası ləğv edilə bilərmi?",
    "options": [
      {
        "text": "kredit bürosunun qərarı ilə ləğv edilə bilər",
        "correct": false
      },
      {
        "text": "beş illiyinə ləğv edilə bilər",
        "correct": false
      },
      {
        "text": "ləğv edilə bilməz",
        "correct": false
      },
      {
        "text": "ləğv edilə bilər",
        "correct": true
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatlarının (BOKT) qərarı ilə ləğv edilə bilər",
        "correct": false
      }
    ]
  },
  {
    "num": 399,
    "question": "Nağdsız hesablaşma sistemlərinin sabit işləməsini təmin etmək, onların fəaliyyətini təşkil etmək, əlaqələndirmək və nəzarət etmək ……səlahiyyətindədir:",
    "options": [
      {
        "text": "kommersiya banklarının",
        "correct": false
      },
      {
        "text": "Milli Depozit Sisteminin",
        "correct": false
      },
      {
        "text": "Hesablama Palatasının",
        "correct": false
      },
      {
        "text": "Klirinq Mərkəzinin",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın",
        "correct": true
      }
    ]
  },
  {
    "num": 400,
    "question": "Mərkəzi Bankın balansının passiv maddəsidir:",
    "options": [
      {
        "text": "ehtiyatda olan nağd pul kütləsi",
        "correct": false
      },
      {
        "text": "qiymətli metallar",
        "correct": false
      },
      {
        "text": "qiymətli kağızlar",
        "correct": false
      },
      {
        "text": "dövriyyədə olan nağd pul kütləsi",
        "correct": true
      },
      {
        "text": "qeyri-rezidentlərin hesablarında yerləşdirilən xarici valytutada olan vəsaitlər",
        "correct": false
      }
    ]
  },
  {
    "num": 401,
    "question": "Kredit təşkilatlarının yenidən maliyyələşdirilməsi:",
    "options": [
      {
        "text": "Mərkəzi Bankın uçot əməliyyatıdır",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın nəzarət etməsidir",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın əsas məqsədidir",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın təşkilati funksiyasıdır",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın pul siyasəti alətidir",
        "correct": true
      }
    ]
  },
  {
    "num": 402,
    "question": "Mərkəzi Bankın yenidən maliyyələşmə əməliyyatı ...:",
    "options": [
      {
        "text": "infliyasiya siyasəti alətidir",
        "correct": false
      },
      {
        "text": "istehlak krediti alətidir",
        "correct": false
      },
      {
        "text": "kontokorrent kredit siyasəti alətidir",
        "correct": false
      },
      {
        "text": "pul siyasəti alətidir",
        "correct": true
      },
      {
        "text": "dövriyyə krediti siyasəti alətidir",
        "correct": false
      }
    ]
  },
  {
    "num": 403,
    "question": "Banknot emissiyası ……xarakteri daşıyır:",
    "options": [
      {
        "text": "fiskal",
        "correct": false
      },
      {
        "text": "büdcə",
        "correct": false
      },
      {
        "text": "kredit",
        "correct": true
      },
      {
        "text": "təmənnalı",
        "correct": false
      },
      {
        "text": "maliyyə",
        "correct": false
      }
    ]
  },
  {
    "num": 404,
    "question": "Mərkəzi Bankın pul kütləsinin artırılmasına yönəldilən siyasəti necə adlanır:",
    "options": [
      {
        "text": "kommersion",
        "correct": false
      },
      {
        "text": "restruksion",
        "correct": false
      },
      {
        "text": "devalvasion",
        "correct": false
      },
      {
        "text": "ekspansionist",
        "correct": true
      },
      {
        "text": "investision",
        "correct": false
      }
    ]
  },
  {
    "num": 405,
    "question": "Azərbaycan Respublikası Mərkəzi Bankının nizamnamə kapitalı və əmlakı ............. mülkiyyətidir:",
    "options": [
      {
        "text": "özəl",
        "correct": false
      },
      {
        "text": "müştərək",
        "correct": false
      },
      {
        "text": "səhmdar",
        "correct": false
      },
      {
        "text": "dövlət",
        "correct": true
      },
      {
        "text": "xüsusi",
        "correct": false
      }
    ]
  },
  {
    "num": 406,
    "question": ".......Azərbaycan Respublikası Mərkəzi Bankının fəaliyyət məqsədi deyil:",
    "options": [
      {
        "text": "manatın möhkəmliyinin təmin edilməsi",
        "correct": false
      },
      {
        "text": "kredit təşkilatlarının kreditləşdirilməsi",
        "correct": false
      },
      {
        "text": "manatın dayanıqlığının təmin edilməsi",
        "correct": false
      },
      {
        "text": "fiziki şəxslərin kreditləşdirilməsi",
        "correct": true
      },
      {
        "text": "uçot dərəcəsinin müəyyən edilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 407,
    "question": "Açıq bazar əməliyatları Mərkəzi Bankın …. üzrə fəaliyyətidir:",
    "options": [
      {
        "text": "nağd pulların alqı satqısı",
        "correct": false
      },
      {
        "text": "qiymətli kağızların alqı satqısı",
        "correct": true
      },
      {
        "text": "əmtəələrin alqı satqısı",
        "correct": false
      },
      {
        "text": "valyutaların alqı satqısı",
        "correct": false
      },
      {
        "text": "plastik kartların alqı satqısı",
        "correct": false
      }
    ]
  },
  {
    "num": 408,
    "question": "Kredit təşkilatlarındakı yaranmış vəziyyətin qiymətləndirilməsindən ötrü Mərkəzi Bank onların fəaliyyətini ….:",
    "options": [
      {
        "text": "sənədləşdirir",
        "correct": false
      },
      {
        "text": "sanksiyalaşdırır",
        "correct": false
      },
      {
        "text": "lisenziyalaşdırır",
        "correct": false
      },
      {
        "text": "monitorinq edir",
        "correct": true
      },
      {
        "text": "ciddi xəbərdarlıq edir",
        "correct": false
      }
    ]
  },
  {
    "num": 409,
    "question": "Azərbaycan Respublikasının Mərkəzi Bankının kapitalı …. hesabına formalaşır:",
    "options": [
      {
        "text": "əhalinin vəsaitləri",
        "correct": false
      },
      {
        "text": "fərdi şəxslərin passiv vəsaitləri",
        "correct": false
      },
      {
        "text": "əmtəə emissiyası yolu ilə",
        "correct": false
      },
      {
        "text": "dövlətin vəsaitləri",
        "correct": true
      },
      {
        "text": "kommersiya banklarının fondlarının vəsaitləri",
        "correct": false
      }
    ]
  },
  {
    "num": 410,
    "question": "Pul kütləsinin ən likvid hissəsi:",
    "options": [
      {
        "text": "xarici valyutada olan depozitlərdir",
        "correct": false
      },
      {
        "text": "virtual pullardır",
        "correct": false
      },
      {
        "text": "nağd pullardır",
        "correct": true
      },
      {
        "text": "kvazi pullardır",
        "correct": false
      },
      {
        "text": "nağdsız pullardır",
        "correct": false
      }
    ]
  },
  {
    "num": 411,
    "question": "Bankda pul saxlanan yer necə adlanır?",
    "options": [
      {
        "text": "kassa stolu",
        "correct": false
      },
      {
        "text": "şkaf",
        "correct": false
      },
      {
        "text": "mədaxil,məxaric kassası",
        "correct": false
      },
      {
        "text": "kassa qovşağı",
        "correct": true
      },
      {
        "text": "kassa məkanı",
        "correct": false
      }
    ]
  },
  {
    "num": 412,
    "question": "Kassa sənədlərini imzalayan məsul şəxslərin imza nümunələri kassa işçilərində olmalıdırmı?",
    "options": [
      {
        "text": "olmamalıdır",
        "correct": false
      },
      {
        "text": "göstəriş olduqda",
        "correct": false
      },
      {
        "text": "olmaya da bilər",
        "correct": false
      },
      {
        "text": "olmalıdır",
        "correct": true
      },
      {
        "text": "istisna hallarda",
        "correct": false
      }
    ]
  },
  {
    "num": 413,
    "question": "Dövriyyə kassasından ehtiyat fonduna vəsait köçürülməsi:",
    "options": [
      {
        "text": "Mərkəzi Bankın yazılı sifarişi ilə həyata keçirilir",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın yazılı sərəncamı əsasında həyata keçirilir",
        "correct": false
      },
      {
        "text": "Sığorta Təşkilatlarının icazəsi ilə həyata keçirilir",
        "correct": false
      },
      {
        "text": "kredit təşkilatları tərəfindən sərbəst həyata keçirilir",
        "correct": true
      },
      {
        "text": "Nazirlər Kabinetinin razılığı olmalıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 414,
    "question": "Beynəlxalq kredit kreditin.....:",
    "options": [
      {
        "text": "müqaviləsidir",
        "correct": false
      },
      {
        "text": "depozitidir",
        "correct": false
      },
      {
        "text": "prinsipidir",
        "correct": false
      },
      {
        "text": "müddətidir",
        "correct": false
      },
      {
        "text": "formasıdır",
        "correct": true
      }
    ]
  },
  {
    "num": 415,
    "question": "Lizinq əməliyyatlarının iştirakçılarını göstərin:",
    "options": [
      {
        "text": "İpoteka Fondu və lizinq alan",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": false
      },
      {
        "text": "faktorinq şirkəti,ipoteka fondları",
        "correct": false
      },
      {
        "text": "lizinq verən, lizinq alan, satıcı",
        "correct": true
      },
      {
        "text": "trast şirkəti və investisiya idarələri",
        "correct": false
      }
    ]
  },
  {
    "num": 416,
    "question": "Loro hesab nədir?",
    "options": [
      {
        "text": "Bank Olmayan Kredit Təşkilatlarındakı (BOKT) hesablar",
        "correct": false
      },
      {
        "text": "milli kredit təşkilatlarında fiziki şəxslərin hesabları",
        "correct": false
      },
      {
        "text": "kommersiya banklarının Mərkəzi Bankdakı hesabları",
        "correct": false
      },
      {
        "text": "milli kredit təşkilatlarında xarici bankların hesabları",
        "correct": true
      },
      {
        "text": "kommersiya banklarının liro hesabları",
        "correct": false
      }
    ]
  },
  {
    "num": 417,
    "question": "Nostro hesab nədir?",
    "options": [
      {
        "text": "fiziki şəxslərin Mərkəzi Bankda olan hesabları",
        "correct": false
      },
      {
        "text": "kommersiya banklarının Mərkəzi Bankda olan hesabları",
        "correct": false
      },
      {
        "text": "fiziki və hüquqi şəxslərin Bank Olmayan Kredit Təşkilatlarında (BOKT) mövcud olan hesabları",
        "correct": false
      },
      {
        "text": "xarici banklarda milli bankların mövcud olan bank hesabı",
        "correct": true
      },
      {
        "text": "kommersiya banklarının kassa hesabı",
        "correct": false
      }
    ]
  },
  {
    "num": 418,
    "question": "Kredit təşkilatlarının nizamnamə kapitalının həcmi.....manatdır:",
    "options": [
      {
        "text": "100.mln",
        "correct": false
      },
      {
        "text": "200.mln",
        "correct": false
      },
      {
        "text": "50.mln",
        "correct": true
      },
      {
        "text": "500.mln",
        "correct": false
      },
      {
        "text": "1.mln",
        "correct": false
      }
    ]
  },
  {
    "num": 419,
    "question": "Mərkəzi Banklar kommersiya banklarından …. hüququnun alınması yolu ilə meydana gəlmişlər:",
    "options": [
      {
        "text": "müəssisə və təşkilatların kreditləşdirilməsi",
        "correct": false
      },
      {
        "text": "müvəqqəti sərbəst pul vəsaitlərinin toplanması",
        "correct": false
      },
      {
        "text": "hesablaşmaların aparılması",
        "correct": false
      },
      {
        "text": "banknot emissiyası",
        "correct": true
      },
      {
        "text": "depozit əməliyyatlarının aparılması",
        "correct": false
      }
    ]
  },
  {
    "num": 420,
    "question": "Azərbaycan Respublikasının Mərkəzi Bankının kapitalı …. hesabına formalaşır:",
    "options": [
      {
        "text": "əhalinin ianələri",
        "correct": false
      },
      {
        "text": "iqtisadi sahələrə verdiyi kredit hesabına",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın ödədiyi vergilər hesabına",
        "correct": false
      },
      {
        "text": "dövlətin vəsaitləri",
        "correct": true
      },
      {
        "text": "fiziki şəxslərin vəsaitləri",
        "correct": false
      }
    ]
  },
  {
    "num": 421,
    "question": "Kredit təşkilatlarındakı yaranmış vəziyyətin qiymətləndirilməsindən ötrü Mərkəzi Bank onların fəaliyyətini ….:",
    "options": [
      {
        "text": "tənzimləyir",
        "correct": false
      },
      {
        "text": "monitorinq edir",
        "correct": true
      },
      {
        "text": "lisenziyanı ləğv edir",
        "correct": false
      },
      {
        "text": "sanksiyalaşdırır",
        "correct": false
      },
      {
        "text": "lisenziyalaşdırır",
        "correct": false
      }
    ]
  },
  {
    "num": 422,
    "question": "Mərkəzi Bankın əsas müştəriləri kimlərdir:",
    "options": [
      {
        "text": "kənd təsərrüfatı sahələri",
        "correct": false
      },
      {
        "text": "xarici vətəndaşlar",
        "correct": false
      },
      {
        "text": "kooperativ təşkilatlar",
        "correct": false
      },
      {
        "text": "kredit təşkilatları",
        "correct": true
      },
      {
        "text": "dövlət əhəmiyyətli iri sənaye müəssisələri",
        "correct": false
      }
    ]
  },
  {
    "num": 423,
    "question": "Azərbaycan Respublikası Mərkəzi Bankının nizamnamə kapitalı və əmlakı ........... mülkiyyətidir:",
    "options": [
      {
        "text": "özəl",
        "correct": false
      },
      {
        "text": "müştərək",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyinin",
        "correct": false
      },
      {
        "text": "dövlət",
        "correct": true
      },
      {
        "text": "səhmdar",
        "correct": false
      }
    ]
  },
  {
    "num": 424,
    "question": "Mərkəzi Bankın passiv əməliyyatıdır:",
    "options": [
      {
        "text": "kassa əməliyyatları",
        "correct": false
      },
      {
        "text": "hesablaşmaların təşkili",
        "correct": false
      },
      {
        "text": "fiziki şəxslərin hesablarına qoyuluşlar",
        "correct": false
      },
      {
        "text": "banknot emissiyası",
        "correct": true
      },
      {
        "text": "banklara qısa müddətli ssuda verilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 425,
    "question": "Azərbaycan Respublikasında bank fəaliyəti ilə məşğul olmaqdan ötrü lisensiyanı kim verir:",
    "options": [
      {
        "text": "Milli Məclis",
        "correct": false
      },
      {
        "text": "Sığorta Şirkətləri",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyi",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "İqtisadiyyat Nazirliyi",
        "correct": false
      }
    ]
  },
  {
    "num": 426,
    "question": "Mərkəzi Bank …. rolunu oynayır:",
    "options": [
      {
        "text": "vətəndaşların kreditləşməsi",
        "correct": false
      },
      {
        "text": "trast əməliyyatlarını həyata keçirmək",
        "correct": false
      },
      {
        "text": "müəssisələrin kreditoru",
        "correct": false
      },
      {
        "text": "dövlətin maliyyə agenti",
        "correct": true
      },
      {
        "text": "ölkənin lizinq mərkəzi",
        "correct": false
      }
    ]
  },
  {
    "num": 427,
    "question": "Mərkəzi Bankın pul siyasəti alətidir:",
    "options": [
      {
        "text": "fiziki şəxslərə kredit verilməsi",
        "correct": false
      },
      {
        "text": "vasitəçilik əməliyyatlarının həyata keçirilməsinə nəzarət",
        "correct": false
      },
      {
        "text": "xüsusi kapitala nəzarət",
        "correct": false
      },
      {
        "text": "açıq bazarda əməliyyatların aparılması",
        "correct": true
      },
      {
        "text": "hesablaşmalara nəzarət",
        "correct": false
      }
    ]
  },
  {
    "num": 428,
    "question": "Mərkəzi Bankın aktiv əməliyyatı dedikdə nə başa düşülür?",
    "options": [
      {
        "text": "öz vəsaitlərini itirmək başa düşülür",
        "correct": false
      },
      {
        "text": "öz vəsaitlərini fiziki şəxslərə vermək başa düşülür",
        "correct": false
      },
      {
        "text": "öz vəsaitlərinin ləğvi başa düşülür",
        "correct": false
      },
      {
        "text": "öz resurslarının yerləşdirilməsi başa düşülür",
        "correct": true
      },
      {
        "text": "öz vəsaitlərini gizlətmək başa düşülür",
        "correct": false
      }
    ]
  },
  {
    "num": 429,
    "question": "Mərkəzi Bank öz xərclərini nəyin hesabına ödəyir?",
    "options": [
      {
        "text": "trast vəsaitləri hesabına",
        "correct": false
      },
      {
        "text": "lisenziya hesabına görə",
        "correct": false
      },
      {
        "text": "vətəndaşların vəsaiti hesabına",
        "correct": false
      },
      {
        "text": "öz gəlirləri hesabına",
        "correct": true
      },
      {
        "text": "fiziki şəxslərə verdiyi kreditlər hesabına",
        "correct": false
      }
    ]
  },
  {
    "num": 430,
    "question": "Ölkənin emissiya mərkəzidir:",
    "options": [
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "universal bank",
        "correct": false
      },
      {
        "text": "bankın filialı",
        "correct": false
      },
      {
        "text": "bankın nümayəndəliyi",
        "correct": false
      },
      {
        "text": "ixtisaslaşmış bank",
        "correct": false
      }
    ]
  },
  {
    "num": 431,
    "question": "Mərkəzi Bankın passiv əməliyyatlarını göstərin:",
    "options": [
      {
        "text": "yalnız banknot emissiyası",
        "correct": false
      },
      {
        "text": "kommersiya banklarına sığorta xidməti göstərmək",
        "correct": false
      },
      {
        "text": "vasitəçilik əməliyyatlarını həyata keçirmək, banknot emissiyası",
        "correct": false
      },
      {
        "text": "banknot emissiyası, kommersiya banklarının vəsaitlərinin xəzinədarlığa qəbulu, xüsusi kapitalın yaradılması üçün aparılan əməliyyatlar",
        "correct": true
      },
      {
        "text": "fiziki şəxslərə xidmət göstərmək",
        "correct": false
      }
    ]
  },
  {
    "num": 432,
    "question": "Müddətlilik kreditin........:",
    "options": [
      {
        "text": "statusudur",
        "correct": false
      },
      {
        "text": "sənədidir",
        "correct": false
      },
      {
        "text": "funksiyasıdır",
        "correct": false
      },
      {
        "text": "prinsipidir",
        "correct": true
      },
      {
        "text": "istifadəsidir",
        "correct": false
      }
    ]
  },
  {
    "num": 433,
    "question": "Rəqəmsal bankların strateji istiqamətidir:",
    "options": [
      {
        "text": "ödəniş infrastrukurunun mexanikləşdirilməsi",
        "correct": false
      },
      {
        "text": "rəqəmsal ödəniş infrastrukturunun əhatə dairəsinin genişləndirilməsi",
        "correct": true
      },
      {
        "text": "ödəniş sisteminin təkmilləşdirilməsi",
        "correct": false
      },
      {
        "text": "ödəniş sisteminin uyğunlaşdırılması",
        "correct": false
      },
      {
        "text": "ödəniş sistemlərinin modernləşməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 434,
    "question": "Qeyd olunanlardan hansı rəqəmsal iş yeridir:",
    "options": [
      {
        "text": "evdən işləmək",
        "correct": false
      },
      {
        "text": "kənar rayondan işləmək",
        "correct": false
      },
      {
        "text": "məzuniyyətdə olarkən işləmək",
        "correct": false
      },
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "istirahətdə olarkən işləmək",
        "correct": false
      }
    ]
  },
  {
    "num": 435,
    "question": "Rəqəmsal bankçılıq .... məqsədi daşıyır:",
    "options": [
      {
        "text": "bütün əməliyyatların modernləşməsi",
        "correct": false
      },
      {
        "text": "bütün əməliyyatların təkmilləşməsi",
        "correct": false
      },
      {
        "text": "bütün əməliyyatların rəqəmsallaşması",
        "correct": true
      },
      {
        "text": "bütün əməliyyatların mexanikləşməsi",
        "correct": false
      },
      {
        "text": "bütün əməliyyatların təhlil olunması",
        "correct": false
      }
    ]
  },
  {
    "num": 436,
    "question": "Rəqəmsal bankçılığın növlərindən olan ağıllı dinamikalardandır:",
    "options": [
      {
        "text": "Google APP",
        "correct": false
      },
      {
        "text": "Pod Google",
        "correct": false
      },
      {
        "text": "Amazon Pod",
        "correct": false
      },
      {
        "text": "Google Home",
        "correct": true
      },
      {
        "text": "Apple Pod",
        "correct": false
      }
    ]
  },
  {
    "num": 437,
    "question": "Rəqəmsal bankçılığı ümumiləşdirən parametrlərdir:",
    "options": [
      {
        "text": "modernləşmə",
        "correct": false
      },
      {
        "text": "mobil bankçılıq və təkamül yenilənməsi",
        "correct": false
      },
      {
        "text": "onlayn bankçılıq və mexanikləşmə",
        "correct": false
      },
      {
        "text": "onlayn bankçılıq və mobil bankçılıq",
        "correct": true
      },
      {
        "text": "mobil bankçılıq və müasirləşmə",
        "correct": false
      }
    ]
  },
  {
    "num": 438,
    "question": "Rəqəmsal inkişafın əsas məqsədlərindən biridir:",
    "options": [
      {
        "text": "iqtisadi subyektlərdə aktivlərin formalaşdırılmasıdır",
        "correct": false
      },
      {
        "text": "bank menecmentinin təkmilləşdirilməsidir",
        "correct": false
      },
      {
        "text": "iqtisadi subyektlərin fəaliyyətinin insanlar üçün əlçatanlığın olmamasıdır",
        "correct": false
      },
      {
        "text": "rəqəmsal dünyanın üstünlüklərinin və imkanlarının bütün müştərilər üçün əlçatan olmasıdır",
        "correct": true
      },
      {
        "text": "iqtisadi subyektlərin fəaliyyətinin modernləşdirilməsidir",
        "correct": false
      }
    ]
  },
  {
    "num": 439,
    "question": "Rəqəmsal bankçılıq ənənəvi bank xidmətlərinin ...:",
    "options": [
      {
        "text": "kodlaşdırılmasıdır",
        "correct": false
      },
      {
        "text": "beynəlmilləşməsidir",
        "correct": false
      },
      {
        "text": "mexanikləşdirilməsidir",
        "correct": false
      },
      {
        "text": "şifrələnməsidir",
        "correct": false
      },
      {
        "text": "avtomatlaşdırılmasıdır",
        "correct": true
      }
    ]
  },
  {
    "num": 440,
    "question": "Kassa əməliyyatı hesab olunur:",
    "options": [
      {
        "text": "kassa əməliyyatları bankların faktorinq əməliyyatıdır",
        "correct": false
      },
      {
        "text": "kassa əməliyyatları bankların trast əməliyyatıdır",
        "correct": false
      },
      {
        "text": "banklar öz müştəriləri ilə nağd hesablaşmalar həyata keçirir",
        "correct": true
      },
      {
        "text": "banklar öz müştəriləri ilə audit əməliyyatlarını həyata keçirir",
        "correct": false
      },
      {
        "text": "banklar öz müştəriləri ilə sənədləşmə əməliyyatları həyata keçirir",
        "correct": false
      }
    ]
  },
  {
    "num": 441,
    "question": "Mərkəzi Bankın …. funksiyası banknot buraxılışına inhisardan və ölkədə pul tədavülünün tənzimlənməsindən ibarətdir:",
    "options": [
      {
        "text": "nəzarət",
        "correct": false
      },
      {
        "text": "vasitəçilik",
        "correct": false
      },
      {
        "text": "informasiya",
        "correct": false
      },
      {
        "text": "bölüşdürücü",
        "correct": false
      },
      {
        "text": "emissiya",
        "correct": true
      }
    ]
  },
  {
    "num": 442,
    "question": "Mərkəzi Bankın pul siyasəti alətidir:",
    "options": [
      {
        "text": "hesablaşmalara nəzarət",
        "correct": false
      },
      {
        "text": "xüsusi kapitala nəzarət",
        "correct": false
      },
      {
        "text": "vasitəçilik əməliyyatlarının həyata keçirilməsinə nəzarət",
        "correct": false
      },
      {
        "text": "açıq bazarda əməliyyatların aparılması",
        "correct": true
      },
      {
        "text": "kreditləşmə limitinin müəyyən edilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 443,
    "question": "Pul islahatı dedikdə nə başa düşülür:",
    "options": [
      {
        "text": "qızılın pul funksiyası rolunu itirməsi prosesi",
        "correct": false
      },
      {
        "text": "kağız pulların metal pulları dövriyyədən sıxışdırıb çıxarmaq üzrə dövlətin uzun müddətli siyasəti",
        "correct": false
      },
      {
        "text": "metal pulların dövriyyəsini çoxaltmaq",
        "correct": false
      },
      {
        "text": "yeni dizaynlı pul nişanlarının emissiyasını dayandırmaq",
        "correct": false
      },
      {
        "text": "ölkənin pul sisteminin qismən və ya tamamilə dəyişdirilməsi",
        "correct": true
      }
    ]
  },
  {
    "num": 444,
    "question": "Pul islahatı zamanı köhnə pul nişanlarının yenisi ilə əvəz olunması:",
    "options": [
      {
        "text": "yalnız milli valyutanın revolvasiyası zamanı baş verir",
        "correct": false
      },
      {
        "text": "baş vermir",
        "correct": false
      },
      {
        "text": "yalnız milli valyutanın devolvasiyası zamanı baş verir",
        "correct": false
      },
      {
        "text": "baş verir",
        "correct": true
      },
      {
        "text": "Mərkəzi Bank kommersiya banklarına icazə verdikdə baş verir",
        "correct": false
      }
    ]
  },
  {
    "num": 445,
    "question": "Valyuta birjasında ...... əməliyyatları həyata keçirilir:",
    "options": [
      {
        "text": "kredit",
        "correct": false
      },
      {
        "text": "borc",
        "correct": false
      },
      {
        "text": "pul sistemi",
        "correct": false
      },
      {
        "text": "forfeytinq",
        "correct": false
      },
      {
        "text": "valyuta",
        "correct": true
      }
    ]
  },
  {
    "num": 446,
    "question": "Azərbaycan Respublikasında əsas Valyuta Nəzarəti Orqanı ......:",
    "options": [
      {
        "text": "Auditorlar Palatasıdır",
        "correct": false
      },
      {
        "text": "Nazirlər Kabinetidir",
        "correct": false
      },
      {
        "text": "Vergilər Nazirliyidir",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankdır",
        "correct": true
      },
      {
        "text": "Dövlət Gömrük Komitəsidir",
        "correct": false
      }
    ]
  },
  {
    "num": 447,
    "question": "Valyuta bazarının iştirakçısı hesab edilir:",
    "options": [
      {
        "text": "İpoteka Fondları",
        "correct": false
      },
      {
        "text": "Sığorta Təşkilatları",
        "correct": false
      },
      {
        "text": "xəzinədarlıq",
        "correct": false
      },
      {
        "text": "lombardlar",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      }
    ]
  },
  {
    "num": 448,
    "question": "Banklar arasında qarşılıqlı tələblər üzrə hesablaşmalar:",
    "options": [
      {
        "text": "məhdudiyyətsiz mümkündür",
        "correct": true
      },
      {
        "text": "yalnız Bank Olmayan Kredit Təşkilatlarının (BOKT) icazəsi ilə mümkündür",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın xüsusi icazəsi olmalıdır",
        "correct": false
      },
      {
        "text": "yalnız eyni ərazidə fəaliyyət göstərən banklar arasında mümkündür",
        "correct": false
      },
      {
        "text": "mümkün deyil",
        "correct": false
      }
    ]
  },
  {
    "num": 449,
    "question": "Malgöndərənin razılığı olmadan dəyişdirilə və ya ləğv edilə bilməyən akkreditiv necə adlanır:",
    "options": [
      {
        "text": "geri çağırılan",
        "correct": false
      },
      {
        "text": "klassik",
        "correct": false
      },
      {
        "text": "indossamentli",
        "correct": false
      },
      {
        "text": "geri çağırılmayan",
        "correct": true
      },
      {
        "text": "orderli",
        "correct": false
      }
    ]
  },
  {
    "num": 450,
    "question": "Akkreditiv üzrə nağd pulun ödənilməsi:",
    "options": [
      {
        "text": "mümkün deyil",
        "correct": true
      },
      {
        "text": "bank rəhbərinin razılığı ilə mümkündür",
        "correct": false
      },
      {
        "text": "Milli Depozit Sisteminin icazəsi ilə mümkündür",
        "correct": false
      },
      {
        "text": "müştərinin razılığı ilə mümkündür",
        "correct": false
      },
      {
        "text": "Banklar Assosiasiyasının razılığı ilə mümkündür",
        "correct": false
      }
    ]
  },
  {
    "num": 451,
    "question": "Mərkəzi Bankın passiv əməliyyatı dedikdə nə başa düşülür?",
    "options": [
      {
        "text": "öz vəsaitlərini itirmək başa düşülür",
        "correct": false
      },
      {
        "text": "öz vəsaitlərini özündə saxlamaq başa düşülür",
        "correct": false
      },
      {
        "text": "öz vəsaitlərini gizlətmək",
        "correct": false
      },
      {
        "text": "öz vəsaitlərini beynəlxalq vətəndaşlara satmaq başa düşülür",
        "correct": false
      },
      {
        "text": "kapital bazasını formalaşdıran əməliyyatlar başa düşülür",
        "correct": true
      }
    ]
  },
  {
    "num": 452,
    "question": "Mərkəzi Bank öz xərclərini həyata keçirir:",
    "options": [
      {
        "text": "Milli Məclisin vəsaitləri hesabına",
        "correct": false
      },
      {
        "text": "fiziki şəxslərin gəlirlərindən gələn vəsaitlər hesabına",
        "correct": false
      },
      {
        "text": "lisenziya verərkən aldığı faiz hesabına",
        "correct": false
      },
      {
        "text": "öz gəlirləri hesabına",
        "correct": true
      },
      {
        "text": "büdcə vəsaiti hesabına",
        "correct": false
      }
    ]
  },
  {
    "num": 453,
    "question": "Azərbaycan Respublikasının Mərkəzi Bankı bütövlükdə kimin mülkiyyətindədir?",
    "options": [
      {
        "text": "fiziki şəxslərin",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatlarının (BOKT)",
        "correct": false
      },
      {
        "text": "kommersiya banklarının",
        "correct": false
      },
      {
        "text": "fiziki və hüquqi şəxslərin",
        "correct": false
      },
      {
        "text": "dövlətin",
        "correct": true
      }
    ]
  },
  {
    "num": 454,
    "question": "Mənfəət əldə etmək Mərkəzi Bankın əsas məqsədidirmi :",
    "options": [
      {
        "text": "mənfəəti əhaliyə vermək Mərkəzi Bankın məqsədidir",
        "correct": false
      },
      {
        "text": "mənfəət əldə etmək Mərkəzi Bankın əsas məqsədidir",
        "correct": false
      },
      {
        "text": "mənfəəti yarı bölmək Mərkəzi Bankın məqsədidir",
        "correct": false
      },
      {
        "text": "mənfəət əldə etmək Mərkəzi Bankın əsas məqsədi deyil",
        "correct": true
      },
      {
        "text": "mənfəəti kommersiya bankları arasında bölüşdürmək Mərkəzi Bankın məqsədidir",
        "correct": false
      }
    ]
  },
  {
    "num": 455,
    "question": "Mərkəzi Bankın funksiyası deyildir:",
    "options": [
      {
        "text": "valyuta nəzarətini həyata keçirtmək",
        "correct": false
      },
      {
        "text": "pul kütləsinə nəzarət",
        "correct": false
      },
      {
        "text": "manatın sabitliyini qorumaq",
        "correct": false
      },
      {
        "text": "iqtisadiyyatın real sektorunun kreditləşdirilməsi",
        "correct": true
      },
      {
        "text": "tədiyə balansını tərtib etmək",
        "correct": false
      }
    ]
  },
  {
    "num": 456,
    "question": "Mərkəzi Bankın pul siyasəti alətidir:",
    "options": [
      {
        "text": "xüsusi kapitala nəzarət",
        "correct": false
      },
      {
        "text": "lisenziyanı ləğv etmək",
        "correct": false
      },
      {
        "text": "lisenziya vermək",
        "correct": false
      },
      {
        "text": "fiziki şəxslərə kredit vermək",
        "correct": false
      },
      {
        "text": "açıq bazar əməliyyatları",
        "correct": true
      }
    ]
  },
  {
    "num": 457,
    "question": "Bankın fəaliyyəti dövründə baş verən itgiləri aradan qaldırmağa imkan verir və stabilliyi qoruyur:",
    "options": [
      {
        "text": "zərərdəymə fondu",
        "correct": false
      },
      {
        "text": "bank fondu",
        "correct": false
      },
      {
        "text": "kredit fondu",
        "correct": false
      },
      {
        "text": "ehtiyat fondu",
        "correct": true
      },
      {
        "text": "depozit fondu",
        "correct": false
      }
    ]
  },
  {
    "num": 458,
    "question": "Xarici bankların yerli filiallarını lisenziyalaşdırır:",
    "options": [
      {
        "text": "Mərkəzi Bankın xarici əməkdaşları",
        "correct": false
      },
      {
        "text": "xarici bankların Mərkəzi Bankları",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "xarici bankların rəhbərləri",
        "correct": false
      },
      {
        "text": "bank birlikləri",
        "correct": false
      }
    ]
  },
  {
    "num": 459,
    "question": "Kredit təşkilatları hansı Qanuna əsasən fəaliyyət göstərir:",
    "options": [
      {
        "text": "Milli Depozit Sistemi haqqında Qanuna əsasən",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatları (BOKT) haqqında Qanuna əsasən",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank haqqında Qanuna əsasən",
        "correct": false
      },
      {
        "text": "Banklar haqqında Qanuna əsasən",
        "correct": true
      },
      {
        "text": "Bankların idarə edilməsi haqqında Qanuna əsasən",
        "correct": false
      }
    ]
  },
  {
    "num": 460,
    "question": "Bank Sisteminin II pilləsini təşkil edən kredit təşkilatlarına lisenziyanı(razılıq) kim verir:",
    "options": [
      {
        "text": "Mərkəzi Bankın ərazi idarələri",
        "correct": false
      },
      {
        "text": "bank filialı",
        "correct": false
      },
      {
        "text": "Milli Məclis",
        "correct": false
      },
      {
        "text": "bank şirkətləri",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      }
    ]
  },
  {
    "num": 461,
    "question": "Nağdsız pul dövriyyəsi nağd dövriyyə ilə müqayisədə tədavül xərcləri:",
    "options": [
      {
        "text": "müəyyən edilmiş limitdən çoxdur",
        "correct": false
      },
      {
        "text": "olduqca azdır",
        "correct": true
      },
      {
        "text": "mövcud deyildir",
        "correct": false
      },
      {
        "text": "olduqca çoxdur",
        "correct": false
      },
      {
        "text": "sıfıra bərabərdir",
        "correct": false
      }
    ]
  },
  {
    "num": 462,
    "question": "Kağız pullar emissiya edilərək onlar tədavülə … … təqdim edilir:",
    "options": [
      {
        "text": "lizinqə verilərək",
        "correct": false
      },
      {
        "text": "icarəyə verilərək",
        "correct": false
      },
      {
        "text": "təmənnasız",
        "correct": true
      },
      {
        "text": "ödəmə əsasında",
        "correct": false
      },
      {
        "text": "kreditə verilərək",
        "correct": false
      }
    ]
  },
  {
    "num": 463,
    "question": "Pul kütləsi göstəricilərinin artım istiqamətini müəyyən edir:",
    "options": [
      {
        "text": "Milli Depozit Sistemi",
        "correct": false
      },
      {
        "text": "Nazirlər Kabineti",
        "correct": false
      },
      {
        "text": "Milli Məclis",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "Maliyyə Nazirliyi",
        "correct": false
      }
    ]
  },
  {
    "num": 464,
    "question": "Nağd pulların ilkin emissiyası haradan başlayır:",
    "options": [
      {
        "text": "Bank Olmayan Kredit Təşkilatlarından (BOKT)",
        "correct": false
      },
      {
        "text": "ticarət şəbəkələrindən",
        "correct": false
      },
      {
        "text": "əməliyyat kassalarından",
        "correct": false
      },
      {
        "text": "axşam kassalarından",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın ərazi idarələrindən",
        "correct": true
      }
    ]
  },
  {
    "num": 465,
    "question": "Pul dövriyyəsində aşağıdakı hansı növ pul nişanlarından istifadə edilir:",
    "options": [
      {
        "text": "yalnız xəzinədarlıq biletləri",
        "correct": false
      },
      {
        "text": "xəzinədarlıq biletləri, xırda pullar",
        "correct": false
      },
      {
        "text": "yalnız qiymətli metallar",
        "correct": false
      },
      {
        "text": "banknot, metal pullar",
        "correct": true
      },
      {
        "text": "pul əvəzediciləri",
        "correct": false
      }
    ]
  },
  {
    "num": 466,
    "question": "Akkreditiv hesablaşma formasının çatışmayan cəhəti:",
    "options": [
      {
        "text": "bankdan kredit alınmasıdır",
        "correct": false
      },
      {
        "text": "müəyyən məbləğin avans qaydada qaytarılmasıdır",
        "correct": false
      },
      {
        "text": "hesablaşma əməliyyatlarının yerinə yetirilmə tezliyi və sadəliyidir",
        "correct": false
      },
      {
        "text": "akkreditivin fəaliyyət müddətində alıcının vəsaitinin təsərrüfat dövriyyəsindən çıxarılmasıdır",
        "correct": true
      },
      {
        "text": "Mərkəzi Bankdan akkreditiv hesablaşma formasının aparılması üçün xüsusi razılığın alınmasıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 467,
    "question": "Nağdsız hesablaşmaların aparılmasından ötrü emitent və benefisiarlar üçün zəruri şərt kimi mövcud olmalıdır:",
    "options": [
      {
        "text": "depozit hesabları",
        "correct": false
      },
      {
        "text": "dövriyyə kassasının limiti",
        "correct": false
      },
      {
        "text": "bank müqaviləsi,lisenziya və depozit",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın xüsusi icazəsi",
        "correct": false
      },
      {
        "text": "bank hesabı",
        "correct": true
      }
    ]
  },
  {
    "num": 468,
    "question": "Nağdsız hesablaşmalar aparılır:",
    "options": [
      {
        "text": "pul vəsaitinin alıcısı və ödəyicisinin qəbzləri əsasında",
        "correct": false
      },
      {
        "text": "pul vəsaitinin alıcısı və ödəyicisi tərəfindən müəyyən olunmuş qaydada",
        "correct": false
      },
      {
        "text": "bankın ləğv edilmiş sənədləri əsasında",
        "correct": false
      },
      {
        "text": "müəyyən forma və standarta malik hesablaşma sənədləri əsasında",
        "correct": true
      },
      {
        "text": "vəsaitin alıcısı, ödəyicisi və kommersiya bankları tərəfindən müstəqil qaydada",
        "correct": false
      }
    ]
  },
  {
    "num": 469,
    "question": "Bir qayda olaraq Mərkəzi Bankın müştəriləridirlər:",
    "options": [
      {
        "text": "Milli Məclis",
        "correct": false
      },
      {
        "text": "fiziki şəxslər",
        "correct": false
      },
      {
        "text": "Hesablama Palatası",
        "correct": false
      },
      {
        "text": "Statistika Komitəsi",
        "correct": false
      },
      {
        "text": "kredit təşkilatları",
        "correct": true
      }
    ]
  },
  {
    "num": 470,
    "question": "Azərbaycan Respublikası Mərkəzi Bankı hesabat verir:",
    "options": [
      {
        "text": "Hesablama Palatasına",
        "correct": false
      },
      {
        "text": "fiziki şəxslərə",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyinə",
        "correct": false
      },
      {
        "text": "Azərbaycan Respublikasının Prezidentinə",
        "correct": true
      },
      {
        "text": "heç kimə hesabat vermir",
        "correct": false
      }
    ]
  },
  {
    "num": 471,
    "question": "Kredit təşkilatlarının yenidən maliyyələşdirilməsi ........:",
    "options": [
      {
        "text": "Mərkəzi Bankın banklara nəzarət etməsidir",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın lisenziya verilməsi əməliyyatıdır",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın əsas məqsədidir",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın pul siyasəti alətidir",
        "correct": true
      },
      {
        "text": "Mərkəzi Bankın təşkilati funksiyasıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 472,
    "question": "Banklar və Bank Olmayan Kredit Təşkilatları (BOKT) ölkə ərazisində hesablaşmaların aparılmasından ötrü biri digərində ….. hesablar açırlar:",
    "options": [
      {
        "text": "büdcə",
        "correct": false
      },
      {
        "text": "debet",
        "correct": false
      },
      {
        "text": "müxbir",
        "correct": true
      },
      {
        "text": "xəzinə",
        "correct": false
      },
      {
        "text": "faktorinq",
        "correct": false
      }
    ]
  },
  {
    "num": 473,
    "question": "Müasir Bank Sisteminin yaranma prinsipidir:",
    "options": [
      {
        "text": "bütün pul əməliyyatlarının banklar vasitəsilə aparılması",
        "correct": false
      },
      {
        "text": "bank fəaliyyətinin tamamilə dövlət tərəfindən tənzimlənməsi",
        "correct": false
      },
      {
        "text": "bank nəzarətinin geniş vüsət alması",
        "correct": false
      },
      {
        "text": "Demokratik Mərkəziyyət",
        "correct": false
      },
      {
        "text": "bank işində dövlət inhisarının olmaması",
        "correct": true
      }
    ]
  },
  {
    "num": 474,
    "question": "Kommersiya bankının kassa əməliyyatları ......... :",
    "options": [
      {
        "text": "AZİPS - əməliyyatıdır",
        "correct": false
      },
      {
        "text": "pul siyasəti əməliyyatıdır",
        "correct": false
      },
      {
        "text": "faktorinq əməliyyatıdır",
        "correct": false
      },
      {
        "text": "sənədlərin qeydiyyatdan keçirilməsidir",
        "correct": false
      },
      {
        "text": "nağd pulların qəbulu və verilməsidir",
        "correct": true
      }
    ]
  },
  {
    "num": 475,
    "question": "........ əməliyyatları hüquqi və fiziki şəxslərin sərbəst pul vəsaitlərinin banklar və başqa kredit təşkilatları tərəfindən cəlb edilməsi əməliyyatlarıdır:",
    "options": [
      {
        "text": "sığorta",
        "correct": false
      },
      {
        "text": "lizinq",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": true
      },
      {
        "text": "ipoteka",
        "correct": false
      },
      {
        "text": "investisiya",
        "correct": false
      }
    ]
  },
  {
    "num": 476,
    "question": "Ödəniş tələbnamə tapşırıqları:",
    "options": [
      {
        "text": "nağdsız hesablaşmaların dondurulmasıdır",
        "correct": false
      },
      {
        "text": "nağdsız hesablaşmaların dövriyyədən çıxarılmasıdır",
        "correct": false
      },
      {
        "text": "nağdsız hesablaşmaların lisenziyasıdır",
        "correct": false
      },
      {
        "text": "nağdsız hesablaşmaların siyahıya alınmasıdır",
        "correct": false
      },
      {
        "text": "nağdsız hesablaşmaların formasıdır",
        "correct": true
      }
    ]
  },
  {
    "num": 477,
    "question": "Kommersiya banklarının funksiyasıdır:",
    "options": [
      {
        "text": "pul-kredit siyasətini həyata keçirmək",
        "correct": false
      },
      {
        "text": "lisenziya vermək",
        "correct": false
      },
      {
        "text": "banknot emissiyası",
        "correct": false
      },
      {
        "text": "kreditləşmədə vasitəçilik",
        "correct": true
      },
      {
        "text": "lisenziyanı ləğv etmək",
        "correct": false
      }
    ]
  },
  {
    "num": 478,
    "question": "Kredit təşkilatının fəaliyyət prinsiplərindən biri onların .....fəaliyyət göstərməsidir:",
    "options": [
      {
        "text": "qanunsuz",
        "correct": false
      },
      {
        "text": "asılı",
        "correct": false
      },
      {
        "text": "qərəzli",
        "correct": false
      },
      {
        "text": "müstəqil",
        "correct": true
      },
      {
        "text": "dövlət tipli",
        "correct": false
      }
    ]
  },
  {
    "num": 479,
    "question": "Ödəyicinin vekselin ödəməsinə razılığı necə adlanır:",
    "options": [
      {
        "text": "spot",
        "correct": false
      },
      {
        "text": "indossoment",
        "correct": false
      },
      {
        "text": "opsion",
        "correct": false
      },
      {
        "text": "inkasso",
        "correct": false
      },
      {
        "text": "aksept",
        "correct": true
      }
    ]
  },
  {
    "num": 480,
    "question": "İnvestisiya fəaliyyətinin maliyyələşdirilməsində alternativ yollardan biri ...... maliyyələşdirilməsidir:",
    "options": [
      {
        "text": "sığorta təşkilatlarının",
        "correct": false
      },
      {
        "text": "kreditin",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın dövlət tərəfindən",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatlarının (BOKT)",
        "correct": false
      },
      {
        "text": "vençur",
        "correct": true
      }
    ]
  },
  {
    "num": 481,
    "question": "İnvestisiya şirkəti ....... şəxsdir:",
    "options": [
      {
        "text": "bələdiyyə və dövlət mülkiyyətinə əsaslanan",
        "correct": false
      },
      {
        "text": "Milli Depozit Sistemindən icazə almaq istəyən",
        "correct": false
      },
      {
        "text": "fiziki",
        "correct": false
      },
      {
        "text": "müddətli fəaliyyət göstərən",
        "correct": false
      },
      {
        "text": "hüquqi",
        "correct": true
      }
    ]
  },
  {
    "num": 482,
    "question": "Bank emitent kimi çıxış etdikdə:",
    "options": [
      {
        "text": "başqalarının qiymətli kağızlarını istifadə edir",
        "correct": false
      },
      {
        "text": "öz qiymətli kağızlarını satın alır",
        "correct": false
      },
      {
        "text": "başqalarının qiymətli kağızlarını satın alır",
        "correct": false
      },
      {
        "text": "başqalarının qiymətli kağızlarını satır",
        "correct": false
      },
      {
        "text": "öz qiymətli kağızlarını buraxır",
        "correct": true
      }
    ]
  },
  {
    "num": 483,
    "question": "Konvertasiya.......deyilir:",
    "options": [
      {
        "text": "bir bankın digərinə dəyişdirilməsinə",
        "correct": false
      },
      {
        "text": "pulun dəfinəyə çevrilməsinə",
        "correct": false
      },
      {
        "text": "nağd pulun nağdsız pula çevrilməsinə",
        "correct": false
      },
      {
        "text": "bir valyuta növünün digərinə dəyişdirilməsinə",
        "correct": true
      },
      {
        "text": "pulun kreditə çevrilməsinə",
        "correct": false
      }
    ]
  },
  {
    "num": 484,
    "question": "Portfel investisiyası əməliyyatları bankların ...... apardığı əməliyyatdır:",
    "options": [
      {
        "text": "qiymətli kağızlarla",
        "correct": true
      },
      {
        "text": "depozit ilə",
        "correct": false
      },
      {
        "text": "kreditlə",
        "correct": false
      },
      {
        "text": "müqavilə ilə",
        "correct": false
      },
      {
        "text": "ipoteka ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 485,
    "question": "Bankların investisiya əməliyyatları:",
    "options": [
      {
        "text": "hesablaşmaların sürətləndirilməsidir",
        "correct": false
      },
      {
        "text": "lisenziya vermək əməliyyatıdır",
        "correct": false
      },
      {
        "text": "kredit resurslarının formalaşmasıdır",
        "correct": false
      },
      {
        "text": "vəsait qoyuluşu prosesi ilə gələcəkdə gəlir əldə etməyin vəhdətidir",
        "correct": true
      },
      {
        "text": "pul çıxartmaq əməliyyatıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 486,
    "question": "İnvestor hansı investisiya fəaliyyətini həyata keçirir ?",
    "options": [
      {
        "text": "klirinq əməliyyatlarını həyata keçirir",
        "correct": false
      },
      {
        "text": "banklara vəsait cəlb edir",
        "correct": false
      },
      {
        "text": "depozit əməliyyatlarını həyata keçirir",
        "correct": false
      },
      {
        "text": "investisiya fəaliyyətini maliyyələşdirir",
        "correct": true
      },
      {
        "text": "kommunikasiya işlərini yerinə yetirir",
        "correct": false
      }
    ]
  },
  {
    "num": 487,
    "question": "İnvestisiya krediti rəsmiləşdirilərkən əsasən girov kimi çıxış edir .......:",
    "options": [
      {
        "text": "daşınmaz əmlak",
        "correct": true
      },
      {
        "text": "yola salınmış mallar",
        "correct": false
      },
      {
        "text": "plastik kartlar",
        "correct": false
      },
      {
        "text": "investisiya sənədləri",
        "correct": false
      },
      {
        "text": "yolda olan mallar",
        "correct": false
      }
    ]
  },
  {
    "num": 488,
    "question": "İqtisadiyyatın inzibati amirlik idarəetmə sistemi şəraitində …. bank sistemi fəaliyyət göstərirdi:",
    "options": [
      {
        "text": "keçid",
        "correct": false
      },
      {
        "text": "dəyişkən",
        "correct": false
      },
      {
        "text": "bazar",
        "correct": false
      },
      {
        "text": "bölüşdürücü",
        "correct": true
      },
      {
        "text": "sərbəst",
        "correct": false
      }
    ]
  },
  {
    "num": 489,
    "question": "Bazar iqtisadiyyatında Bank Sistemi neçə pilləli olur?",
    "options": [
      {
        "text": "1",
        "correct": false
      },
      {
        "text": "9",
        "correct": false
      },
      {
        "text": "16",
        "correct": false
      },
      {
        "text": "2",
        "correct": true
      },
      {
        "text": "12",
        "correct": false
      }
    ]
  },
  {
    "num": 490,
    "question": "Bankların xüsusi kapitalının funksiyalarını göstərin:",
    "options": [
      {
        "text": "faktorinq, operativ, trast",
        "correct": false
      },
      {
        "text": "yalnız kredit riskləri",
        "correct": false
      },
      {
        "text": "depozit, kredit, vasitəçilik",
        "correct": false
      },
      {
        "text": "müdafiə, operativ, tənzimləmə",
        "correct": true
      },
      {
        "text": "müdafiə, kredit, borc",
        "correct": false
      }
    ]
  },
  {
    "num": 491,
    "question": "SSRİ Dövlət Bankı neçə pilləli idi:",
    "options": [
      {
        "text": "4",
        "correct": false
      },
      {
        "text": "5",
        "correct": false
      },
      {
        "text": "2",
        "correct": false
      },
      {
        "text": "1",
        "correct": true
      },
      {
        "text": "3",
        "correct": false
      }
    ]
  },
  {
    "num": 492,
    "question": "BOKT (Bank Olmayan Kredit Təşkilatı)......:",
    "options": [
      {
        "text": "publik hüquqi şəxsdir",
        "correct": false
      },
      {
        "text": "yalnız hüquqi şəxslərdən depozit qəbul edə bilər",
        "correct": false
      },
      {
        "text": "depozit cəlb etməklə kredit verə bilər",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın vəsaiti hesabına kredit verə bilər",
        "correct": false
      },
      {
        "text": "öz vəsaiti hesabına yalnız pul formasında kredit verə bilər",
        "correct": true
      }
    ]
  },
  {
    "num": 493,
    "question": "Bank Olmayan Kredit Təşkilatları(BOKT) kimin verdiyi lisenziyaya əsasən fəaliyyət göstərə bilər?",
    "options": [
      {
        "text": "bank filialının",
        "correct": false
      },
      {
        "text": "Milli Məclisin",
        "correct": false
      },
      {
        "text": "kommersiya bankının",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın",
        "correct": true
      },
      {
        "text": "Maliyyə Nazirliyinin",
        "correct": false
      }
    ]
  },
  {
    "num": 494,
    "question": "İki pilləli Bank Sisteminin ikinci pilləsində hansı bank dayanır?",
    "options": [
      {
        "text": "Mərkəzi Banklar",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın ərazi idarələri",
        "correct": false
      },
      {
        "text": "emissiya bankları",
        "correct": false
      },
      {
        "text": "kommersiya bankları",
        "correct": true
      },
      {
        "text": "heç biri",
        "correct": false
      }
    ]
  },
  {
    "num": 495,
    "question": "Bank Olmayan Kredit Təşkilatları (BOKT) Bank Sisteminin neçənci pilləsində dayanır?",
    "options": [
      {
        "text": "I pilləsində",
        "correct": false
      },
      {
        "text": "III pilləsində",
        "correct": false
      },
      {
        "text": "II pilləsində",
        "correct": true
      },
      {
        "text": "heç birində",
        "correct": false
      },
      {
        "text": "I və II pilləsində",
        "correct": false
      }
    ]
  },
  {
    "num": 496,
    "question": "Mülkiyyətinə görə ayrılan bankları göstərin:",
    "options": [
      {
        "text": "korporativ,mərkəzi,kommersiya",
        "correct": false
      },
      {
        "text": "1 pilləli, 2 pilləli, 3 pilləli",
        "correct": false
      },
      {
        "text": "dövlət, səhmdar,korporativ , xüsusi, qarışıq, bələdiyyə",
        "correct": true
      },
      {
        "text": "bir pilləli,xüsusi,səhmdar",
        "correct": false
      },
      {
        "text": "kommersiya,emissiya",
        "correct": false
      }
    ]
  },
  {
    "num": 497,
    "question": "Banklarda əməliyyat jurnalının aparılmasında məqsəd:",
    "options": [
      {
        "text": "bank daxili əməliyyatların uçotunu aparmaqdır",
        "correct": false
      },
      {
        "text": "hesablar üzrə balansı müəyyənləşdirməkdir",
        "correct": false
      },
      {
        "text": "cari ilin əməliyyatları üzrə qalıqların çıxarılmasıdır",
        "correct": true
      },
      {
        "text": "balansdan kənar hesablar üzrə qalıq çıxarmaqdır",
        "correct": false
      },
      {
        "text": "əməliyyatları sintetik uçotda əks etdirməkdir",
        "correct": false
      }
    ]
  },
  {
    "num": 498,
    "question": "Nağdsız hesablaşma sistemi olub qarşılıqlı ödənişlərin üzləşməsinə əsaslanır......:",
    "options": [
      {
        "text": "lizinq",
        "correct": false
      },
      {
        "text": "ekvayrinq",
        "correct": false
      },
      {
        "text": "klirinq",
        "correct": true
      },
      {
        "text": "investisiya",
        "correct": false
      },
      {
        "text": "anderraytinq",
        "correct": false
      }
    ]
  },
  {
    "num": 499,
    "question": "Kassir iş yerini müvəqətti tərk etdikdə pul və qiymətliləri açıqda saxlaya bilərmi?",
    "options": [
      {
        "text": "bəli saxlaya bilər",
        "correct": false
      },
      {
        "text": "çantasında saxlaya bilər",
        "correct": false
      },
      {
        "text": "saxlaya bilməz",
        "correct": true
      },
      {
        "text": "stolun daxilində saxlaya bilər",
        "correct": false
      },
      {
        "text": "açıq seyfdə saxlaya bilər",
        "correct": false
      }
    ]
  },
  {
    "num": 500,
    "question": "İnkasso sərəncamları ilə hesablaşmalar zamanı borclunun (ödəyicinin ) bank hesabına xidmət göstərən bank (icraçı bank) ödənişi ödəyicinin bank hesabından ..... qaydada (ödəyicinin sərəncamı olmadan) həyata keçirir:",
    "options": [
      {
        "text": "növbəsiz",
        "correct": false
      },
      {
        "text": "növbəli",
        "correct": false
      },
      {
        "text": "müddətli",
        "correct": false
      },
      {
        "text": "mübahisəsiz",
        "correct": true
      },
      {
        "text": "müddətsiz",
        "correct": false
      }
    ]
  },
  {
    "num": 501,
    "question": "İnvestisiyanın formalarını göstərin:",
    "options": [
      {
        "text": "uzunmüddətli və qısamüddətli investisiya",
        "correct": false
      },
      {
        "text": "yalnız portfel investisiyası",
        "correct": false
      },
      {
        "text": "portfel və birbaşa investisiya",
        "correct": true
      },
      {
        "text": "birbaşa və son investisiya",
        "correct": false
      },
      {
        "text": "kredit və faktorinq",
        "correct": false
      }
    ]
  },
  {
    "num": 502,
    "question": "Bank Olmayan Kredit Təşkilatı (BOKT) :",
    "options": [
      {
        "text": "dilerdir",
        "correct": false
      },
      {
        "text": "əmanət bankıdır",
        "correct": false
      },
      {
        "text": "fiziki şəxsdir",
        "correct": false
      },
      {
        "text": "investordur",
        "correct": false
      },
      {
        "text": "hüquqi şəxsdir",
        "correct": true
      }
    ]
  },
  {
    "num": 503,
    "question": "Emissiya mərkəzidir:",
    "options": [
      {
        "text": "vergi orqanları",
        "correct": false
      },
      {
        "text": "Banklar Assosiasiyası",
        "correct": false
      },
      {
        "text": "sığorta təşkilatları",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "depozit bankları",
        "correct": false
      }
    ]
  },
  {
    "num": 504,
    "question": "Kredit ifadəsinin izahı nədir?",
    "options": [
      {
        "text": "sazişdir",
        "correct": false
      },
      {
        "text": "depozitdir",
        "correct": false
      },
      {
        "text": "girovdur,verilən vəsaitin qaytarılmamasıdır",
        "correct": false
      },
      {
        "text": "faktorinq",
        "correct": false
      },
      {
        "text": "etibar edirəm,inanıram",
        "correct": true
      }
    ]
  },
  {
    "num": 505,
    "question": "Gələcəkdə gəlir götürmək məqsədilə uzunmüddətli sərmayə yatırımıdır:",
    "options": [
      {
        "text": "ipoteka əməliyyatları",
        "correct": false
      },
      {
        "text": "trast əməliyyatları",
        "correct": false
      },
      {
        "text": "klirinq əməliyyatları",
        "correct": false
      },
      {
        "text": "investisiya",
        "correct": true
      },
      {
        "text": "Mərkəzi Bankın kommersiya banklarına verdiyi kreditlər",
        "correct": false
      }
    ]
  },
  {
    "num": 506,
    "question": "Birbaşa investisiya dedikdə ......vəsait qoyuluşu başa düşülür:",
    "options": [
      {
        "text": "müəssisələrin nizamnamə kapitalına",
        "correct": false
      },
      {
        "text": "nizamnamə kapitalının artırılmasına",
        "correct": false
      },
      {
        "text": "investisiya obyektlərinin bazar qiymətlərinin artımına",
        "correct": false
      },
      {
        "text": "real kapitala",
        "correct": true
      },
      {
        "text": "bank hesablarına",
        "correct": false
      }
    ]
  },
  {
    "num": 507,
    "question": "Adətən investisiya məqsədləri üçün hansı bank ssudaları istifadə edilir:",
    "options": [
      {
        "text": "istehlak",
        "correct": false
      },
      {
        "text": "ticarət",
        "correct": false
      },
      {
        "text": "orta müddətli",
        "correct": false
      },
      {
        "text": "uzunmüddətli",
        "correct": true
      },
      {
        "text": "qısamüddətli və bir günlük kredit",
        "correct": false
      }
    ]
  },
  {
    "num": 508,
    "question": "Bank kreditində borcalan qismində çıxış edirlər:",
    "options": [
      {
        "text": "yalnız fiziki şəxslər",
        "correct": false
      },
      {
        "text": "bank ilə müqaviləsi olmayan şəxslər",
        "correct": false
      },
      {
        "text": "dövləti təmsil etməyən orqanlar",
        "correct": false
      },
      {
        "text": "hüquqi və fiziki şəxslər",
        "correct": true
      },
      {
        "text": "yalnız hüquqi şəxslər",
        "correct": false
      }
    ]
  },
  {
    "num": 509,
    "question": "Müasir iqtisadiyyatda kreditin daha çox yayılmış forması hansıdır:",
    "options": [
      {
        "text": "faktorinq krediti",
        "correct": false
      },
      {
        "text": "forfeytinq krediti",
        "correct": false
      },
      {
        "text": "lizinq",
        "correct": false
      },
      {
        "text": "bank krediti",
        "correct": true
      },
      {
        "text": "trast krediti",
        "correct": false
      }
    ]
  },
  {
    "num": 510,
    "question": "Dövlət kreditinin əlamətidir:",
    "options": [
      {
        "text": "qısamüddətli qiymətli kağızlardan istifadə olunması",
        "correct": false
      },
      {
        "text": "kreditin yalnız pul formasında verilməsi",
        "correct": false
      },
      {
        "text": "veksellərin emissiyasının olması",
        "correct": false
      },
      {
        "text": "dövlətin həm kreditor,həm borclu kimi iştirakı",
        "correct": true
      },
      {
        "text": "dövlət kreditor kimi iştirak etmir",
        "correct": false
      }
    ]
  },
  {
    "num": 511,
    "question": "Daşınmaz əmlaka görə uzunmüddətli kreditin növünü göstərin:",
    "options": [
      {
        "text": "tədiyyə",
        "correct": false
      },
      {
        "text": "faktorinq",
        "correct": false
      },
      {
        "text": "ipoteka",
        "correct": true
      },
      {
        "text": "beynəlxalq",
        "correct": false
      },
      {
        "text": "lizinq",
        "correct": false
      }
    ]
  },
  {
    "num": 512,
    "question": "Beynəlxalq kredit verilir:",
    "options": [
      {
        "text": "plastik kartlarla",
        "correct": false
      },
      {
        "text": "yalnız dönərli olmayan valyuta ilə",
        "correct": false
      },
      {
        "text": "kreditor ölkənin, borcalanın ölkəsinin, üçüncü ölkənin valyutalarında və ya beynəlxalq pul vahidlərində",
        "correct": true
      },
      {
        "text": "ancaq dördüncü ölkənin valyutasında",
        "correct": false
      },
      {
        "text": "beynəlxalq kredit olmur",
        "correct": false
      }
    ]
  },
  {
    "num": 513,
    "question": "Beynəlxalq kreditin fərqləndirici xüsusiyyəti:",
    "options": [
      {
        "text": "sövdələşmədə hər hansı bir dövlətin Mərkəzi Bankının iştirakıdır",
        "correct": false
      },
      {
        "text": "sövdələşmədə hər hansı bir dövlətin iştirakının olmamasıdır",
        "correct": false
      },
      {
        "text": "borcalan və borc verənin müxtəlif ölkələrə mənsub olmasıdır",
        "correct": true
      },
      {
        "text": "sövdələşmədə Dünya Bankının iştirakıdır",
        "correct": false
      },
      {
        "text": "sövdələşmədə Beynəlxalq Valyuta Fondunun mütləq iştirakıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 514,
    "question": "Bank Qanunvericiliyi kommersiya banklarına icazə vermir:",
    "options": [
      {
        "text": "müştərilərə hesablaşma-kassa xidməti göstərmək",
        "correct": false
      },
      {
        "text": "kredit fəaliyyətini",
        "correct": false
      },
      {
        "text": "hesablar üzrə əməliyyat aparmaq",
        "correct": false
      },
      {
        "text": "ticarətlə məşğul olmaq",
        "correct": true
      },
      {
        "text": "kreditləşmədə vasitəçilik etmək",
        "correct": false
      }
    ]
  },
  {
    "num": 515,
    "question": "Mərkəzi Bankın daxili audit bölməsi həyata keçirir:",
    "options": [
      {
        "text": "Mərkəzi Bankın İdarə Heyətinin fəaliyyətini nizamlaşdırır",
        "correct": false
      },
      {
        "text": "İdarə Heyətinin üzvlərini işdən çıxarır",
        "correct": false
      },
      {
        "text": "illik maliyyə hesabatını təsdiq edir",
        "correct": false
      },
      {
        "text": "struktur bölmələrinin auditini həyata keçirir",
        "correct": true
      },
      {
        "text": "bölmə rəhbərini təyin edir",
        "correct": false
      }
    ]
  },
  {
    "num": 516,
    "question": "Bankın funksional təyinatıdır:",
    "options": [
      {
        "text": "deflyasiya",
        "correct": false
      },
      {
        "text": "inflyasiya",
        "correct": false
      },
      {
        "text": "tranzit",
        "correct": false
      },
      {
        "text": "devalvasiya",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": true
      }
    ]
  },
  {
    "num": 517,
    "question": "Kredit Təşkilatları İttifaqı və Assosiasiyaları:",
    "options": [
      {
        "text": "yalnız kassa əməliyyatlarını yerinə yetirə bilərlər",
        "correct": false
      },
      {
        "text": "bank əməliyyatlarını yerinə yetirə bilməzlər",
        "correct": true
      },
      {
        "text": "yalnız hesablaşma əməliyyatlarını yerinə yetirə bilərlər",
        "correct": false
      },
      {
        "text": "yalnız depozit və ssuda əməliyyatlarını yerinə yetirə bilərlər",
        "correct": false
      },
      {
        "text": "istənilən bank əməliyyatlarını yerinə yetirə bilərlər",
        "correct": false
      }
    ]
  },
  {
    "num": 518,
    "question": "Kommersiya banklarının əsas məqsədidir:",
    "options": [
      {
        "text": "mənfəət əldə etmək",
        "correct": true
      },
      {
        "text": "bank yaratmaq",
        "correct": false
      },
      {
        "text": "lisenziya vermək",
        "correct": false
      },
      {
        "text": "bankları ləğv etmək",
        "correct": false
      },
      {
        "text": "xərc əldə etmək",
        "correct": false
      }
    ]
  },
  {
    "num": 519,
    "question": "Bütün bank əməliyyatlarını hansı banklar yerinə yetirir?",
    "options": [
      {
        "text": "heç biri",
        "correct": false
      },
      {
        "text": "universal",
        "correct": true
      },
      {
        "text": "orta",
        "correct": false
      },
      {
        "text": "iri",
        "correct": false
      },
      {
        "text": "kiçik",
        "correct": false
      }
    ]
  },
  {
    "num": 520,
    "question": "Aşağıdakılardan hansı Bank Sisteminin ikinci pilləsində yerləşir?",
    "options": [
      {
        "text": "kredit büroları",
        "correct": false
      },
      {
        "text": "Qiymətli Kağızlar Bazarı",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": false
      },
      {
        "text": "sığorta təşkilatları",
        "correct": false
      },
      {
        "text": "kommersiya bankları",
        "correct": true
      }
    ]
  },
  {
    "num": 521,
    "question": "Bank Olmayan Kredit Təşkilatları (BOKT) Bank Sisteminin hansı pilləsində yerləşir?",
    "options": [
      {
        "text": "üçüncü pilləsində",
        "correct": false
      },
      {
        "text": "ikinci pilləsində",
        "correct": true
      },
      {
        "text": "birinci pilləsində",
        "correct": false
      },
      {
        "text": "dövlət pilləsində",
        "correct": false
      },
      {
        "text": "hökümət pilləsində",
        "correct": false
      }
    ]
  },
  {
    "num": 522,
    "question": "\"Bank\" termini nə deməkdir?",
    "options": [
      {
        "text": "stul",
        "correct": false
      },
      {
        "text": "kətil",
        "correct": false
      },
      {
        "text": "oturacaq",
        "correct": false
      },
      {
        "text": "kreslo",
        "correct": false
      },
      {
        "text": "masa,stol",
        "correct": true
      }
    ]
  },
  {
    "num": 523,
    "question": "Hesablaşmalar sahəsində əsas nəzarət edən orqan kimdir:",
    "options": [
      {
        "text": "Maliyyə Nazirliyi",
        "correct": false
      },
      {
        "text": "Vergilər Nazirliyi",
        "correct": false
      },
      {
        "text": "Hesablama Palatası",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "Mərkəzi Aparat",
        "correct": false
      }
    ]
  },
  {
    "num": 524,
    "question": "Kreditin prinsipləridir:",
    "options": [
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "faizini ödəmə",
        "correct": false
      },
      {
        "text": "təminatlıq",
        "correct": false
      },
      {
        "text": "qaytarılmaq",
        "correct": false
      },
      {
        "text": "məqsədlilik",
        "correct": false
      }
    ]
  },
  {
    "num": 525,
    "question": "…. görə dövlət,səhmdar, xüsusi və qarışıq bankları fərqləndirirlər:",
    "options": [
      {
        "text": "ərazi əlamətinə",
        "correct": false
      },
      {
        "text": "mülkiyyət formasına",
        "correct": true
      },
      {
        "text": "fəaliyyət miqyaslarına",
        "correct": false
      },
      {
        "text": "əməliyyatların xarakterinə",
        "correct": false
      },
      {
        "text": "əməliyyatların həcminə",
        "correct": false
      }
    ]
  },
  {
    "num": 526,
    "question": "Səhm neçənci dərəcəli qiymətli kağız növü hesab edilir?",
    "options": [
      {
        "text": "IV dərəcəli",
        "correct": false
      },
      {
        "text": "III dərəcəli",
        "correct": false
      },
      {
        "text": "II dərəcəli",
        "correct": false
      },
      {
        "text": "dərəcəsizdir",
        "correct": false
      },
      {
        "text": "I dərəcəli",
        "correct": true
      }
    ]
  },
  {
    "num": 527,
    "question": "Qiymətli kağız növüdür:",
    "options": [
      {
        "text": "ipoteka,maliyyə",
        "correct": false
      },
      {
        "text": "faktorinq,forfeytinq",
        "correct": false
      },
      {
        "text": "kredit, borc",
        "correct": false
      },
      {
        "text": "istiqraz, səhm",
        "correct": true
      },
      {
        "text": "depozit,uçot",
        "correct": false
      }
    ]
  },
  {
    "num": 528,
    "question": "Törəmə qiymətli kağız növüdür:",
    "options": [
      {
        "text": "bank, svop, opsion",
        "correct": false
      },
      {
        "text": "kredit, əmtəə, investisiya, fyuçers, opsion",
        "correct": false
      },
      {
        "text": "səhm, depozit, fyuçers, svop",
        "correct": false
      },
      {
        "text": "fyuçers, opsion, svop",
        "correct": true
      },
      {
        "text": "manat, svop, opsion, fyuçers",
        "correct": false
      }
    ]
  },
  {
    "num": 529,
    "question": "Kreditin hansı formasında o, pul formasında verilir və pul formasında qaytarılır:",
    "options": [
      {
        "text": "bank",
        "correct": true
      },
      {
        "text": "qarışıq",
        "correct": false
      },
      {
        "text": "əmtəə-pul",
        "correct": false
      },
      {
        "text": "əmtəə",
        "correct": false
      },
      {
        "text": "dünya",
        "correct": false
      }
    ]
  },
  {
    "num": 530,
    "question": "…kreditinin köməyilə kapitalın iqtisadiyyat sahələri arasında axını baş verir:",
    "options": [
      {
        "text": "mülki",
        "correct": false
      },
      {
        "text": "ipoteka",
        "correct": false
      },
      {
        "text": "kommersiya",
        "correct": false
      },
      {
        "text": "bank",
        "correct": true
      },
      {
        "text": "istehlak",
        "correct": false
      }
    ]
  },
  {
    "num": 531,
    "question": "Kreditin funksiyasını qeyd edin:",
    "options": [
      {
        "text": "riskli",
        "correct": false
      },
      {
        "text": "yenidənbölgü",
        "correct": true
      },
      {
        "text": "bərabərləşdirici",
        "correct": false
      },
      {
        "text": "nəzarət",
        "correct": false
      },
      {
        "text": "sosial",
        "correct": false
      }
    ]
  },
  {
    "num": 532,
    "question": "Borc faizi kimdən kimə gedir:",
    "options": [
      {
        "text": "borcalandan krediti üçüncü şəxsə təqdim edənə",
        "correct": false
      },
      {
        "text": "kreditordan borcalana",
        "correct": false
      },
      {
        "text": "üçüncü şəxslərə",
        "correct": false
      },
      {
        "text": "borcalandan kreditora",
        "correct": true
      },
      {
        "text": "qarantiya edəndən zəmanətçiyə",
        "correct": false
      }
    ]
  },
  {
    "num": 533,
    "question": "Kreditin mahiyyətinin daha doğru ifadəsini göstərin:",
    "options": [
      {
        "text": "kredit-pul vəsaiti olmayan vəsaitdir",
        "correct": false
      },
      {
        "text": "kredit-vaxtında qaytarılmalı olmayan vəsaitdir",
        "correct": false
      },
      {
        "text": "kredit-iqtisadiyyatda pul vəsaitlərinin yarısını qaytarılmaqla yenidən bölüşdürülmə formasıdır",
        "correct": false
      },
      {
        "text": "kredit - borc pul vəsaitlərinin qaytarılmaq, müddətlilik,ödənişlik şərtləri ilə kreditorla borclu arasındakı iqtisadi münasibətdir",
        "correct": true
      },
      {
        "text": "kredit-faktorinq əməliyyatıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 534,
    "question": "Kredit vasitəsi ilə.......bölüşdürülür:",
    "options": [
      {
        "text": "əmtəə qiymətliləri",
        "correct": false
      },
      {
        "text": "ancaq əmtəələr və pul vəsaitləri",
        "correct": false
      },
      {
        "text": "inkişafın əvvəlki dövrlərində yaradılmış qiymətlilər",
        "correct": false
      },
      {
        "text": "müvəqqəti azad olan dəyər",
        "correct": true
      },
      {
        "text": "əsas vəsaitlər",
        "correct": false
      }
    ]
  },
  {
    "num": 535,
    "question": "Təklif edilən ifadələrdən kreditin funksiyasını ayırın:",
    "options": [
      {
        "text": "vaxtında qaytarılmaq",
        "correct": false
      },
      {
        "text": "müvəqqəti azad vəsaitlərin səfərbər olunması",
        "correct": false
      },
      {
        "text": "təkrar istehsal",
        "correct": false
      },
      {
        "text": "yenidənbölgü funksiyası",
        "correct": true
      },
      {
        "text": "optimallaşdırma",
        "correct": false
      }
    ]
  },
  {
    "num": 536,
    "question": "Qaytarılmaq kreditin …:",
    "options": [
      {
        "text": "faizidir",
        "correct": false
      },
      {
        "text": "funksiyasıdır",
        "correct": false
      },
      {
        "text": "roludur",
        "correct": false
      },
      {
        "text": "prinsipidir",
        "correct": true
      },
      {
        "text": "təyinatıdır",
        "correct": false
      }
    ]
  },
  {
    "num": 537,
    "question": "Nağd pul tədavülünün idarə edilməsi:",
    "options": [
      {
        "text": "qeyri mərkəzləşdirilmiş qaydada həyata keçirilir",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank haqqında Qanunda nəzərdə tutulmuş qaydada həyata keçirilir",
        "correct": true
      },
      {
        "text": "hər bir təsərrüfat subyekti tərəfindən sərbəst həyata keçirilir",
        "correct": false
      },
      {
        "text": "mikrosəviyyədə idarə olunur",
        "correct": false
      },
      {
        "text": "təbii şəkildə baş verir",
        "correct": false
      }
    ]
  },
  {
    "num": 538,
    "question": "Banklar bankıdır:",
    "options": [
      {
        "text": "universal bank",
        "correct": false
      },
      {
        "text": "ixtisaslaşmış bank",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatı (BOKT)",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "kredit təşkilatları",
        "correct": false
      }
    ]
  },
  {
    "num": 539,
    "question": "Kommersiya banklarının ....... əməliyyatları müştərilərə borc vəsaitlərinin verilməsi ilə əlaqədardır:",
    "options": [
      {
        "text": "birja",
        "correct": false
      },
      {
        "text": "trast",
        "correct": false
      },
      {
        "text": "kredit",
        "correct": true
      },
      {
        "text": "faktorinq və lizinq",
        "correct": false
      },
      {
        "text": "anderraytinq",
        "correct": false
      }
    ]
  },
  {
    "num": 540,
    "question": "Borc verilmə prosesində bank kreditinin sövdələşmə obyektidir:",
    "options": [
      {
        "text": "bankın kassası",
        "correct": false
      },
      {
        "text": "dövlət mal-material qiymətliləri",
        "correct": false
      },
      {
        "text": "bankın statusu",
        "correct": false
      },
      {
        "text": "pul vəsaitləri",
        "correct": true
      },
      {
        "text": "vaxtı keçmiş borclar",
        "correct": false
      }
    ]
  },
  {
    "num": 541,
    "question": "Universal bank nədir?",
    "options": [
      {
        "text": "bütün bank əməliyyatlarını yerinə yetirir",
        "correct": true
      },
      {
        "text": "yalnız bir əməliyyat üzrə formalaşır",
        "correct": false
      },
      {
        "text": "heç bir bank əməliyyatını yerinə yetirmir",
        "correct": false
      },
      {
        "text": "bank deyil",
        "correct": false
      },
      {
        "text": "yalnız vasitəçilik əməliyyatlarını yerinə yetirir",
        "correct": false
      }
    ]
  },
  {
    "num": 542,
    "question": "Ssuda (borc) faizinin mövcud olmasının zəruri bazası:",
    "options": [
      {
        "text": "icarə münasibətləridir",
        "correct": false
      },
      {
        "text": "maliyyə münasibətləridir",
        "correct": false
      },
      {
        "text": "sığorta münasibətləridir",
        "correct": false
      },
      {
        "text": "riskli münasibətləridir",
        "correct": false
      },
      {
        "text": "kredit münasibətləridir",
        "correct": true
      }
    ]
  },
  {
    "num": 543,
    "question": "Kredit təşkilatında əməliyyat gününün müddəti ……tərəfindən müəyyən edilir:",
    "options": [
      {
        "text": "Mərkəzi Bankın baş mühasibi",
        "correct": false
      },
      {
        "text": "kredit təşkilatının özü",
        "correct": true
      },
      {
        "text": "Mərkəzi Bank",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın əməkdaşları",
        "correct": false
      },
      {
        "text": "bankın müdür müavini",
        "correct": false
      }
    ]
  },
  {
    "num": 544,
    "question": "Sintetik uçotun vəzifəsidir:",
    "options": [
      {
        "text": "idarəetmə qərarlarının qəbulu üçün sintetik uçotdan istifadə edilməsi",
        "correct": false
      },
      {
        "text": "analitik uçot məlumatlarının balansda əks etdirilməsi",
        "correct": false
      },
      {
        "text": "analitik uçot əməliyyatları üzrə dəqiq məlumatların əldə edilməsi",
        "correct": false
      },
      {
        "text": "analitik uçot məlumatlarının sintetik hesablar üzrə ümumiləşdirilməsi",
        "correct": true
      },
      {
        "text": "analitik uçot sənədlərində pul vəsaitlərinin, qiymətlilərin mövcudluğu və hərəkətinə nəzarət edilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 545,
    "question": "Banklarda mühasibat uçotu neçə gündən bir aparılmalıdır:",
    "options": [
      {
        "text": "üç gündən bir",
        "correct": false
      },
      {
        "text": "ayda bir dəfə",
        "correct": false
      },
      {
        "text": "iki gündən bir",
        "correct": false
      },
      {
        "text": "fasiləsiz",
        "correct": true
      },
      {
        "text": "5 gündən bir",
        "correct": false
      }
    ]
  },
  {
    "num": 546,
    "question": "Bankın gündəlik balansı onu tərtib edən əməliyyatçı, baş mühasib və ... tərəfindən imzalanır?",
    "options": [
      {
        "text": "bank rəhbəri",
        "correct": true
      },
      {
        "text": "baş mühasibin müavini",
        "correct": false
      },
      {
        "text": "mühafizəçi",
        "correct": false
      },
      {
        "text": "mühasib",
        "correct": false
      },
      {
        "text": "şöbə rəisi",
        "correct": false
      }
    ]
  },
  {
    "num": 547,
    "question": "Bank tərəfindən aparılmış gündəlik əməliyyatlar bankın hansı hesabat formasında ... əks olunmalıdır?",
    "options": [
      {
        "text": "bankın köməkçi mühasibat jurnalında",
        "correct": false
      },
      {
        "text": "bankın kassa dəftərində",
        "correct": false
      },
      {
        "text": "bankın məxaric sənədində",
        "correct": false
      },
      {
        "text": "bankın gündəlik balansında",
        "correct": true
      },
      {
        "text": "bankın mədaxil sənədində",
        "correct": false
      }
    ]
  },
  {
    "num": 548,
    "question": "Uçot siyasəti müəyyən edir:",
    "options": [
      {
        "text": "bankda kredit əməliyyatının əsaslarını",
        "correct": false
      },
      {
        "text": "bankda auditor xidmətinin əsaslarını",
        "correct": false
      },
      {
        "text": "bankda qiymətli kağızlarla olan əməliyyatların əsaslarını",
        "correct": false
      },
      {
        "text": "bankda mühasibat uçotunun formalaşdırılması və açıqlanmasının əsaslarını",
        "correct": true
      },
      {
        "text": "bankda vasitəçilik əməliyyatının əsaslarını",
        "correct": false
      }
    ]
  },
  {
    "num": 549,
    "question": "Mühasibat uçotunun aparılmasına , qanunvericiliyə riayət olunmasına ........ məsuliyyət daşıyır:",
    "options": [
      {
        "text": "investorlar",
        "correct": false
      },
      {
        "text": "kreditorlar",
        "correct": false
      },
      {
        "text": "bələdiyyələr",
        "correct": false
      },
      {
        "text": "bank rəhbərliyi və baş mühasib",
        "correct": true
      },
      {
        "text": "auditorlar",
        "correct": false
      }
    ]
  },
  {
    "num": 550,
    "question": "Baş mühasib gündəlik olaraq yoxlamalıdır:",
    "options": [
      {
        "text": "kredit əməliyyatlarını",
        "correct": false
      },
      {
        "text": "auditor fəaliyyətini",
        "correct": false
      },
      {
        "text": "sənədlərin kəsilməsini",
        "correct": false
      },
      {
        "text": "kassa əməliyyatlarının yekununu",
        "correct": true
      },
      {
        "text": "bankın acılıb bağlanmasını",
        "correct": false
      }
    ]
  },
  {
    "num": 551,
    "question": "Müştərinin kredit üzrə öz borcunu vaxtında və tam ödəmək qabiliyyətidir.....:",
    "options": [
      {
        "text": "mübadilə qabiliyyətliliyi",
        "correct": false
      },
      {
        "text": "risklilik qabiliyyətliliyi",
        "correct": false
      },
      {
        "text": "ödəmə qabiliyyətinin olmamması",
        "correct": false
      },
      {
        "text": "ödəmə qabiliyyətinin olması",
        "correct": true
      },
      {
        "text": "hesablaşma qabiliyyətliliyi",
        "correct": false
      }
    ]
  },
  {
    "num": 552,
    "question": "Müəssisənin kredit qabiliyyətidir:",
    "options": [
      {
        "text": "resursları artırmaq",
        "correct": false
      },
      {
        "text": "kredit riskini azaltmaq",
        "correct": false
      },
      {
        "text": "kredit almamaq",
        "correct": false
      },
      {
        "text": "kredit alıb geri qaytarmaq",
        "correct": true
      },
      {
        "text": "kreditin faizinin olmaması",
        "correct": false
      }
    ]
  },
  {
    "num": 553,
    "question": "Kredit sözünü izah edin:",
    "options": [
      {
        "text": "inanıram, etibar edirəm",
        "correct": true
      },
      {
        "text": "faktorinq",
        "correct": false
      },
      {
        "text": "bank",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "klirinq",
        "correct": false
      }
    ]
  },
  {
    "num": 554,
    "question": "Müddətinə görə kredit ayrılır:",
    "options": [
      {
        "text": "yalnız qısamüddətli",
        "correct": false
      },
      {
        "text": "müddətsiz",
        "correct": false
      },
      {
        "text": "yalnız uzunmüddətli",
        "correct": false
      },
      {
        "text": "yalnız ortamüddətli",
        "correct": false
      },
      {
        "text": "qısamüddətli, ortamüddətli, uzunmüddətli",
        "correct": true
      }
    ]
  },
  {
    "num": 555,
    "question": "Kreditin formalarını göstərin:",
    "options": [
      {
        "text": "yalnız istehlak",
        "correct": false
      },
      {
        "text": "depozit və klirinq",
        "correct": false
      },
      {
        "text": "faktorinq və forfeytinq",
        "correct": false
      },
      {
        "text": "yalnız ipoteka",
        "correct": false
      },
      {
        "text": "istehlak, ipoteka və s.",
        "correct": true
      }
    ]
  },
  {
    "num": 556,
    "question": "Kredit əməliyyatları nəticəsində .....:",
    "options": [
      {
        "text": "bankların faktorinq əməliyyatı formalaşır",
        "correct": false
      },
      {
        "text": "bankların lizinq əməliyyatı formalaşır",
        "correct": false
      },
      {
        "text": "banklara lisenziya verilir",
        "correct": false
      },
      {
        "text": "bankların kredit portfeli formalaşır",
        "correct": true
      },
      {
        "text": "bankların heç bir əməliyyatı formalaşmır",
        "correct": false
      }
    ]
  },
  {
    "num": 557,
    "question": "Kredit ........ xarakteri daşıyır:",
    "options": [
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "kommersiya",
        "correct": false
      },
      {
        "text": "pul sistemi",
        "correct": false
      },
      {
        "text": "borc",
        "correct": true
      },
      {
        "text": "investisiya",
        "correct": false
      }
    ]
  },
  {
    "num": 558,
    "question": "Bankın faiz dərəcəsi hesablanır ......:",
    "options": [
      {
        "text": "bankın xərcinə əsasən",
        "correct": false
      },
      {
        "text": "bankın gəlirinə əsasən",
        "correct": false
      },
      {
        "text": "kreditin məbləğinə görə",
        "correct": true
      },
      {
        "text": "müştərilərin istəyinə görə",
        "correct": false
      },
      {
        "text": "kreditin təminatına görə",
        "correct": false
      }
    ]
  },
  {
    "num": 559,
    "question": "Bank borclu qismində çıxış edir:",
    "options": [
      {
        "text": "öz səhmlərini reallaşdırdıqda",
        "correct": false
      },
      {
        "text": "lisenziya ləğv edildikdə",
        "correct": false
      },
      {
        "text": "bank bağlandıqda",
        "correct": false
      },
      {
        "text": "bank açıldıqda",
        "correct": false
      },
      {
        "text": "vəsaitləri cəlb etdikdə",
        "correct": true
      }
    ]
  },
  {
    "num": 560,
    "question": "Kreditləşmə prosesində rəhbər tutulan prinsiplərdən biridir:",
    "options": [
      {
        "text": "yetərlilik",
        "correct": false
      },
      {
        "text": "likvidlik",
        "correct": false
      },
      {
        "text": "bölüşdürücülük",
        "correct": false
      },
      {
        "text": "istifadəçilik",
        "correct": false
      },
      {
        "text": "müddətlilik",
        "correct": true
      }
    ]
  },
  {
    "num": 561,
    "question": "Kreditin formalarını göstərin:",
    "options": [
      {
        "text": "beynəlxalq kredit",
        "correct": false
      },
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "bank krediti",
        "correct": false
      },
      {
        "text": "dövlət krediti",
        "correct": false
      },
      {
        "text": "ipoteka krediti",
        "correct": false
      }
    ]
  },
  {
    "num": 562,
    "question": "Subhesab - bu .........:",
    "options": [
      {
        "text": "Mərkəzi Banka verilən hesabdır",
        "correct": false
      },
      {
        "text": "loro hesabdır",
        "correct": false
      },
      {
        "text": "Müşahidə Şurasına verilən hesabdır",
        "correct": false
      },
      {
        "text": "analitik hesab məlumatlarını özündə əks etdirməklə sintetik hesabın daxilindəki məlumatların təfsilatı ilə açıqlanmasını təmin edən  hesabdır",
        "correct": true
      },
      {
        "text": "kommersiya bankının İdarə Heyətinə verilən hesabdır",
        "correct": false
      }
    ]
  },
  {
    "num": 563,
    "question": "Sintetik hesab - bu..........:",
    "options": [
      {
        "text": "aktivlərin,öhdəliklərin, gəlirlərin, xərclərin debeti və krediti üzrə dövriyyələrin ümumiləşdirilməsinə xidmət edən hesabdır",
        "correct": true
      },
      {
        "text": "qarşılıqlı hesabdır",
        "correct": false
      },
      {
        "text": "qarışıq hesabdır",
        "correct": false
      },
      {
        "text": "qapalı hesabdır",
        "correct": false
      },
      {
        "text": "zərərli hesabdır",
        "correct": false
      }
    ]
  },
  {
    "num": 564,
    "question": "Bank uçotu özündə ..... əks etdirir:",
    "options": [
      {
        "text": "yol çeklərini və sənədləşmə əməliyyatlarını",
        "correct": false
      },
      {
        "text": "qiymətli kağızları",
        "correct": false
      },
      {
        "text": "bank sənədlərini",
        "correct": false
      },
      {
        "text": " kredit təşkilatlarında uçot işinin təşkili və əməliyyatların aparılması qaydalarını",
        "correct": true
      },
      {
        "text": "depozitləri",
        "correct": false
      }
    ]
  },
  {
    "num": 565,
    "question": "Kütləvi Ödənişlər üzrə Mərkəzləşdirilmiş İnformasiya Sistemidir:",
    "options": [
      {
        "text": "Milli Depozit Sistemi",
        "correct": false
      },
      {
        "text": "AZİPS",
        "correct": false
      },
      {
        "text": "Milli Kredit Sistemi",
        "correct": false
      },
      {
        "text": "XÖHKS",
        "correct": false
      },
      {
        "text": "KÖMİS",
        "correct": true
      }
    ]
  },
  {
    "num": 566,
    "question": "Bankın passiv əməliyyatıdır:",
    "options": [
      {
        "text": "əmanətlərin qəbulu",
        "correct": true
      },
      {
        "text": "«Nostro» hesablarının yaradılması",
        "correct": false
      },
      {
        "text": "«Loro» hesablarının yaradılması",
        "correct": false
      },
      {
        "text": "cari hesabların açılması",
        "correct": false
      },
      {
        "text": "faizlərin hesablanması",
        "correct": false
      }
    ]
  },
  {
    "num": 567,
    "question": "Bank resursu deyildir:",
    "options": [
      {
        "text": "bankın kapitalı",
        "correct": false
      },
      {
        "text": "borc vəsaitləri",
        "correct": false
      },
      {
        "text": "ehtiyatlar",
        "correct": false
      },
      {
        "text": "əmək haqqı fondu",
        "correct": true
      },
      {
        "text": "cəlb olunmuş vəsaitlər",
        "correct": false
      }
    ]
  },
  {
    "num": 568,
    "question": "Bankın yaradılmasının ilkin şərtidir:",
    "options": [
      {
        "text": "lizinq əməliyyatlarının yerinə yetirilməsi",
        "correct": false
      },
      {
        "text": "əhalinin vəsaitlərinin cəlb olunması",
        "correct": false
      },
      {
        "text": "qiymətli kağızların satın alınması",
        "correct": false
      },
      {
        "text": "təsisçi payının formalaşması",
        "correct": true
      },
      {
        "text": "Müşahidə Şurasının qərarı",
        "correct": false
      }
    ]
  },
  {
    "num": 569,
    "question": "Bankın Təsis Yığıncağında ......... iştirak etdikdə səlahiyyətli sayılır:",
    "options": [
      {
        "text": "bütün təsisçilər",
        "correct": true
      },
      {
        "text": "75 faiz təsisçi",
        "correct": false
      },
      {
        "text": "95 faiz təsisçi",
        "correct": false
      },
      {
        "text": "1 faiz təsisçi",
        "correct": false
      },
      {
        "text": "sadə səs çoxluğu olduqda",
        "correct": false
      }
    ]
  },
  {
    "num": 570,
    "question": "Bank Olmayan Kredit Təşkilatlarına (BOKT) hüquqi və fiziki şəxslərdən əmanət cəlb etmək ...:",
    "options": [
      {
        "text": "nizamnamə (şərikli) kapitalın 30% həcmində olar",
        "correct": false
      },
      {
        "text": "qadağan deyil",
        "correct": false
      },
      {
        "text": "nizamnamə (şərikli) kapitalın 50% həcmində olar",
        "correct": false
      },
      {
        "text": "qadağandır",
        "correct": true
      },
      {
        "text": "nizamnamə (şərikli) kapitalı həcmində olar",
        "correct": false
      }
    ]
  },
  {
    "num": 571,
    "question": "Banklararası kredit üzrə sövdələşmə aparılır:",
    "options": [
      {
        "text": "bank ssudaları bazarında",
        "correct": false
      },
      {
        "text": "ipoteka bazarında",
        "correct": false
      },
      {
        "text": "valyuta bazarında və sığorta təşkilatlarında",
        "correct": false
      },
      {
        "text": "banklararası bazarda",
        "correct": true
      },
      {
        "text": "qiymətli kağızlar bazarında",
        "correct": false
      }
    ]
  },
  {
    "num": 572,
    "question": "Mərkəzi Bank məqsədinə nail olmaq üçün bu funksiyanı yerinə yetirir:",
    "options": [
      {
        "text": "fiziki şəxslərin əmanətlərini depozitə cəlb edir",
        "correct": false
      },
      {
        "text": "fiziki şəxslərə kredit verir",
        "correct": false
      },
      {
        "text": "trast şirkətlərinə lisenziya verir",
        "correct": false
      },
      {
        "text": "Bank Assosiasiyalarına kredit verir və onların fəaliyyətini həyata keçirir",
        "correct": false
      },
      {
        "text": "dövlətin pul və valyuta siyasətini müəyyən edir və həyata keçirir",
        "correct": true
      }
    ]
  },
  {
    "num": 573,
    "question": "Gələcəkdə daha çox gəlir götürmək məqsədilə uzunmüddətli sərmayə yatırımıdır:",
    "options": [
      {
        "text": "lizinq",
        "correct": false
      },
      {
        "text": "investisiya",
        "correct": true
      },
      {
        "text": "trast",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "kredit",
        "correct": false
      }
    ]
  },
  {
    "num": 574,
    "question": "Bir bankın digər banka verdiyi kredit......adlanır:",
    "options": [
      {
        "text": "istehlak krediti",
        "correct": false
      },
      {
        "text": "fiziki şəxslərin banklara verdiyi kredit",
        "correct": false
      },
      {
        "text": "banklararası kredit",
        "correct": true
      },
      {
        "text": "hökümətlərarası kredit",
        "correct": false
      },
      {
        "text": "dövlətlərarası kredit",
        "correct": false
      }
    ]
  },
  {
    "num": 575,
    "question": "Mənfəət əldə etmək məqsədi ilə yaradılır..... :",
    "options": [
      {
        "text": "bank birləşmələri",
        "correct": false
      },
      {
        "text": "kommersiya bankları",
        "correct": true
      },
      {
        "text": "Banklar Assosiasiyaları",
        "correct": false
      },
      {
        "text": "Auditorlar Palatası",
        "correct": false
      },
      {
        "text": "Milli Depozit Sistemi",
        "correct": false
      }
    ]
  },
  {
    "num": 576,
    "question": "Restrukturizasiya nə deməkdir:",
    "options": [
      {
        "text": "bankların hüquqi-təşkilati formalarının yeniləşməsi",
        "correct": false
      },
      {
        "text": "bankların sağlamlaşdırılması",
        "correct": false
      },
      {
        "text": "fəaliyyət qabiliyyəti olmayan bankların ləğvi",
        "correct": false
      },
      {
        "text": "göstərilənlərin hamısı",
        "correct": true
      },
      {
        "text": "bankların birləşdirilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 577,
    "question": "Pul-kredit siyasəti aləti kimi məcburi ehtiyatlardan Mərkəzi Bank istifadə edir:",
    "options": [
      {
        "text": "öz itgilərinin ödənilməsində",
        "correct": false
      },
      {
        "text": "bankın ləğvi xərclərinin ödəniləmsində",
        "correct": false
      },
      {
        "text": "tədavüldəki pul kütləsinin az olmasında",
        "correct": false
      },
      {
        "text": "əmanətçılərin itgilərdən sığortalanmasında",
        "correct": false
      },
      {
        "text": "bankın likvidliyinin nizamlaşdırılmasında",
        "correct": true
      }
    ]
  },
  {
    "num": 578,
    "question": "......əməliyyatlar resurs bazasının formalaşdırılması məqsədilə bankların vəsait cəlb etmək əməliyyatlarıdır:",
    "options": [
      {
        "text": "aktiv",
        "correct": false
      },
      {
        "text": "trast",
        "correct": false
      },
      {
        "text": "komisyon-vasitəçilik",
        "correct": false
      },
      {
        "text": "passiv",
        "correct": true
      },
      {
        "text": "balansdan kənar",
        "correct": false
      }
    ]
  },
  {
    "num": 579,
    "question": "Banklar - bank fəaliyyətini Mərkəzi Bankın verdiyi . . . əsasında həyata keçirə bilər?",
    "options": [
      {
        "text": "müddətli razılıq",
        "correct": false
      },
      {
        "text": "şifahi razılıq",
        "correct": false
      },
      {
        "text": "protokol razılaşması",
        "correct": false
      },
      {
        "text": "xüsusi razılıq (lisenziya)",
        "correct": true
      },
      {
        "text": "müddətli lisenziya",
        "correct": false
      }
    ]
  },
  {
    "num": 580,
    "question": "Mərkəzi Bankın əmlakı:",
    "options": [
      {
        "text": "Vergilər Nazirliyinindir",
        "correct": false
      },
      {
        "text": "fiziki və hüquqi şəxslərindir",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatınındır (BOKT)",
        "correct": false
      },
      {
        "text": "dövlətindir",
        "correct": true
      },
      {
        "text": "Milli Məclisindir",
        "correct": false
      }
    ]
  },
  {
    "num": 581,
    "question": "Ölkənin baş bankı olan Mərkəzi Bankın marağındadır:",
    "options": [
      {
        "text": "kredit təşkilatlarının lisenziyasının ləğv edilməsi",
        "correct": false
      },
      {
        "text": "hesablaşma sisteminin mərkəzləşdirilməsi",
        "correct": false
      },
      {
        "text": "milli pul vahidinin və onun kursunun xarici valyutalara nisbətdə aşağı düşməsi",
        "correct": false
      },
      {
        "text": "pul tədavülünün idarə olunması",
        "correct": true
      },
      {
        "text": "kredit təşkilatlarının sayının ixtisar edilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 582,
    "question": "Mərkəzi Bankın fəaliyyətinin əsas məqsədi ... təmin edilməsidir?",
    "options": [
      {
        "text": "iqtisadiyyatın real sektorunun kreditləşdirilməsinin",
        "correct": false
      },
      {
        "text": "bank risklərnin qarşısını alınmasının",
        "correct": false
      },
      {
        "text": "fiziki şəxslərin kreditləşməsinin",
        "correct": false
      },
      {
        "text": "qiymətlərin sabitliyinin",
        "correct": true
      },
      {
        "text": "dövriyyə sənədlərinin",
        "correct": false
      }
    ]
  },
  {
    "num": 583,
    "question": "Mərkəzi Bank öz fəaliyyəti barəsində hesabat verir:",
    "options": [
      {
        "text": "Azərbaycan Respublikasının Prezidentinə",
        "correct": true
      },
      {
        "text": "İcra Hakimiyyətinə",
        "correct": false
      },
      {
        "text": "Milli Depozit Sisteminə",
        "correct": false
      },
      {
        "text": "fiziki şəxslərə",
        "correct": false
      },
      {
        "text": "xarici bankların vətəndaşlarına",
        "correct": false
      }
    ]
  },
  {
    "num": 584,
    "question": "Faktorinq,trast,forfeytinq bankların........əməliyyatıdır:",
    "options": [
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "uçot",
        "correct": false
      },
      {
        "text": "vasitəçilik",
        "correct": true
      },
      {
        "text": "investisiya",
        "correct": false
      },
      {
        "text": "lombard",
        "correct": false
      }
    ]
  },
  {
    "num": 585,
    "question": "Pul nişanlarının tədavülə buraxılması və tədavüldən çıxarılması üzrə müstəsna hüquqa malik qurum kim müəyyən olunmuşdur?",
    "options": [
      {
        "text": "Bank Respublika",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyi",
        "correct": false
      },
      {
        "text": "Kapital bank",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "Banklar Assosiasiyası",
        "correct": false
      }
    ]
  },
  {
    "num": 586,
    "question": "Mərkəzi Bankın fəaliyyətinin əsas məqsədi ... götürmək deyildir:",
    "options": [
      {
        "text": "ehtiyyat pulu",
        "correct": false
      },
      {
        "text": "borc",
        "correct": false
      },
      {
        "text": "mənfəət",
        "correct": true
      },
      {
        "text": "pul dəsti",
        "correct": false
      },
      {
        "text": "son vəsait",
        "correct": false
      }
    ]
  },
  {
    "num": 587,
    "question": "Bank Sistemi üzərində tənzimləyici və nəzarətedici səlahiyyətlər hansı orqana aiddir?",
    "options": [
      {
        "text": "Maliyyə Nazirliyinə",
        "correct": false
      },
      {
        "text": "Banklar Assosiasiyasına",
        "correct": false
      },
      {
        "text": "Kapital Banka",
        "correct": false
      },
      {
        "text": "Beynəlxalq Banka",
        "correct": false
      },
      {
        "text": "Mərkəzi Banka",
        "correct": true
      }
    ]
  },
  {
    "num": 588,
    "question": "Dövriyyəyə pulun buraxılmasında pulun miqdarı:",
    "options": [
      {
        "text": "hər zaman artır",
        "correct": false
      },
      {
        "text": "sıfıra bərabər olur",
        "correct": false
      },
      {
        "text": "artıb və ya azala bilər",
        "correct": true
      },
      {
        "text": "hər zaman azalır",
        "correct": false
      },
      {
        "text": "sabit qalır",
        "correct": false
      }
    ]
  },
  {
    "num": 589,
    "question": "Azərbaycan banklarının buraxdığı çeklər ….. dövr edə bilər:",
    "options": [
      {
        "text": "keçmiş SSRİ Respublikalarında",
        "correct": false
      },
      {
        "text": "MDB dövlətlərində",
        "correct": false
      },
      {
        "text": "yalnız ölkə ərazisində",
        "correct": true
      },
      {
        "text": "Rusiya və Belorusiyada",
        "correct": false
      },
      {
        "text": "Avropa ölkələrində",
        "correct": false
      }
    ]
  },
  {
    "num": 590,
    "question": "Çek kitabçalarının blank formalarını müəyyən edir:",
    "options": [
      {
        "text": "Milli Məclis",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyi",
        "correct": false
      },
      {
        "text": "İqtisadiyyat Nazirliyi",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank",
        "correct": true
      },
      {
        "text": "Xəzinədarlıq",
        "correct": false
      }
    ]
  },
  {
    "num": 591,
    "question": "Bankların müxbir hesabları açılır:",
    "options": [
      {
        "text": "bələdiyyələrin göstərişi əsasında",
        "correct": false
      },
      {
        "text": "Milli Depozit Sisteminin qərarı ilə",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyinin göstərişi əsasında",
        "correct": false
      },
      {
        "text": "banklararası müqavilələr əsasında",
        "correct": true
      },
      {
        "text": "Mərkəzi Bankın göstərişi əsasında",
        "correct": false
      }
    ]
  },
  {
    "num": 592,
    "question": "Kommersiya banklarının passiv əməliyyatlarına aiddir:",
    "options": [
      {
        "text": "daxili auditin maliyyə yoxlamaları",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın kommersiya banklarına lisenziya verilməsinin ləğv edilməsi",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın kommersiya banklarına lisenziya verilməsi",
        "correct": false
      },
      {
        "text": "bankların nağdsız əməliyyatlarının dövriyyəsinə nəzarət etməsi",
        "correct": false
      },
      {
        "text": "fiziki və hüquqi şəxslərin vəsaitlərinin cəlb edilməsi",
        "correct": true
      }
    ]
  },
  {
    "num": 593,
    "question": "Kreditin funksiyalarını göstərin:",
    "options": [
      {
        "text": "faizə qənaət",
        "correct": false
      },
      {
        "text": "gəlirlərə qənaət",
        "correct": false
      },
      {
        "text": "sənədlərə qənaət",
        "correct": false
      },
      {
        "text": "tədavül xərclərinə qənaət",
        "correct": true
      },
      {
        "text": "zamana qənaət",
        "correct": false
      }
    ]
  },
  {
    "num": 594,
    "question": "Müvəqqəti istifadə üçün qaytarılma, müddətlilik və ödənişli olmaqla verilən pul kapitalı … adlanır:",
    "options": [
      {
        "text": "sığorta",
        "correct": false
      },
      {
        "text": "kommersiya",
        "correct": false
      },
      {
        "text": "tərəfdaşlıq",
        "correct": false
      },
      {
        "text": "maliyyə",
        "correct": false
      },
      {
        "text": "borc",
        "correct": true
      }
    ]
  },
  {
    "num": 595,
    "question": "Gəlir və xərclərin gündəlik dəyişən nisbətini əks etdirən balans nəyə əsasən tərtib edilir:",
    "options": [
      {
        "text": "hər hansı bir dövrə görə",
        "correct": false
      },
      {
        "text": "sintetik əməliyyatlara görə",
        "correct": false
      },
      {
        "text": "hər hansı bir mühitə görə",
        "correct": false
      },
      {
        "text": "hər hansı bir müddətə görə",
        "correct": false
      },
      {
        "text": "gündəlik balansa",
        "correct": true
      }
    ]
  },
  {
    "num": 596,
    "question": "Mərkəzi Bankın məqsədini göstərin:",
    "options": [
      {
        "text": "fiziki şəxslərə xidmət göstərmək",
        "correct": false
      },
      {
        "text": "kommersiya banklarına lisenziya vermək",
        "correct": false
      },
      {
        "text": "faktorinq əməliyyatlarını həyata keçirtmək",
        "correct": false
      },
      {
        "text": "öz səlahiyyətləri çərçivəsində qiymətlərin sabitliyinin təmin edilməsidir",
        "correct": true
      },
      {
        "text": "trast əməliyyatlarını həyata keçirtmək",
        "correct": false
      }
    ]
  },
  {
    "num": 597,
    "question": "Bankların pul və kapital bazarında fəaliyyəti ........:",
    "options": [
      {
        "text": "qarışıq fəaliyyətdir",
        "correct": false
      },
      {
        "text": "qeyri-peşakar fəaliyyətdir",
        "correct": false
      },
      {
        "text": "könüllü fəaliyyətdir",
        "correct": false
      },
      {
        "text": "həvəskar fəaliyyətdir",
        "correct": false
      },
      {
        "text": "peşakar fəaliyyətdir",
        "correct": true
      }
    ]
  },
  {
    "num": 598,
    "question": "Banklar hansı səhm buraxmaq hüququna malikdir:",
    "options": [
      {
        "text": "müəyyən edilməyən qiymətli kağızlar",
        "correct": false
      },
      {
        "text": "yalnız nominal dəyəri olmayan səhm",
        "correct": false
      },
      {
        "text": "qiymətli kağızlar buraxmaq hüququ yoxdur",
        "correct": false
      },
      {
        "text": "yalnız adi səhm",
        "correct": false
      },
      {
        "text": "adi və imtiyazlı səhm",
        "correct": true
      }
    ]
  },
  {
    "num": 599,
    "question": "Səhmlər ...... qərarı ilə buraxılır:",
    "options": [
      {
        "text": "Müşahidə Şurasının",
        "correct": false
      },
      {
        "text": "bankın müştərisinin",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyinin",
        "correct": false
      },
      {
        "text": "Səhmdar Cəmiyyətin və Auditorun",
        "correct": false
      },
      {
        "text": "Səhmdarların Ümumi Yığıncağının",
        "correct": true
      }
    ]
  },
  {
    "num": 600,
    "question": "Bankın mənfəətliliyinin təhlilində hansı elementlərə mütləq səviyyədə diqqət yetirmək lazımdır:",
    "options": [
      {
        "text": "düzgün cavab yoxdur",
        "correct": false
      },
      {
        "text": "yalnız passivlərin səviyyəsinə",
        "correct": false
      },
      {
        "text": "yalnız gəlirlər səviyyəsinə",
        "correct": false
      },
      {
        "text": "passivlərin tərkibinə",
        "correct": false
      },
      {
        "text": "gəlirlər və xərclərin səviyyəsinə",
        "correct": true
      }
    ]
  },
  {
    "num": 601,
    "question": "Trast əməliyyatıdır .....:",
    "options": [
      {
        "text": "bankların aktiv əməliyyatıdır",
        "correct": false
      },
      {
        "text": "bankların passiv əməliyyatıdır",
        "correct": false
      },
      {
        "text": "kommersiya banklarının qeyri-kommersiya təşkilatlarına göstərdiyi etibar etməmə xidməti",
        "correct": false
      },
      {
        "text": "sığorta şirkətlərinə pul köçürmək xidməti",
        "correct": false
      },
      {
        "text": "kommersiya banklarının öz müştərilərinə göstərdiyi etibar etmə xidməti",
        "correct": true
      }
    ]
  },
  {
    "num": 602,
    "question": "Passiv əməliyyat nəticəsində ........:",
    "options": [
      {
        "text": "hesablaşmalar ləngiyir",
        "correct": false
      },
      {
        "text": "hesablaşmalar bərabərləşir",
        "correct": false
      },
      {
        "text": "bankın resursları artır",
        "correct": true
      },
      {
        "text": "bankın resursları azalır",
        "correct": false
      },
      {
        "text": "bankın fəaliyyəti dayanır",
        "correct": false
      }
    ]
  },
  {
    "num": 603,
    "question": "Depozit əməliyyatının subyektidir:",
    "options": [
      {
        "text": "əmtəələr",
        "correct": false
      },
      {
        "text": "banklar və müştərilər",
        "correct": true
      },
      {
        "text": "faktorinq şöbələri",
        "correct": false
      },
      {
        "text": "yalnız bankın işçiləri",
        "correct": false
      },
      {
        "text": "statistika şöbələri",
        "correct": false
      }
    ]
  },
  {
    "num": 604,
    "question": "Mərkəzləşdirilmiş kredit bazarının subyektləridir .......:",
    "options": [
      {
        "text": "kredit bürolarının ərazi idarələri",
        "correct": false
      },
      {
        "text": "sığorta şirkətlərinin agentləri",
        "correct": false
      },
      {
        "text": "sığorta təşkilatları",
        "correct": false
      },
      {
        "text": "Statistika Komitəsi",
        "correct": false
      },
      {
        "text": "banklar",
        "correct": true
      }
    ]
  },
  {
    "num": 605,
    "question": "Bankın mənfəəti hesabına yaradılır ......:",
    "options": [
      {
        "text": "aktivlər",
        "correct": false
      },
      {
        "text": "bank sənədləri",
        "correct": false
      },
      {
        "text": "passivlər və xərclər",
        "correct": false
      },
      {
        "text": "ehtiyatlar",
        "correct": true
      },
      {
        "text": "aktiv və passivlər",
        "correct": false
      }
    ]
  },
  {
    "num": 606,
    "question": "Banklar tərəfindən ehtiyatlar ....... məqsədilə yaradılır:",
    "options": [
      {
        "text": "Bank Olmayan Kredit Təşkilatlarına (BOKT) pul vəsaitlərini ödəmək üçün",
        "correct": false
      },
      {
        "text": "lisenziya verilməsi",
        "correct": false
      },
      {
        "text": "yeni avadanlığın alınması",
        "correct": false
      },
      {
        "text": "aktivlər üzrə mümkün zərərlərin ödənilməsi",
        "correct": true
      },
      {
        "text": "bank işçilərinə əmək haqqının verilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 607,
    "question": "Bank kapitalının yaradılması, tamamlanması və resurs bazasının formalaşması əməliyyatıdır:",
    "options": [
      {
        "text": "kredit əməliyyatları",
        "correct": false
      },
      {
        "text": "faktorinq əməliyyatları",
        "correct": false
      },
      {
        "text": "aktiv əməliyyatlar",
        "correct": false
      },
      {
        "text": "investisiya əməliyyatları",
        "correct": false
      },
      {
        "text": "passiv əməliyyatlar",
        "correct": true
      }
    ]
  },
  {
    "num": 608,
    "question": "Bankın xüsusi kapitalının funksiyasıdır:",
    "options": [
      {
        "text": "bölünmə",
        "correct": false
      },
      {
        "text": "birləşdirici",
        "correct": false
      },
      {
        "text": "hesablaşma",
        "correct": false
      },
      {
        "text": "operativ",
        "correct": true
      },
      {
        "text": "yenidənyaranma",
        "correct": false
      }
    ]
  },
  {
    "num": 609,
    "question": "Kommersiya bankının resurslarına daxildir:",
    "options": [
      {
        "text": "yalnız bankın əlavə kapitalı",
        "correct": false
      },
      {
        "text": "yalnız silinmiş olan vəsaitlər",
        "correct": false
      },
      {
        "text": "qalıq vəsaitlər",
        "correct": false
      },
      {
        "text": "xüsusi kapital və cəlb olunmuş vəsaitlər",
        "correct": true
      },
      {
        "text": "Dövlət Büdcəsinin vəsaitləri",
        "correct": false
      }
    ]
  },
  {
    "num": 610,
    "question": "Depozit əməliyyatının obyektidir:",
    "options": [
      {
        "text": "banklararası bazardakı sənədlərin dövriyyəsi",
        "correct": false
      },
      {
        "text": "Bank Olmayan Kredit Təşkilatlarındakı (BOKT) pul vəsaitləri",
        "correct": false
      },
      {
        "text": "bankdan götürülən pul vəsaitləri",
        "correct": false
      },
      {
        "text": "banka qoyulan pul vəsaitləri",
        "correct": true
      },
      {
        "text": "xəzinə öhdəlikləri",
        "correct": false
      }
    ]
  },
  {
    "num": 611,
    "question": "Fiziki şəxslərin vəsaitlərini ...... cəlb edə bilərlər:",
    "options": [
      {
        "text": "İqtisadiyyat Nazirliyindən icazəsi olan banklar",
        "correct": false
      },
      {
        "text": "Azərbaycan Respublikası Hökumətindən icazəsi olan Kredit İttifaqları",
        "correct": false
      },
      {
        "text": "Banklar Assosiasiyası",
        "correct": false
      },
      {
        "text": "bazarda 3 ildən çox iştirak edən banklar",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın lisenziyasını alan banklar",
        "correct": true
      }
    ]
  },
  {
    "num": 612,
    "question": "Bankların cəlb olunan vəsaitlərinin depozit mənbəyinə daxildir:",
    "options": [
      {
        "text": "birjadan gələn gəlirlər",
        "correct": false
      },
      {
        "text": "investisiya vəsaitləri",
        "correct": false
      },
      {
        "text": "sığorta təşkilatlarının verdiyi kreditlər",
        "correct": false
      },
      {
        "text": "əhalinin əmanətləri",
        "correct": true
      },
      {
        "text": "pulların dəyişdirilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 613,
    "question": "Pul yığımı ola bilər:",
    "options": [
      {
        "text": "yalnız nağd formada",
        "correct": false
      },
      {
        "text": "yalnız nağdsız formada",
        "correct": false
      },
      {
        "text": "nağd və nağdsız formada",
        "correct": true
      },
      {
        "text": "yalnız dövlətin qiymətli kağızlarına investisiya yolu ilə",
        "correct": false
      },
      {
        "text": "sənəd toplamaq yolu ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 614,
    "question": "Valyuta sferasında stabilliyin kəskin ziddiyyəti dedikdə.....başa düşülür:",
    "options": [
      {
        "text": "kredit böhranı",
        "correct": false
      },
      {
        "text": "sənəd böhranı",
        "correct": false
      },
      {
        "text": "əmtəə böhranı",
        "correct": false
      },
      {
        "text": "valyuta böhranı",
        "correct": true
      },
      {
        "text": "bank böhranı",
        "correct": false
      }
    ]
  },
  {
    "num": 615,
    "question": "Kredit vasitəsilə nə bölüşdürülür:",
    "options": [
      {
        "text": "yalnlz əmtəələr və plastik kartlar",
        "correct": false
      },
      {
        "text": "istehsal və tədavül sferasında olan dəyər",
        "correct": false
      },
      {
        "text": "əmlak",
        "correct": false
      },
      {
        "text": "müvəqqəti azad olan dəyər",
        "correct": true
      },
      {
        "text": "inkişafın əvvəlki dövrlərində yaradılmış qiymətlilər",
        "correct": false
      }
    ]
  },
  {
    "num": 616,
    "question": "Borc faizi kimdən kimə gedir:",
    "options": [
      {
        "text": "qarantiya edəndən zəmanətçiyə",
        "correct": false
      },
      {
        "text": "üçüncü şəxslərə",
        "correct": false
      },
      {
        "text": "borcalandan krediti qarantiya edənə",
        "correct": false
      },
      {
        "text": "borcalandan kreditora",
        "correct": true
      },
      {
        "text": "kreditordan borcalana",
        "correct": false
      }
    ]
  },
  {
    "num": 617,
    "question": "Kreditin funksiyasını qeyd edin:",
    "options": [
      {
        "text": "ipoteka",
        "correct": false
      },
      {
        "text": "riskli",
        "correct": false
      },
      {
        "text": "nəzarət",
        "correct": false
      },
      {
        "text": "yenidənbölgü",
        "correct": true
      },
      {
        "text": "sosial",
        "correct": false
      }
    ]
  },
  {
    "num": 618,
    "question": "…..kreditinin başlıca təyinatı əhalinin istehlak tələbinin ödənilməsidir:",
    "options": [
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "ipoteka",
        "correct": false
      },
      {
        "text": "əmtəə",
        "correct": false
      },
      {
        "text": "kommersiya",
        "correct": false
      },
      {
        "text": "istehlak",
        "correct": true
      }
    ]
  },
  {
    "num": 619,
    "question": "…..kreditinin köməyilə kapitalın iqtisadiyyat sahələri arasında axını baş verir:",
    "options": [
      {
        "text": "mülki",
        "correct": false
      },
      {
        "text": "istehlak",
        "correct": false
      },
      {
        "text": "bank",
        "correct": true
      },
      {
        "text": "kommersiya",
        "correct": false
      },
      {
        "text": "ipoteka",
        "correct": false
      }
    ]
  },
  {
    "num": 620,
    "question": "Mənfəət əldə etmək məqsədi ilə yaradılır..... :",
    "options": [
      {
        "text": "Mərkəzi Bank",
        "correct": false
      },
      {
        "text": "Beynəlxalq Valyuta Mərkəzləri",
        "correct": false
      },
      {
        "text": "kommersiya bankları",
        "correct": true
      },
      {
        "text": "banklararası kredit sistemi",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın ərazi idarələri",
        "correct": false
      }
    ]
  },
  {
    "num": 621,
    "question": "Beynəlxalq kreditin fərqləndirici xüsusiyyəti:",
    "options": [
      {
        "text": "sözdələşmədə Dünya Bankının iştirakıdır",
        "correct": false
      },
      {
        "text": "sövdələşmədə hər hansı bir fiziki şəxslərin mütləq iştirakıdır",
        "correct": false
      },
      {
        "text": "sövdələşmədə Beynəlxalq Valyuta Fondunun mütləq iştirakıdır",
        "correct": false
      },
      {
        "text": "sövdələşmədə hər hansı bir dövlətin Mərkəzi Bankının iştirakıdır",
        "correct": false
      },
      {
        "text": "borcalan və borc verənin müxtəlif ölkələrə mənsub olmasıdır",
        "correct": true
      }
    ]
  },
  {
    "num": 622,
    "question": "Bank krediti verilir:",
    "options": [
      {
        "text": "pul kisəsi şəklində",
        "correct": false
      },
      {
        "text": "yalnız pul formasında",
        "correct": true
      },
      {
        "text": "yalnız avadanlıq şəklində",
        "correct": false
      },
      {
        "text": "yalnız əmtəə formasında",
        "correct": false
      },
      {
        "text": "yalnız uçot formasında",
        "correct": false
      }
    ]
  },
  {
    "num": 623,
    "question": "Veksel, banknot və çek pulun ……. növünə aiddir:",
    "options": [
      {
        "text": "kağız",
        "correct": false
      },
      {
        "text": "real",
        "correct": false
      },
      {
        "text": "dünya pulu",
        "correct": false
      },
      {
        "text": "kredit",
        "correct": true
      },
      {
        "text": "metal",
        "correct": false
      }
    ]
  },
  {
    "num": 624,
    "question": "Ölkə ərazisində mal və xidmətlər üzrə ödəmələr ….. yerinə yetirilir:",
    "options": [
      {
        "text": "xarici valyuta və rubl ilə",
        "correct": false
      },
      {
        "text": "beynəlxalq hesablaşma pul vahidi ilə",
        "correct": false
      },
      {
        "text": "xarici valyutada",
        "correct": false
      },
      {
        "text": "SDR ilə",
        "correct": false
      },
      {
        "text": "yalnız milli valyutada",
        "correct": true
      }
    ]
  },
  {
    "num": 625,
    "question": "Nağd pul dövriyyəsi …….. gəlirlərinin böyük hissəsinin əldə edilməsi və xərclənməsinə xidmət edir:",
    "options": [
      {
        "text": "ərazi üzrə hökümət orqanlarının",
        "correct": false
      },
      {
        "text": "kommersiya banklarının",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın",
        "correct": false
      },
      {
        "text": "əhalinin",
        "correct": true
      },
      {
        "text": "təsərrüfat subyektlərinin",
        "correct": false
      }
    ]
  },
  {
    "num": 626,
    "question": "Bütün müəssisə və təşkilatlar özlərinin nağd pul vəsaitlərini saxlamalıdırlar:",
    "options": [
      {
        "text": "Maliyyə Nazirliyində",
        "correct": false
      },
      {
        "text": "sığorta təşkilatlarında",
        "correct": false
      },
      {
        "text": "xəzinədarlıqda",
        "correct": false
      },
      {
        "text": "kredit təşkilatlarında",
        "correct": true
      },
      {
        "text": "Beynəlxalq Valyuta Fondunda",
        "correct": false
      }
    ]
  },
  {
    "num": 627,
    "question": "Veksel …:",
    "options": [
      {
        "text": "qiymətli kağız və tədavül vasitəsidir",
        "correct": false
      },
      {
        "text": "borc öhdəliyi, müvəqqəti tədavül və tədiyə vasitəsidir",
        "correct": false
      },
      {
        "text": "borc öhdəliyidir",
        "correct": true
      },
      {
        "text": "pul vekselidir",
        "correct": false
      },
      {
        "text": "borc öhdəliyi və sonsuz ödəniş vasitəsidir",
        "correct": false
      }
    ]
  },
  {
    "num": 628,
    "question": "Nağdsız hesablaşmaların aparılmasından ötrü emitent və benefisiarlar üçün zəruri şərt kimi mövcud olmalıdır:",
    "options": [
      {
        "text": "bank müqaviləsi",
        "correct": false
      },
      {
        "text": "bank hesabları",
        "correct": true
      },
      {
        "text": "dövriyyə kassasının limiti",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın xüsusi icazəsi",
        "correct": false
      },
      {
        "text": "depozit hesabları",
        "correct": false
      }
    ]
  },
  {
    "num": 629,
    "question": "Hüquqi və fiziki şəxslər tərəfindən nağdsız hesablaşmalar aşağıdakıların köməyi ilə icra olunur:",
    "options": [
      {
        "text": "bankın ərazi idarələrinin",
        "correct": false
      },
      {
        "text": "Maliyyə Nazirliyinin rəsmi icazəsi olduqda",
        "correct": false
      },
      {
        "text": "SWIFT tərəfindən",
        "correct": false
      },
      {
        "text": "sığorta təşkilatlarının",
        "correct": false
      },
      {
        "text": "kommersiya banklarının",
        "correct": true
      }
    ]
  },
  {
    "num": 630,
    "question": "Akkreditiv üzrə nağd pulun ödənilməsi:",
    "options": [
      {
        "text": "Mərkəzi Bankın razılığı ilə mümkündür",
        "correct": false
      },
      {
        "text": "mümkün deyil",
        "correct": true
      },
      {
        "text": "bank emitentin razılığı ilə mümkündür",
        "correct": false
      },
      {
        "text": "mümkündür",
        "correct": false
      },
      {
        "text": "istisna hallarda mümkündür",
        "correct": false
      }
    ]
  },
  {
    "num": 631,
    "question": "Bank tərəfindən ödəyicidən ödəmə tapşırığı icra üçün qəbul edilir, yalnız:",
    "options": [
      {
        "text": "benefisiar bankın razılığı ilə",
        "correct": false
      },
      {
        "text": "vəsaiti ödəyən və vəsaiti qəbul edən tərəf eyni bankda xidmət göstərirsə",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın idarəçiliyinin ödəmə üçün razılığı əsasında",
        "correct": false
      },
      {
        "text": "ödəyicinin hesabında vəsaiti olduğu halda",
        "correct": true
      },
      {
        "text": "ödəyici kommersiya təşkilatı olduğu halda",
        "correct": false
      }
    ]
  },
  {
    "num": 632,
    "question": "Bankın müştərisi hansı məbləğə çek yaza bilər:",
    "options": [
      {
        "text": "məbləğ məhdudlaşdırırlmır",
        "correct": false
      },
      {
        "text": "müştərinin istəyinə uyğun məbləğdə",
        "correct": false
      },
      {
        "text": "bank hesabındakı hesabda olan vəsait həcmində",
        "correct": true
      },
      {
        "text": "1000 manata bölünən istənilən məbləğdə",
        "correct": false
      },
      {
        "text": "yalnız malgöndərənə olan borcu məbləğində",
        "correct": false
      }
    ]
  },
  {
    "num": 633,
    "question": "Xırda Ödənişlər üzrə Hesablaşma Klirinq Sistemində (XÖHKS) hesablaşmalar hansı valyutada aparılır?",
    "options": [
      {
        "text": "rubl ilə",
        "correct": false
      },
      {
        "text": "lari ilə",
        "correct": false
      },
      {
        "text": "milli valyuta ilə",
        "correct": true
      },
      {
        "text": "marka ilə",
        "correct": false
      },
      {
        "text": "dollar ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 634,
    "question": "Ödəniş tapşırığı tərtib edilir:",
    "options": [
      {
        "text": "Mərkəzi Bank tərəfindən",
        "correct": false
      },
      {
        "text": "satıcı tərəfindən",
        "correct": false
      },
      {
        "text": "inzibati orqanlar tərəfindən",
        "correct": false
      },
      {
        "text": "baş idarə tərəfindən",
        "correct": false
      },
      {
        "text": "ödəyici tərəfindən",
        "correct": true
      }
    ]
  },
  {
    "num": 635,
    "question": "Daşınmaz əmlaka görə uzunmüddətli kreditin növünü göstərin:",
    "options": [
      {
        "text": "bank",
        "correct": false
      },
      {
        "text": "istehlak",
        "correct": false
      },
      {
        "text": "benəlxalq",
        "correct": false
      },
      {
        "text": "ipoteka",
        "correct": true
      },
      {
        "text": "sığorta",
        "correct": false
      }
    ]
  },
  {
    "num": 636,
    "question": "Dövlət kreditinin əlamətidir:",
    "options": [
      {
        "text": "müəssisələrin borclu kimi iştirakı",
        "correct": false
      },
      {
        "text": "fiziki şəxslərin borclu kimi iştirakı",
        "correct": false
      },
      {
        "text": "ərazilərin kreditor qismində iştirakı",
        "correct": false
      },
      {
        "text": "kredit təşkilatlarının borclu kimi iştirakı",
        "correct": false
      },
      {
        "text": "dövlətin həm kreditor,həm borclu kimi iştirakı",
        "correct": true
      }
    ]
  },
  {
    "num": 637,
    "question": "Müasir iqtisadiyyatda kreditin daha çox yayılmış forması hansıdır:",
    "options": [
      {
        "text": "pul vəsaiti krediti",
        "correct": false
      },
      {
        "text": "bank krediti",
        "correct": true
      },
      {
        "text": "lizinq",
        "correct": false
      },
      {
        "text": "əvəzsiz kredit",
        "correct": false
      },
      {
        "text": "sənəd dövriyyəsinə verilən kredit",
        "correct": false
      }
    ]
  },
  {
    "num": 638,
    "question": "Valyuta məzənnələrindəki dəyişikliklərə görə yaranan riskdir.....:",
    "options": [
      {
        "text": "faiz dərəcəsi riski",
        "correct": false
      },
      {
        "text": "likvidlik riski",
        "correct": false
      },
      {
        "text": "kapital riski",
        "correct": false
      },
      {
        "text": "valyuta riski",
        "correct": true
      },
      {
        "text": "əmtəə-mal riski",
        "correct": false
      }
    ]
  },
  {
    "num": 639,
    "question": "Kapitalın və digər qiymətli kağızların qiymətinin dəyişməsi nəticəsində yaranan riskdir:",
    "options": [
      {
        "text": "likvidlik riski",
        "correct": false
      },
      {
        "text": "kapital riski",
        "correct": true
      },
      {
        "text": "valyuta riski",
        "correct": false
      },
      {
        "text": "əmtəə-mal riski",
        "correct": false
      },
      {
        "text": "faiz dərəcəsi riski",
        "correct": false
      }
    ]
  },
  {
    "num": 640,
    "question": "Faiz dərəcəsinin dəyişməsi nəticəsində yaranan riskdir.... :",
    "options": [
      {
        "text": "əmtəə-mal riski",
        "correct": false
      },
      {
        "text": "faiz dərəcəsi riski",
        "correct": true
      },
      {
        "text": "likvidlik riski",
        "correct": false
      },
      {
        "text": "kapital riski",
        "correct": false
      },
      {
        "text": "valyuta riski",
        "correct": false
      }
    ]
  },
  {
    "num": 641,
    "question": "Bazar riskinə aid olmayan riski seçin ......:",
    "options": [
      {
        "text": "xarici valyuta riski",
        "correct": false
      },
      {
        "text": "reputasiya riski",
        "correct": true
      },
      {
        "text": "kapital riski",
        "correct": false
      },
      {
        "text": "əmtəə-mal riski",
        "correct": false
      },
      {
        "text": "faiz dərəcəsi riski",
        "correct": false
      }
    ]
  },
  {
    "num": 642,
    "question": "Bazar riskinə aid olmayan riski seçin ......:",
    "options": [
      {
        "text": "əmtəə-mal riski",
        "correct": false
      },
      {
        "text": "xarici valyuta riski",
        "correct": false
      },
      {
        "text": "faiz dərəcəsi riski",
        "correct": false
      },
      {
        "text": "əməliyyat riski",
        "correct": true
      },
      {
        "text": "kapital riski",
        "correct": false
      }
    ]
  },
  {
    "num": 643,
    "question": "Xarici valyuta kursunun uğursuz dəyişməsi nəticəsində kredit təşkilatında itkilərin yaranma riskidir:",
    "options": [
      {
        "text": "bazar riski",
        "correct": false
      },
      {
        "text": "sövdələşmə riski",
        "correct": false
      },
      {
        "text": "likvidlik riski",
        "correct": false
      },
      {
        "text": "məzənnə riski",
        "correct": true
      },
      {
        "text": "əməliyyat riski",
        "correct": false
      }
    ]
  },
  {
    "num": 644,
    "question": "Nağd pul dövriyyəsi dedikdə.....başa düşülür:",
    "options": [
      {
        "text": "nağd pul nişanlarının fasiləli hərəkəti",
        "correct": false
      },
      {
        "text": "nağd pul nişanlarının istifadə edilməməsi",
        "correct": false
      },
      {
        "text": "nağd pul nişanlarının dondurulması",
        "correct": false
      },
      {
        "text": "nağd pul nişanlarının fasiləsiz hərəkəti",
        "correct": true
      },
      {
        "text": "nağd pul nişanlarının rüblük hərəkəti",
        "correct": false
      }
    ]
  },
  {
    "num": 645,
    "question": "Kommersiya bankları ............ funksiyasını yerinə yetirir:",
    "options": [
      {
        "text": "hökümətin bankiri",
        "correct": false
      },
      {
        "text": "dövlətin emissiya mərkəzi",
        "correct": false
      },
      {
        "text": "vəsaitlərin depozitlərə toplanılması",
        "correct": true
      },
      {
        "text": "hökumətin kassiri və Milli Depozit Sisteminin vəsaitlərinin cəlb edilməsi",
        "correct": false
      },
      {
        "text": "banklar bankı",
        "correct": false
      }
    ]
  },
  {
    "num": 646,
    "question": "Mərkəzi Bankın pul siyasəti alətidir:",
    "options": [
      {
        "text": "kommersiya banklarına lisenziyaların verilməsi",
        "correct": false
      },
      {
        "text": "fiziki şəxslərin hesablarına nəzarət etmək",
        "correct": false
      },
      {
        "text": "akkreditivlərə nəzarət etmək",
        "correct": false
      },
      {
        "text": "lizinq əməliyyatlarının həyata keçirilməsi",
        "correct": false
      },
      {
        "text": "açıq bazarda əməliyyatların aparılması",
        "correct": true
      }
    ]
  },
  {
    "num": 647,
    "question": "Kredit təşkilatlarının yenidən maliyyələşdirilməsi:",
    "options": [
      {
        "text": "Mərkəzi Bankın son məqsədidir",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın hüquqi funksiyasıdır",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın sənədləşmə əməliyyatıdır",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın lisenziya vermə əməliyyatıdır",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın pul siyasəti alətidir",
        "correct": true
      }
    ]
  },
  {
    "num": 648,
    "question": "……krediti formasında borcalanlar qismində fiziki şəxslər, kreditorlar qismində isə kredit idarələri və ticarət təşkilatları çıxış edir:",
    "options": [
      {
        "text": "beynəlxalq",
        "correct": false
      },
      {
        "text": "mülki",
        "correct": false
      },
      {
        "text": "debet",
        "correct": false
      },
      {
        "text": "istehlak",
        "correct": true
      },
      {
        "text": "valyuta",
        "correct": false
      }
    ]
  },
  {
    "num": 649,
    "question": "Hansı plastik kart üzrə hesab sahibi bankın ona təqdim etdiyi vəsaitlərdən yalnız ona müəyyən etdiyi limit çərçivəsində hesablaşma yerinə yetirə bilər:",
    "options": [
      {
        "text": "icazəli kart",
        "correct": false
      },
      {
        "text": "qalıq kartı",
        "correct": false
      },
      {
        "text": "limitli kart",
        "correct": false
      },
      {
        "text": "kredit kartı",
        "correct": true
      },
      {
        "text": "maqnit kartı",
        "correct": false
      }
    ]
  },
  {
    "num": 650,
    "question": "Nağd pulların ilkin emissiyası haradan başlayır:",
    "options": [
      {
        "text": "axşam kassalarından",
        "correct": false
      },
      {
        "text": "ticarət şəbəkələrindən",
        "correct": false
      },
      {
        "text": "depozit kassalarından",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın ərazi idarələrindən",
        "correct": true
      },
      {
        "text": "depozit əməliyyatlarından",
        "correct": false
      }
    ]
  },
  {
    "num": 651,
    "question": "Nağd pulun dövriyyəsi......təşkil edilərək həyata keçirilir :",
    "options": [
      {
        "text": "müştərilər tərəfindən",
        "correct": false
      },
      {
        "text": "Mərkəzi Bank və kommersiya bankları vasitəsi ilə",
        "correct": true
      },
      {
        "text": "BOKT-lar (Bank Olmayan Kredit Təşkilatı) tərəfindən",
        "correct": false
      },
      {
        "text": "Milli Məclis tərəfindən",
        "correct": false
      },
      {
        "text": "Auditorlar Palatası tərəfindən",
        "correct": false
      }
    ]
  },
  {
    "num": 652,
    "question": "Nağd pul tədavülü üçün Mərkəzi Bank......:",
    "options": [
      {
        "text": "pul nişanlarına olan tələbatı müəyyənləşdirir",
        "correct": false
      },
      {
        "text": "pul nişanlarının ehtiyatını yaradır",
        "correct": false
      },
      {
        "text": "kredit təşkilatları tərəfindən pulun saxlanılması və inkassasiya qaydalarını müəyyən edir",
        "correct": false
      },
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "pul nişanlarının istehsalını təşkil edir",
        "correct": false
      }
    ]
  },
  {
    "num": 653,
    "question": "Pul saxlanılan yer hansı texniki tələblərə cavab verməlidir :",
    "options": [
      {
        "text": "siqnalizasiya qurğuları ilə təchiz olunmalıdır",
        "correct": false
      },
      {
        "text": "hamısı",
        "correct": true
      },
      {
        "text": "alt hissədə boşluq və ya zirzəmi olmamalıdır",
        "correct": false
      },
      {
        "text": "oda davamlı dəmir seyflərlə təchiz olunmalıdır",
        "correct": false
      },
      {
        "text": "təhlükəsizlik tədbirlərinə cavab verməlidir",
        "correct": false
      }
    ]
  },
  {
    "num": 654,
    "question": "İnkassasiya nədir :",
    "options": [
      {
        "text": "nağd pulların müştəriyə verilməsidir",
        "correct": false
      },
      {
        "text": "faktorinq əməliyyatıdır",
        "correct": false
      },
      {
        "text": "nağd pul və digər qiymətlilərin olduğu yerdən təyinat yerinə daşınılmasıdır",
        "correct": true
      },
      {
        "text": "lisenziya verilməsidir",
        "correct": false
      },
      {
        "text": "bankın məqsədidir",
        "correct": false
      }
    ]
  },
  {
    "num": 655,
    "question": "Akkreditiv üzrə fəaliyyət müddəti və hesablaşma qaydası ….... müəyyən edilir:",
    "options": [
      {
        "text": "ödəyici və satıcı arasındakı müqavilə ilə",
        "correct": true
      },
      {
        "text": "Maliyyə Nazirliyi ilə",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankı ilə",
        "correct": false
      },
      {
        "text": "Vergilər Nazirliyi ilə",
        "correct": false
      },
      {
        "text": "Hesablama Palatası ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 656,
    "question": "Beynəlxalq hesablaşmalar kimin vasitəsilə aparılır?",
    "options": [
      {
        "text": "valyuta birjalarının",
        "correct": false
      },
      {
        "text": "lizinq şirkətlərinin",
        "correct": false
      },
      {
        "text": "kommersiya banklarının",
        "correct": true
      },
      {
        "text": "investisiya fondlarının",
        "correct": false
      },
      {
        "text": "investisiya şirkətlərinin",
        "correct": false
      }
    ]
  },
  {
    "num": 657,
    "question": "Nağdsız hesablaşmaların formalarına aiddir:",
    "options": [
      {
        "text": "bank sənədləri ilə hesablaşmalar",
        "correct": false
      },
      {
        "text": "ödəniş tapşırıqları,ödəniş-tələbnamə tapşırıqları,inkasso sərəncamları üzrə hesablaşmalar",
        "correct": true
      },
      {
        "text": "metal pullar və inkasso sərəncamları",
        "correct": false
      },
      {
        "text": "depozitlər, kreditlər",
        "correct": false
      },
      {
        "text": "kağız pullar və metal pullar",
        "correct": false
      }
    ]
  },
  {
    "num": 658,
    "question": "Ödəniş tapşırığı bank tərəfindən icraya qəbul edilir:",
    "options": [
      {
        "text": "müştərinin banka borcu olmadıqda",
        "correct": false
      },
      {
        "text": "müştərinin xəbəri olduqda",
        "correct": false
      },
      {
        "text": "hesabda vəsait olmadıqda",
        "correct": false
      },
      {
        "text": "hesabda kifayət qədər vəsait olduqda",
        "correct": true
      },
      {
        "text": "müştəri vaxtı keçmiş borcunu ödədikdə",
        "correct": false
      }
    ]
  },
  {
    "num": 659,
    "question": "Pul dövriyyəsi .......ayrılır:",
    "options": [
      {
        "text": "yalnız nağd pul dövriyyəsinə",
        "correct": false
      },
      {
        "text": "yalnız nağdsız pul dövriyyəsinə",
        "correct": false
      },
      {
        "text": "nağdsız və qısamüddətli pul dövriyyəsinə",
        "correct": false
      },
      {
        "text": "nağd və nağdsız pul dövriyyəsinə",
        "correct": true
      },
      {
        "text": "nağd və uzunmüddətli pul dövriyyəsinə",
        "correct": false
      }
    ]
  },
  {
    "num": 660,
    "question": "Aksept nədir?",
    "options": [
      {
        "text": "ödəyicinin birja əməliyyatıdır",
        "correct": false
      },
      {
        "text": "ödəyicinin sənədinin olmamasıdır",
        "correct": false
      },
      {
        "text": "ödəyicinin vəsaiti olmadıqda aparılan əməliyyatdır",
        "correct": false
      },
      {
        "text": "ödəyicinin tələb olunan ödənişləri həyata keçirməsinə razılıq deməkdir",
        "correct": true
      },
      {
        "text": "ödəyicinin razılığı olmadan aparılan əməliyyatdır",
        "correct": false
      }
    ]
  },
  {
    "num": 661,
    "question": "SWİFT- nədir?",
    "options": [
      {
        "text": "Ümumidünya Vergi Sistemi",
        "correct": false
      },
      {
        "text": "Ümumidünya Məlumat Sistemi",
        "correct": false
      },
      {
        "text": "Ölkələrarası Depozit Sistemi",
        "correct": false
      },
      {
        "text": "Ümumidünya Banklararası Maliyyə Telekomunikasiya Sistemi",
        "correct": true
      },
      {
        "text": "Ölkələrarası Beynəlxalq Valyuta Sistemi",
        "correct": false
      }
    ]
  },
  {
    "num": 662,
    "question": "Kredit təşkilatının hüquqi normativ aktlarının və bağlanılmış müqavilələrin tələblərinə riayət etməməsi ilə əlaqədar yaranan itkilər hansı risk qrupuna daxildir:",
    "options": [
      {
        "text": "hüquqi risk",
        "correct": true
      },
      {
        "text": "kənar risk",
        "correct": false
      },
      {
        "text": "işgüzarlığın itirilmə riski",
        "correct": false
      },
      {
        "text": "strateji risk",
        "correct": false
      },
      {
        "text": "potensial risk",
        "correct": false
      }
    ]
  },
  {
    "num": 663,
    "question": "Bankın strategiyasının müəyyənləşdirilməsi haqqında qərar qəbul edilərkən buraxılan səhvlərlə əlaqədar bankda itkilərin yaranma riskidir:",
    "options": [
      {
        "text": "uzunmüddətli risk",
        "correct": false
      },
      {
        "text": "qısa müddətli risk",
        "correct": false
      },
      {
        "text": "mütərəqqi risk",
        "correct": false
      },
      {
        "text": "strateji risk",
        "correct": true
      },
      {
        "text": "faktiki risk",
        "correct": false
      }
    ]
  },
  {
    "num": 664,
    "question": "Kredit təşkilatının xarici valyutalarda açdığı mövqe üzrə xarici valyuta kurslarının əlverişsiz dəyişilməsi ilə əlaqədar itkilər riski necə adlanır?",
    "options": [
      {
        "text": "fond riski",
        "correct": false
      },
      {
        "text": "kredit riski",
        "correct": false
      },
      {
        "text": "faiz riski",
        "correct": false
      },
      {
        "text": "valyuta riski",
        "correct": true
      },
      {
        "text": "hesablaşma riski",
        "correct": false
      }
    ]
  },
  {
    "num": 665,
    "question": "Kredit təşkilatının aktivləri, passivləri və balansdan kənar alətləri üzrə faiz dərəcələrinin əlverişsiz dəyişikliyi ilə əlaqədar yaranan itkilər riskidir:",
    "options": [
      {
        "text": "fond riski",
        "correct": false
      },
      {
        "text": "valyuta riski",
        "correct": false
      },
      {
        "text": "trast riski",
        "correct": false
      },
      {
        "text": "faiz riski",
        "correct": true
      },
      {
        "text": "kredit riski",
        "correct": false
      }
    ]
  },
  {
    "num": 666,
    "question": "Bazarda faiz dərəcələrinin, valyuta məzənnələrinin, qiymətli kağızların və əmtəələrin dəyərində baş verən dəyişikliklərlə əlaqadar yaranan … riskdir?",
    "options": [
      {
        "text": "strateji risk",
        "correct": false
      },
      {
        "text": "əməliyyat riskləri",
        "correct": false
      },
      {
        "text": "bazar riski",
        "correct": true
      },
      {
        "text": "hüquq riski",
        "correct": false
      },
      {
        "text": "kredit riski",
        "correct": false
      }
    ]
  },
  {
    "num": 667,
    "question": "Bank kreditində sövdələşmə obyekti kimi nə çıxış edir:",
    "options": [
      {
        "text": "istehsal vasitələri",
        "correct": false
      },
      {
        "text": "qiymətli metallar",
        "correct": false
      },
      {
        "text": "əsas vəsaitlər",
        "correct": false
      },
      {
        "text": "pul vəsaitləri",
        "correct": true
      },
      {
        "text": "əmtəə material dəyərliləri",
        "correct": false
      }
    ]
  },
  {
    "num": 668,
    "question": "Adətən investisiya məqsədləri üçün hansı bank ssudaları istifadə edilir:",
    "options": [
      {
        "text": "istehlak",
        "correct": false
      },
      {
        "text": "ortamüddətli və overdraft",
        "correct": false
      },
      {
        "text": "iki günlük kredit",
        "correct": false
      },
      {
        "text": "uzunmüddətli",
        "correct": true
      },
      {
        "text": "ticarət",
        "correct": false
      }
    ]
  },
  {
    "num": 669,
    "question": "…...krediti icarə müqaviləsinə əsaslanır və avadanlığın qalıq dəyəri ilə alınması hüququ verir:",
    "options": [
      {
        "text": "beynəlxalq",
        "correct": false
      },
      {
        "text": "təsərrüfat",
        "correct": false
      },
      {
        "text": "ipoteka",
        "correct": false
      },
      {
        "text": "kommersiya",
        "correct": false
      },
      {
        "text": "lizinq",
        "correct": true
      }
    ]
  },
  {
    "num": 670,
    "question": "……kreditinin əhəmiyyəti odur ki, o, istehsalın modernləşməsinə, elmi - texniki nailiyyətlərin istehsalda tətbiqinə imkan yaradır:",
    "options": [
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "dövlət",
        "correct": false
      },
      {
        "text": "lizinq",
        "correct": true
      },
      {
        "text": "tədiyyə",
        "correct": false
      },
      {
        "text": "ipoteka",
        "correct": false
      }
    ]
  },
  {
    "num": 671,
    "question": "Kreditin hansı formasında o, pul formasında verilir və pul formasında qaytarılır:",
    "options": [
      {
        "text": "beynəlxalq",
        "correct": false
      },
      {
        "text": "dünya",
        "correct": false
      },
      {
        "text": "əmtəə",
        "correct": false
      },
      {
        "text": "bank",
        "correct": true
      },
      {
        "text": "əmtəə-pul",
        "correct": false
      }
    ]
  },
  {
    "num": 672,
    "question": "Hansı valyuta məhdudiyyət olmadan istənilən xarici valyutaya dəyişdirilir:",
    "options": [
      {
        "text": "qapalı valyuta",
        "correct": false
      },
      {
        "text": "konvertasiya olunmayan",
        "correct": false
      },
      {
        "text": "qismən konvertasiya olunan",
        "correct": false
      },
      {
        "text": "cari hesablar üzrə konvertasiya olunan",
        "correct": false
      },
      {
        "text": "sərbəst konvertasiya olunan",
        "correct": true
      }
    ]
  },
  {
    "num": 673,
    "question": "Dəst nədir :",
    "options": [
      {
        "text": "100 ( yüz) vərəqdən ibarət əskinazları saxlayan kassadır",
        "correct": false
      },
      {
        "text": "pulların yenilənməsidir",
        "correct": false
      },
      {
        "text": "pulların ləğv edilməsidir",
        "correct": false
      },
      {
        "text": "eyni nominal dəyərdən olan 100 (yüz) vərəqdən ibarət əskinazların banderol ilə bağlanılmasıdır",
        "correct": true
      },
      {
        "text": "pulların möhürüdür",
        "correct": false
      }
    ]
  },
  {
    "num": 674,
    "question": "Banderol nədir :",
    "options": [
      {
        "text": "pul dəstini saxlamaq üçün açardır",
        "correct": false
      },
      {
        "text": "Mərkəzi Bankın pulları saxlamaq kassasıdır",
        "correct": false
      },
      {
        "text": "möhürdür",
        "correct": false
      },
      {
        "text": "pul dəstələrini bağlamaq üçün Mərkəzi Bank tərəfindən təsdiq edilmiş vahid formalı kağız lentdir",
        "correct": true
      },
      {
        "text": "pul vəsaitlərini saymaq üçün testdir",
        "correct": false
      }
    ]
  },
  {
    "num": 675,
    "question": "Forfeytinq əməliyyatı bankın.......əməliyyatıdır:",
    "options": [
      {
        "text": "kredit",
        "correct": false
      },
      {
        "text": "şəxsi",
        "correct": false
      },
      {
        "text": "sürətli köçürmə",
        "correct": false
      },
      {
        "text": "vasitəçilik",
        "correct": true
      },
      {
        "text": "qeyri-depozit",
        "correct": false
      }
    ]
  },
  {
    "num": 676,
    "question": "Trast əməliyyatı bankın.......əməliyyatıdır:",
    "options": [
      {
        "text": "əmtəə",
        "correct": false
      },
      {
        "text": "hesablaşma",
        "correct": false
      },
      {
        "text": "deponlaşdırma",
        "correct": false
      },
      {
        "text": "vasitəçilik",
        "correct": true
      },
      {
        "text": "sənədləşmə",
        "correct": false
      }
    ]
  },
  {
    "num": 677,
    "question": "Faktorinq əməliyyatı bankın.......əməliyyatıdır:",
    "options": [
      {
        "text": "kredit",
        "correct": false
      },
      {
        "text": "kassa",
        "correct": false
      },
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "vasitəçilik",
        "correct": true
      },
      {
        "text": "sənədləşmə",
        "correct": false
      }
    ]
  },
  {
    "num": 678,
    "question": "Lizinqin formalarını göstərin:",
    "options": [
      {
        "text": "yalnız operativ",
        "correct": false
      },
      {
        "text": "yenidənbölgü və müddətlilik",
        "correct": false
      },
      {
        "text": "operativ və dəqiqlik",
        "correct": false
      },
      {
        "text": "operativ,maliyyə",
        "correct": true
      },
      {
        "text": "maliyyə və lizinq",
        "correct": false
      }
    ]
  },
  {
    "num": 679,
    "question": "Kredit əməliyyatları zamanı......:",
    "options": [
      {
        "text": "bankın xüsusi əməliyyatı formalaşır",
        "correct": false
      },
      {
        "text": "bankın ehtiyat əməliyyatı formalaşır",
        "correct": false
      },
      {
        "text": "bankın investisiya portfeli formalaşır",
        "correct": false
      },
      {
        "text": "bankın kredit portfeli formalaşır",
        "correct": true
      },
      {
        "text": "bankın lizinq əməliyyatı formalaşır",
        "correct": false
      }
    ]
  },
  {
    "num": 680,
    "question": "Faktorinq əməliyyatı zamanı müştəri ödəniş etmək hüququnu güzəştə gedir ........ :",
    "options": [
      {
        "text": "investorlara",
        "correct": false
      },
      {
        "text": "heç kimə",
        "correct": false
      },
      {
        "text": "vergi işçilərinə",
        "correct": false
      },
      {
        "text": "Auditor Palatasına",
        "correct": false
      },
      {
        "text": "vasitəçilərə",
        "correct": true
      }
    ]
  },
  {
    "num": 681,
    "question": "Faktorinq zamanı faktor firma müştəriyə ........ :",
    "options": [
      {
        "text": "vaxtında ödənilməmiş malların dəyərini ödəmir",
        "correct": false
      },
      {
        "text": "sənədləri kartotekada saxlamaq hüququ verir",
        "correct": false
      },
      {
        "text": "kreditin ödənilməsi üzrə güzəştli şərait yaradır",
        "correct": false
      },
      {
        "text": "malların dəyərinin vaxtından əvvəl ödənilməsi formasında maliyyələşdirir",
        "correct": true
      },
      {
        "text": "yola salınmış malların dəyərinin ödənilməsi müddətini uzadır",
        "correct": false
      }
    ]
  },
  {
    "num": 682,
    "question": "Trast əməliyyatıdır .....:",
    "options": [
      {
        "text": "fiziki şəxslərin kommersiya təşkilatlarına göstərdiyi sənədləşmə xidməti",
        "correct": false
      },
      {
        "text": "kommersiya banklarının digər banklara göstərdikləri sənədləşmə xidməti",
        "correct": false
      },
      {
        "text": "qeyri-bank kredit təşkilatlarının öz müştərilərinə göstərdiyi hesablaşma xidməti",
        "correct": false
      },
      {
        "text": "kredit təşkilatılarının öz müştərilərinə göstərdiyi etibar etmə əməliyyatı",
        "correct": true
      },
      {
        "text": "kredit ittifaqlarına yardım etmək",
        "correct": false
      }
    ]
  },
  {
    "num": 683,
    "question": "Açıq bazar əməliyatları Mərkəzi Bankın …. üzrə fəaliyyətidir:",
    "options": [
      {
        "text": "əhalinin kreditləşdirilməsi",
        "correct": false
      },
      {
        "text": "kommersiya banklarına lisenziya vermək",
        "correct": false
      },
      {
        "text": "kommersiya banklarının hesablarının azaldılması",
        "correct": false
      },
      {
        "text": "qiymətli kağızların alqı-satqısı",
        "correct": true
      },
      {
        "text": "kommersiya banklarının kreditləşdirilməsi",
        "correct": false
      }
    ]
  },
  {
    "num": 684,
    "question": "Pul dövriyyəsinin əsas hissəsini hansı dövriyyə təşkil edir?",
    "options": [
      {
        "text": "yalnız uzunmüddətli dövriyyə",
        "correct": false
      },
      {
        "text": "qısamüddətli dövriyyə",
        "correct": false
      },
      {
        "text": "qeyri-müəyyən dövriyyə",
        "correct": false
      },
      {
        "text": "1 ilə qədər olan pul dövriyyəsi",
        "correct": false
      },
      {
        "text": "nağdsız",
        "correct": true
      }
    ]
  },
  {
    "num": 685,
    "question": "Mərkəzi Bankın passiv əməliyyatı dedikdə nə başa düşülür?",
    "options": [
      {
        "text": "öz vəsaitlərini itirmək",
        "correct": false
      },
      {
        "text": "öz vəsaitlərini özündə saxlamaq",
        "correct": false
      },
      {
        "text": "öz vəsaitlərini digər kredit təşkilatlarına satmaq",
        "correct": false
      },
      {
        "text": "öz vəsaitlərini beynəlxalq vətəndaşlara satmaq",
        "correct": false
      },
      {
        "text": "kapital bazasını formalaşdıran əməliyyatlar",
        "correct": true
      }
    ]
  },
  {
    "num": 686,
    "question": "XÖHKS- nədir?",
    "options": [
      {
        "text": "Xarici Ödənişlər üzrə Hesablaşma Konvertasiya Sistemi",
        "correct": false
      },
      {
        "text": "Ödənişlər üzrə Hesablaşma Klirinq Sistemi",
        "correct": false
      },
      {
        "text": "Valyuta sistemi",
        "correct": false
      },
      {
        "text": "Xırda Ödənişlər üzrə Hesablaşma Klirinq Sistemi",
        "correct": true
      },
      {
        "text": "Xırda Ödənişlər üzrə Hesablaşma Kredit Sistemi",
        "correct": false
      }
    ]
  },
  {
    "num": 687,
    "question": "Bankda cari hesabın açılması nə ilə rəsmiləşdirilir:",
    "options": [
      {
        "text": "lisenziyanın mövcudluğu ilə",
        "correct": false
      },
      {
        "text": "borc sənədləri ilə",
        "correct": false
      },
      {
        "text": "xüsusi razılıq hesabının açılması ilə",
        "correct": false
      },
      {
        "text": "bank hesabı müqaviləsinin bağlanması ilə",
        "correct": true
      },
      {
        "text": "kredit münasibətlərinin qurulması qaydası ilə",
        "correct": false
      }
    ]
  },
  {
    "num": 688,
    "question": "Kreditin formasıdır:",
    "options": [
      {
        "text": "dünya",
        "correct": false
      },
      {
        "text": "rayon",
        "correct": false
      },
      {
        "text": "ərazi",
        "correct": false
      },
      {
        "text": "beynəlxalq",
        "correct": true
      },
      {
        "text": "ölkə",
        "correct": false
      }
    ]
  },
  {
    "num": 689,
    "question": "Kreditin formasıdır:",
    "options": [
      {
        "text": "əməkdaş krediti",
        "correct": false
      },
      {
        "text": "audit krediti",
        "correct": false
      },
      {
        "text": "bankın ərazi krediti",
        "correct": false
      },
      {
        "text": "bank krediti",
        "correct": true
      },
      {
        "text": "təşkilat krediti",
        "correct": false
      }
    ]
  },
  {
    "num": 690,
    "question": "Kreditin prinsipidir:",
    "options": [
      {
        "text": "müddətlilik",
        "correct": true
      },
      {
        "text": "qiymətləndirmək",
        "correct": false
      },
      {
        "text": "kreditin müddəti olmur",
        "correct": false
      },
      {
        "text": "dəqiqlik",
        "correct": false
      },
      {
        "text": "sistemlilik",
        "correct": false
      }
    ]
  },
  {
    "num": 691,
    "question": "Kreditin prinsipini göstərin:",
    "options": [
      {
        "text": "sövdələşmə",
        "correct": false
      },
      {
        "text": "hesablaşma",
        "correct": false
      },
      {
        "text": "sənədləşmə",
        "correct": false
      },
      {
        "text": "qaytarılma",
        "correct": true
      },
      {
        "text": "mərkəzləşmə",
        "correct": false
      }
    ]
  },
  {
    "num": 692,
    "question": "Kreditin prinsipini göstərin:",
    "options": [
      {
        "text": "depozit",
        "correct": false
      },
      {
        "text": "ödənişlik (faizi ödəmək)",
        "correct": true
      },
      {
        "text": "sənəd dövriyyəsi",
        "correct": false
      },
      {
        "text": "yenidənbölgü",
        "correct": false
      },
      {
        "text": "bank əməliyyatı",
        "correct": false
      }
    ]
  }
]
