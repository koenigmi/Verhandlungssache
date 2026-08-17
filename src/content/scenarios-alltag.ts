import type { Scenario } from '../types.ts'
import { hot, ok, pro, trap } from './choice.ts'

export const alltagScenarios: Scenario[] = [
  {
    id: 'telefon-chef',
    title: 'Wütender Anruf',
    unlockDay: 7,
    kind: 'alltag',
    briefing: {
      lage: 'Dein Fachvorgesetzter ruft ungeplant an. Ein Release ist geplatzt. Er ist laut, atemlos, sucht einen Schuldigen.',
      actors: 'Du (Primary). Er (unter Druck, publikumswirksam vor seinem eigenen Chef).',
      facts: [
        'Der Fehler liegt in einer Schnittstelle, die ihr gemeinsam abgenommen habt.',
        'In 40 Minuten sitzt er in einem Lenkungsausschuss.',
        'Du hast noch keine vollständige Ursache.',
      ],
      mission: 'Temperatur senken, nichts Unhaltbares zusagen, Information holen, einen haltbaren nächsten Schritt vereinbaren.',
    },
    turns: [
      {
        speaker: 'Chef',
        line: 'Sag mir nicht, du hast das nicht gesehen. Das ist eine Katastrophe. Wer hat das abgenommen?',
        choices: [
          pro(
            'Es klingt, als stünden Sie gerade mit dem Rücken zur Wand und bräuchten etwas, das Sie in 40 Minuten tragen können. Ich höre zu — was genau ist geplatzt?',
            'Label plus offene Frage. Du gehst nicht in die Schuldfrage, du holst die Lage. Treppe Stufe 1–2.',
            'Emotionslabel',
          ),
          ok(
            'Das tut mir leid. Ich kümmere mich sofort darum und melde mich.',
            'Höflich, aber du kaufst ein blankes Versprechen ohne Inhalt. Er hat in 40 Minuten nichts in der Hand außer deiner Panik.',
          ),
          trap(
            'Technisch gesehen haben wir das gemeinsam abgenommen. Das war nicht nur ich.',
            'Rechtfertigung im ersten Satz. Treibstoff. Er hört: Du schiebst ab.',
          ),
          hot(
            'Schreien Sie mich nicht an. So können wir nicht arbeiten.',
            'Du kämpfst um Status, während er ums Überleben im Ausschuss kämpft. Ego vor Containment.',
          ),
        ],
      },
      {
        speaker: 'Chef',
        line: 'Der Kunde sieht falsche Zahlen. Der Vorstand fragt, ob wir die Kontrolle verloren haben. Ich brauche jetzt eine Erklärung.',
        choices: [
          pro(
            'Sie brauchen eine Erklärung, die nicht in fünf Minuten widerlegt wird. Was genau sieht der Kunde — und seit wann? Ich schreibe mit.',
            'Paraphrase des Interesses (tragfähige Erklärung) plus Information. Du führst, ohne zu blocken.',
            'Paraphrasieren',
          ),
          ok(
            'Ich schaue sofort ins Log und rufe in zehn Minuten zurück.',
            'Zeit kaufen ist richtig — aber du hast die Symptome noch nicht gesichert. Zehn Minuten ohne Frage können in die falsche Richtung laufen.',
          ),
          trap(
            'Das ist bestimmt nur ein Cache. Sagen Sie dem Vorstand, in einer Stunde ist alles gut.',
            'Unhaltbares Versprechen. Glaubwürdigkeit ist dein einziges Kapital.',
          ),
          hot(
            'Wenn der Vorstand das so dreht, ist das deren Problem, nicht unseres.',
            'Du beleidigst sein Publikum. Rapport tot, Information null.',
          ),
        ],
      },
      {
        speaker: 'Chef',
        line: 'Seit heute früh. Vertrieb sagt, ihr hättet gestern „alles grün“ gemeldet. Ich will einen Namen.',
        choices: [
          pro(
            'Einen Namen zu liefern, bevor die Ursache sitzt, macht die Lage schlimmer. Wie stellen wir es an, dass Sie um 14 Uhr drei belastbare Sätze haben — ohne dass wir jemanden opfern, der es vielleicht nicht war?',
            'Kalibrierte Frage. Du lehnst die Menschenjagd ab, ohne Nein zu brüllen, und bietest ein haltbares Ziel.',
            'Kalibrierte Frage',
          ),
          ok(
            'Ich war das nicht. Das muss Vertrieb gewesen sein.',
            'Vielleicht wahr, aber du spielst Sündenbock-Pingpong. Keine Information, kein nächster Schritt.',
          ),
          trap(
            'Gut, dann gebe ich Ihnen intern den Entwickler, der den Commit gemacht hat.',
            'Du tauschst eine Person gegen deine Ruhe. Das ist die Deal-Falle „Schuld als Währung“.',
          ),
          hot(
            'Wenn Sie einen Kopf wollen, nehmen Sie meinen. Aber dann ist Schluss mit der Zusammenarbeit.',
            'Ultimatum im Adrenalin. Beziehung verbrannt, Ursache ungeklärt.',
          ),
        ],
      },
      {
        speaker: 'Chef',
        line: 'Also was sage ich in 40 Minuten? „Wir wissen es nicht“ kommt nicht infrage.',
        choices: [
          pro(
            'Sagen Sie: Wir haben den Fehler bestätigt, die Auswirkung eingegrenzt, Ursache in Klärung, nächstes Update um 16 Uhr. Was davon fehlt Ihnen noch, damit das tragfähig ist?',
            'Containment: wahr, begrenzt, mit Uhr, die dir gehört. Dann eine Frage, die ihn mitbauen lässt.',
            'Containment',
          ),
          ok(
            'Sagen Sie, wir arbeiten mit Hochdruck daran.',
            'Leerformel. Vorstände hören: keine Kontrolle. Besser als Lüge, schlechter als drei konkrete Sätze.',
          ),
          trap(
            'Sagen Sie, es ist behoben. Bis der Ausschuss vorbei ist, haben wir es bestimmt.',
            'Lüge auf Zeit. Wenn sie auffliegt, ist die nächste Lage nicht mehr verhandelbar.',
          ),
          hot(
            'Sagen Sie die Wahrheit: Die Planung war von Anfang an unseriös.',
            'Vielleicht dein Gefühl, nicht seine 40-Minuten-Lage. Expressiver Amoklauf.',
          ),
        ],
      },
      {
        speaker: 'Chef',
        line: '16 Uhr ist spät. Ich will um 15 Uhr schon die Schuldigen-Liste und einen Fix-Termin heute Nacht.',
        choices: [
          pro(
            'Wie soll ich eine Schuldigen-Liste liefern, ohne die Ursache zu kennen? Was ich bis 15 Uhr halten kann: Auswirkung, Workaround ja/nein, nächster technischer Schritt. Den Fix-Termin setze ich nicht, bevor das sitzt.',
            '„Wie soll ich das tun?“ plus klare, haltbare Gegen-Uhr. Du gibst nichts umsonst, das die Lage verschlechtert.',
            'Wie soll ich das tun?',
          ),
          ok(
            'Gut, 15 Uhr. Ich sehe dann, was ich habe.',
            'Du nimmst seine Uhr an, ohne den Inhalt zu verhandeln. Klassische Deadline-Falle.',
          ),
          trap(
            'Fix heute Nacht, garantiert. Liste schicke ich nach.',
            'Zwei unhaltbare Zusagen. Du hast soeben deine BATNA und deine Glaubwürdigkeit verschenkt.',
          ),
          hot(
            'Dann gehen Sie halt ohne Fakten in den Ausschuss. Das ist nicht mein Termin.',
            'Technisch mutig, menschlich ein Bruch. Er hängt auf, du stehst allein da.',
          ),
        ],
      },
      {
        speaker: 'Chef',
        line: '…Gut. 15 Uhr die drei Sätze. Keine Namen. Aber wenn um 16 Uhr immer noch nichts da ist, eskaliere ich dich.',
        choices: [
          pro(
            'Verstanden: 15 Uhr Lagebild ohne Namen. 16 Uhr nächster Stand, sobald die Ursache trägt. Ich schicke das in zwei Zeilen per Chat, damit wir uns nicht falsch erinnern.',
            'Summary plus Schrift. Du nimmst die Drohung nicht persönlich und zementierst den Deal.',
            'Zusammenfassen + Schrift',
          ),
          ok(
            'Alles klar, ich gebe mein Bestes.',
            'Weich. „Bestes“ ist kein Vertrag. In der Erinnerung bleibt seine Drohung, nicht euer Plan.',
          ),
          trap(
            'Wenn Sie mich eskalieren, gehe ich mit der ganzen Geschichte zum Betriebsrat.',
            'Gegendrohung. Jetzt ist es ein Krieg, kein Release.',
          ),
          hot(
            'Eskalieren Sie ruhig. Ich nehme das auf.',
            'Statuskampf. Die Zahlen bleiben falsch, nur die Beziehung ist jetzt auch kaputt.',
          ),
        ],
      },
    ],
    closing:
      'Profis gewinnen solche Anrufe nicht. Sie verlassen sie mit Temperatur unten, einer Uhr, die sie halten, und ohne Sündenbock. Rechtfertigung und Heldenversprechen sind die häufigsten Anfängerfehler.',
  },
  {
    id: 'gehalt',
    title: 'Gehaltsgespräch',
    unlockDay: 8,
    kind: 'alltag',
    briefing: {
      lage: 'Jahresgespräch. Du willst eine spürbare Anpassung. Deine Führungskraft ist wohlwollend, aber budgetängstlich.',
      actors: 'Du. Deine Chefin. Unsichtbar: HR und ein Gehaltsband.',
      facts: [
        'Marktvergleich für deine Rolle: 72–84 T€. Du liegst bei 68.',
        'Du hast in 12 Monaten ein Projekt gerettet und zwei Leute eingearbeitet.',
        'Ein externes Gespräch läuft, Angebot ist noch nicht schriftlich — also keine harte BATNA.',
      ],
      mission: 'Wert vor Zahl, Band öffnen, nichts mit einer Drohung zerstören, die du nicht ziehen kannst.',
    },
    turns: [
      {
        speaker: 'Chefin',
        line: 'Bevor wir über Geld reden: Das Jahr war insgesamt okay, aber das Budget ist dicht. Was schwebt dir vor?',
        choices: [
          pro(
            'Es klingt, als müssten Sie jede Zahl nach oben tragen können. Lass uns kurz den Wert sortieren, dann die Spanne — nicht umgekehrt. In den letzten 12 Monaten war X und Y. Wie siehst du das im Band?',
            'Accusation-nahe Empathie, Wert vor Zahl, Frage nach dem Kriterium. Du setzt nicht den ersten nackten Anker aus der Hüfte.',
            'Wert vor Zahl',
          ),
          ok(
            'Ich hätte gern 10 Prozent mehr. Das wäre fair.',
            'Eine Position ohne Kriterium. Sie kann „fair“ nicht nach oben tragen. Besser als Schweigen, schlechter als Spanne plus Beleg.',
          ),
          trap(
            'Ich brauche mindestens 80, sonst muss ich mir etwas anderes suchen. Ein Headhunter ruft schon an.',
            'Bluff-BATNA plus Privatdruck. Du verschenkst Leverage und Rapport in einem Satz.',
          ),
          hot(
            'Okay ist ein Witz. Ohne mich wäre das Projekt tot. 84 oder ich gehe.',
            'Ultimatum ohne schriftliches Angebot. Wenn sie Ja sagt, ist die Beziehung vergiftet. Wenn sie Nein sagt, sitzt du da.',
          ),
        ],
      },
      {
        speaker: 'Chefin',
        line: 'Die Rettung sehe ich. HR sagt trotzdem, wir sind schon am oberen Rand deiner Stufe.',
        choices: [
          pro(
            'Am oberen Rand der Stufe — und trotzdem 4–16 unter dem Markt für die Verantwortung. Wie soll ich das intern vertreten, wenn ich Leute halte, die ich selbst eingearbeitet habe? Welche Schrauben gibt es außer der Stufe?',
            'Objektives Kriterium plus kalibrierte Frage plus Paketöffnung. Du bleibst in der Sache.',
            'Objektive Kriterien',
          ),
          ok(
            'Welche Stufe wäre denn die richtige?',
            'Gute Frage, aber zu früh allein. Ohne Wert und Markt klingt es nach Titelgier.',
          ),
          trap(
            'HR kennt meine Arbeit nicht. Die sollen mal eine Woche hier sitzen.',
            'Feindbild. Sie muss mit HR leben. Du machst sie zum Boten des Feindes.',
          ),
          hot(
            'Dann ist HR das Problem, nicht ich. Sag denen das.',
            'Du gibst ihr Hausaufgaben gegen ihre eigene Maschine. Rapport kippt.',
          ),
        ],
      },
      {
        speaker: 'Chefin',
        line: 'Titel können wir im Sommer prüfen. Jetzt könnte ich 3 Prozent plus einen kleinen Bonus versuchen. Mehr bringe ich nicht durch.',
        choices: [
          pro(
            '3 Prozent lässt die Lücke zum Markt fast unberührt. Wie würde ein Paket aussehen, das du durchbringst: Review-Datum schriftlich, Titelpfad, Bonus-Schwelle klar — und die 3 Prozent als Zwischenstand, nicht als Ende?',
            'Du lehnst die Mitte nicht mit einem Gegen-Ultimatum ab, du baust ein Paket. Schrift und Datum sind der eigentliche Deal.',
            'Paket öffnen',
          ),
          ok(
            'Dann nimm die 3 Prozent, und den Titel merken wir uns.',
            'Erleichterung. Mündlich „merken“ ist kein Vertrag. In 12 Monaten ist das Gespräch nie passiert.',
          ),
          trap(
            'Dann treffen wir uns in der Mitte: 6,5 Prozent.',
            'Never split the difference. Die Mitte ist ihr Anker plus deine Angst, geteilt durch zwei.',
          ),
          hot(
            '3 Prozent ist eine Beleidigung. Das kannst du nicht ernst meinen.',
            'Gesichtsverlust. Danach kann sie dir auch 8 Prozent nicht mehr geben, ohne sich klein zu fühlen.',
          ),
        ],
      },
      {
        speaker: 'Chefin',
        line: 'Wenn ich ein Review in sechs Monaten schriftlich mache, erwartet HR, dass du bis dahin ruhig bleibst. Kein zweites Gespräch, kein Marktgerede.',
        choices: [
          pro(
            'Ruhe ja — wenn das Review ein Kriterium hat, nicht nur ein Datum. Was muss in sechs Monaten wahr sein, damit die Anpassung dann nicht wieder am Band stirbt?',
            'Du tauschst nicht Freiheit gegen Hoffnung. Du verhandelst die Bedingung des Friedens.',
            'Verification',
          ),
          ok(
            'Einverstanden, wenn es schriftlich kommt.',
            'Schrift ist gut. Ohne Kriterium ist das Review eine Verabredung zum Enttäuschen.',
          ),
          trap(
            'Gut. Ich sage intern auch nichts von dem anderen Gespräch.',
            'Du bestätigst eine BATNA, die nicht existiert, und bindest dir die Hände.',
          ),
          hot(
            'HR kann mich nicht mundtot machen. Das ist mein Gehalt.',
            'Richtiges Gefühl, falscher Zug. Du kämpfst gegen eine Abwesende und verlierst die, die da ist.',
          ),
        ],
      },
      {
        speaker: 'Chefin',
        line: 'Kriterium… wenn das Projekt Q2 hält und die zwei Leute bleiben, kann ich 76 begründen. Ohne das sehe ich 70. Schriftlich als Zielkorridor, nicht als Zusage.',
        choices: [
          pro(
            'Zielkorridor 70–76, gekoppelt an Q2 und Teamhalt. Ich brauche den Satz in der Mail heute: Datum, Korridor, woran wir ihn messen. Passt das so?',
            'Du nimmst die Formel und zementierst sie. Kein Feilschen um 500 € in diesem Moment.',
            'Schrift formt die Wirklichkeit',
          ),
          ok(
            '76 muss die Untergrenze sein, nicht die Obergrenze.',
            'Guter Impuls, aber du reißt die gerade gebaute Formel ein, statt sie zu sichern und später nachzulegen.',
          ),
          trap(
            'Wenn die zwei Leute gehen, ist das nicht meine Schuld — der Korridor muss trotzdem gelten.',
            'Du willst die Variable ohne Risiko. So trägt sie es nicht nach oben.',
          ),
          hot(
            'Zielkorridor heißt: Du willst dich nicht festlegen. Dann lass uns das lassen.',
            'Alles-oder-nichts. Oft endet es bei nichts.',
          ),
        ],
      },
      {
        speaker: 'Chefin',
        line: 'Mail geht raus. Bist du… gut damit? Ich dachte, du wolltest heute eine Zahl zum Mitnehmen.',
        choices: [
          pro(
            'Ich wollte eine tragfähige Linie, keine Trophäe. Die Mail ist der Mitnahme-Effekt. Danke, dass du den Korridor nach oben trägst.',
            'Gesicht geben, Deal sichern, nicht nachtreten. Rapport bleibt für die sechs Monate Arbeitsbeziehung.',
            'Gesicht wahren',
          ),
          ok(
            'Geht so. Besser als nichts.',
            'Ehrlich und teuer. Sie bereut die Mail, bevor sie geschrieben ist.',
          ),
          trap(
            'Solange das externe Angebot nicht da ist, reicht das.',
            'Du zeigst die Karten, die du nicht hast. Nächstes Mal spielt sie Härte.',
          ),
          hot(
            'Mal sehen, ob die Mail wirklich kommt.',
            'Misstrauen nach dem Handschlag. Unnötig.',
          ),
        ],
      },
    ],
    closing:
      'Gute Gehaltsgespräche enden selten mit der Traumzahl am selben Nachmittag. Sie enden mit Kriterium, Datum, Schrift und einer Beziehung, in der die nächste Runde noch möglich ist.',
  },
  {
    id: 'autokauf',
    title: 'Gebrauchtwagen',
    unlockDay: 9,
    kind: 'alltag',
    briefing: {
      lage: 'Autohaus, Samstagnachmittag. Ein Kombi, den du magst. Der Verkäufer ist freundlich und schnell.',
      actors: 'Du. Verkäufer. Unsichtbar: „der Chef“ im Hinterzimmer.',
      facts: [
        'Inserat 18.990 €. Vergleichbare Inserate 16.800–17.400 €.',
        'Das Auto steht laut Inserat seit 54 Tagen.',
        'Dein Maximalpreis: 17.200 € fahrbereit, mit Garantie. Ziel: 16.500 €.',
        'TÜV neu, aber ein kleiner Kratzer hinten links ist nicht im Text.',
      ],
      mission: 'Information vor Preis. Keine künstliche Frist. Nichts umsonst. Weggehen können.',
    },
    turns: [
      {
        speaker: 'Verkäufer',
        line: 'Schönes Stück. Wenn Sie heute mitnehmen, lasse ich mit dem Chef über 18.490 reden. Der nächste Interessent kommt um 16 Uhr nochmal.',
        choices: [
          pro(
            'Es klingt, als stünde bei Ihnen der heutige Abschluss im Vordergrund. Bevor wir über 500 Euro reden: Was muss ich über die Historie wissen, das nicht im Inserat steht — und wie lange steht der Wagen wirklich?',
            'Du entlarvst Exploding Offer und Anker, ohne zu beleidigen, und gehst in Information.',
            'Information vor Preis',
          ),
          ok(
            '18.490 ist immer noch zu viel. 17.000 und ich nehme ihn.',
            'Du feilschst schon, bevor Mängel und Standzeit auf dem Tisch sind. Früher Preis = blinder Preis.',
          ),
          trap(
            'Wenn um 16 Uhr jemand kommt, muss ich mich jetzt entscheiden. Gut, wo unterschreiben wir?',
            'Knappheit hat gewonnen. Deine BATNA ist tot, bevor sie gelebt hat.',
          ),
          hot(
            'Den Trick mit dem zweiten Kunden kenne ich. Lassen Sie den Unsinn.',
            'Inhaltlich oft richtig, im Ton ein Statuskampf. Er wird zum Chef-Spiel greifen.',
          ),
        ],
      },
      {
        speaker: 'Verkäufer',
        line: 'Historie ist sauber, ein Vorbesitzer, Scheckheft. Kleiner Parkrempler, den machen wir weg, wenn Sie heute kaufen. 54 Tage? Kann sein, der Markt ist gerade langsam.',
        choices: [
          pro(
            '54 Tage und ein Rempler, der nur bei heutiger Unterschrift verschwindet. Wie soll ich den Inseratspreis halten, wenn Vergleichbare unter 17.400 stehen — ohne Theater-Frist?',
            'Kriterium plus kalibrierte Frage. Der Rempler wird Währung, nicht Geschenk.',
            'Objektive Kriterien',
          ),
          ok(
            'Wenn der Kratzer weg ist, kann ich über 18.000 reden.',
            'Du bezahlst eine Lackierung mit dem Anker. Nichts umsonst — auch keine „wir machen den Kratzer weg“.',
          ),
          trap(
            'Super, dann Kratzer weg und 18.490, wie Sie sagten.',
            'Du hast gerade ihr erstes Schein-Zugeständnis als Deal akzeptiert.',
          ),
          hot(
            'Ein Vorbesitzer, und ihr verschweigt den Schaden im Inserat. Das grenzt an Betrug.',
            'Eskalation. Danach gibt es keinen Preis mehr, nur noch Anwälte oder die Tür.',
          ),
        ],
      },
      {
        speaker: 'Verkäufer',
        line: 'Schauen Sie, ich hol den Chef. Der ist härter als ich. Kaffee?',
        choices: [
          pro(
            'Kaffee gern. Den Chef auch — aber ich verhandle das Paket des Hauses, nicht Good Cop und Bad Cop. Was kann das Haus bei Preis, Garantie und Lack wirklich?',
            'Du benennst das Spiel höflich und ziehst die Institution auf den Tisch.',
            'Good Cop entzaubern',
          ),
          ok(
            'Danke, ich warte.',
            'Harmlos. Du lässt dir Tempo und Rahmen aus der Hand nehmen.',
          ),
          trap(
            'Wenn Ihr Chef härter ist, reden wir besser nur mit Ihnen. Sie verstehen mich doch.',
            'Du schmeichelst dem Guten, genau so soll es laufen.',
          ),
          hot(
            'Kein Theater. Entweder Sie sind zuständig oder ich gehe.',
            'Zu scharf, zu früh. Gehen ist eine Taktik — als Drohung in Minute zehn oft leer.',
          ),
        ],
      },
      {
        speaker: 'Chef',
        line: 'Unter 18.200 geht das Auto nicht raus. Garantie 12 Monate können wir drauflegen, wenn heute Überweisung kommt. Morgen ist der Preis wieder 18.990.',
        choices: [
          pro(
            'Es wirkt, als wäre Liquidität heute das Thema, nicht der wahre Wert. Ich gehe über Nacht. Wenn 16.900 plus 12 Monate Garantie und Lack morgen noch stehen, rede ich. Sonst nicht.',
            'Weggehen als Information. Du setzt deine Zahl plus Paket und besitzt die Uhr.',
            'Weggehen',
          ),
          ok(
            '18.200 plus Garantie — wenn der Lack inklusive ist.',
            'Du bist im oberen Band ihres Ankers. Lebbar, aber du hast Vergleich und Standzeit verschenkt.',
          ),
          trap(
            'Dann überweise ich heute, wenn wir uns bei 18.200 treffen. Mitte zwischen 16.900 und 18.990 wäre unfair gegenüber Ihnen.',
            'Du verhandelst gegen dich selbst und erklärst noch, warum.',
          ),
          hot(
            '18.200 ist Wucher. Ich schreibe das Inserat bei den Portalen öffentlich an.',
            'Bestrafungsfantasie. Kein Deal, potenziell rechtlich dumm.',
          ),
        ],
      },
      {
        speaker: 'Chef',
        line: 'Wenn Sie jetzt gehen, kann ich nichts halten. Der Wagen geht heute.',
        choices: [
          pro(
            'Dann geht er. Ich kaufe kein Auto, dessen Preis nur existiert, solange ich Angst habe. Sie haben meine Nummer.',
            'Echte BATNA. Höflich, final, ohne Türe knallen. Oft kommt der Anruf.',
            'BATNA leben',
          ),
          ok(
            'Ich setze mich kurz ins Auto und überlege.',
            'Zögern auf ihrem Gelände. Die Umgebung arbeitet für sie.',
          ),
          trap(
            'Was ist Ihr letzter letzter Preis, ehrlich?',
            '„Ehrlich“ bittet um einen neuen Anker. Sie werden 18.050 sagen, und du fühlst dich klug.',
          ),
          hot(
            'Dann soll er gehen. Viel Spaß mit den 54 Tagen.',
            'Nachtreten. Unnötig, falls du den Wagen morgen doch willst.',
          ),
        ],
      },
      {
        speaker: 'Verkäufer',
        line: '(am Tor) Warten Sie. 17.400, Lack, 12 Monate, Überweisung bis Dienstag. Letztes Wort.',
        choices: [
          pro(
            '17.200, Lack, 12 Monate, Dienstag — und der Satz steht in der Mail, bevor ich den Hof verlasse. Wenn das das Haus nicht kann, war’s das.',
            'Du nimmst die Bewegung an, gehst aber auf dein Maximum, nicht auf ihre neue Mitte, und ziehst Schrift vor.',
            'Ackerman / Schrift',
          ),
          ok(
            '17.400 ist fair. Handschlag.',
            'Du bist im Vergleichsmarkt, aber über deinem Ziel, und Handschlag ist kein Vertrag.',
          ),
          trap(
            'Deal. Ich überweise heute Nacht, Mail brauchen wir nicht.',
            'Eile nach dem Gewinngefühl. Genau jetzt entstehen die fehlenden Klauseln.',
          ),
          hot(
            'Jetzt, wo ich gehe, seid ihr weich. 16.000 oder ich gehe weiter.',
            'Gier nach dem Durchbruch. Beziehung und Deal können beide kippen.',
          ),
        ],
      },
    ],
    closing:
      'Im Autohaus gewinnen dieselben Regeln wie in der VG: keine künstliche Uhr, nichts umsonst, Information vor Zahl, Schrift vor Freude. Weggehen ist oft der teuerste Satz — für die andere Seite.',
  },
  {
    id: 'jobangebot',
    title: 'Jobangebot',
    unlockDay: 11,
    kind: 'alltag',
    briefing: {
      lage: 'Schriftliches Angebot einer Firma, die dir gefällt. Grundgehalt 4 % unter deinem Ziel, Bonus intransparent. Dein jetziger Arbeitgeber weiß noch nichts.',
      actors: 'Du. Recruiterin. Unsichtbar: Fachvorgesetzte und HR-Band.',
      facts: [
        'Ziel: 82 T€ plus klarer Bonus. Angebot: 78 T€ plus „bis 15 % Bonus“.',
        'Probezeit 6 Monate, Remote „nach Absprache“.',
        'Kein zweites schriftliches Angebot in der Tasche.',
      ],
      mission: 'Den Rest des Tisches sichtbar machen, Paket lesen, Counter ohne Brandstiftung.',
    },
    turns: [
      {
        speaker: 'Recruiterin',
        line: 'Wir sind super happy. Wenn Sie bis Freitag unterschreiben, können wir den Starttermin halten. Das Bonusmodell erklären wir im Onboarding.',
        choices: [
          pro(
            'Ich will das auch. Bis Freitag unterschreiben, bevor Bonus und Remote klar sind — wie soll ich das meinem Partner erklären? Was muss ich über Bonus und „nach Absprache“ wissen, das in der Mail nicht steht?',
            'Wertschätzung, kalibrierte Frage, künstliche Frist nicht schlucken.',
            'Das ganze Angebot lesen',
          ),
          ok(
            'Freitag ist sportlich. Montag ginge besser.',
            'Du verhandelst nur die Uhr, nicht den Inhalt. Zeit ohne Inhalt ist teuer erkauft.',
          ),
          trap(
            'Wenn der Bonus erst im Onboarding kommt, unterschreibe ich und hake das intern nach.',
            'Nach der Unterschrift ist deine Leverage bei null.',
          ),
          hot(
            'So unterschreibt niemand, der seine Hausaufgaben macht. Das ist unprofessionell.',
            'Gesichtsverlust bei jemandem, der noch Ja sagen muss.',
          ),
        ],
      },
      {
        speaker: 'Recruiterin',
        line: 'Bonus: In einem normalen Jahr so 8–12 Prozent, 15 war einmal ein Ausreißer. Remote: das Team ist dienstags im Büro, der Rest ist Vertrauenssache mit dem Lead.',
        choices: [
          pro(
            'Danke, das ist klarer. Wer außer Ihnen muss Grundgehalt, Bonus-Schwelle und Dienstagsregel noch gut finden — und was davon kann in den Vertrag, nicht in die Vertrauenssache?',
            'Rest des Tisches plus Schrift. Black Swans kommen von Abwesenden.',
            'Rest des Tisches',
          ),
          ok(
            '8–12 Prozent kann ich leben, wenn Dienstag fest ist.',
            'Du akzeptierst eine Spanne ohne Schwelle und eine Anwesenheit ohne Vertrag.',
          ),
          trap(
            'Vertrauenssache reicht mir. Ich bin kein Büromensch, das wird schon.',
            'Hoffnung als Klausel. Am Tag 3 der Probezeit gilt das Band, nicht die Stimmung von heute.',
          ),
          hot(
            '15 Prozent standen im Inserat. Das grenzt an Irreführung.',
            'Rechtlich vielleicht diskutabel, als erster Counter eine Brandbombe.',
          ),
        ],
      },
      {
        speaker: 'Recruiterin',
        line: 'Gehalt ist durch HR. Der Lead liebt Sie, aber das Band für die Stufe endet bei 80. Dienstag kann ich als „erwartete Anwesenheit“ in die Mail schreiben, nicht in den Vertrag.',
        choices: [
          pro(
            '80 schriftlich plus Bonus-Schwelle und Review nach Probezeit. Stufe-Ende ist ein Kriterium — wie schließen wir die 2 bis zu meinem Ziel, ohne dass Ihr Band reißt? Titel, Signing, Home-Office-Tage?',
            'Paket statt Krieg gegen HR. Du nimmst 80 als Zwischenanker und öffnest Schrauben.',
            'Counter ohne Brandstiftung',
          ),
          ok(
            '80 plus Dienstag in der Mail. Dann unterschreibe ich.',
            'Sauberer als 78, aber Review und Bonus bleiben Nebel.',
          ),
          trap(
            'Dann muss der Lead intern kämpfen. Sagen Sie ihm, ohne 82 komme ich nicht.',
            'Du machst den Lead zum Helden gegen HR — oft verliert er, und du hörst es nie.',
          ),
          hot(
            'Band bei 80, Inserat hat nach mehr gerochen. Ich ziehe zurück.',
            'Gehen ist erlaubt. Hier ist es früh, solange Paket und Review nicht einmal versucht wurden.',
          ),
        ],
      },
      {
        speaker: 'Recruiterin',
        line: 'Signing 2.000 und Review nach fünf Monaten kann ich fragen. 82 wird ein Nein. Wie wichtig ist Ihnen der Starttermin in vier Wochen?',
        choices: [
          pro(
            'Starttermin ist verhandelbar. Wichtiger: dass das, was Sie fragen, als schriftliches Gegenvorschlag kommt — nicht als „wir haben gefragt“. Wann wissen Sie das, und was passiert, wenn HR beim Signing Nein sagt?',
            'Du hältst die Variable Zeit und verlangst einen echten zweiten Zettel plus Plan B.',
            'Verification',
          ),
          ok(
            'Vier Wochen sind hart, aber machbar, wenn das Signing kommt.',
            'Du verschenkst die Zeit-Schraube, bevor das Paket steht.',
          ),
          trap(
            'Sagen Sie HR, ein anderes Unternehmen liegt bei 85. Das stimmt so ungefähr.',
            'Lüge. Wenn sie nachhaken, bist du erledigt. Auch „ungefähr“ zählt.',
          ),
          hot(
            'Ohne 82 ist der Starttermin sowieso egal.',
            'Ultimatum auf der falschen Variable.',
          ),
        ],
      },
      {
        speaker: 'Recruiterin',
        line: 'HR: 80, Signing 2.000, Review nach fünf Monaten mit Kriterium „Probezeit bestanden plus Zielerreichung“. Dienstag in der Willkommensmail. Angebot gültig bis Mittwoch 12 Uhr.',
        choices: [
          pro(
            'Das ist ein tragfähiges Paket, wenn Review-Kriterium und Signing in denselben Brief kommen. Mittwoch 12 Uhr lasse ich mir nicht als Bombe setzen — ich antworte morgen früh schriftlich. Geht das?',
            'Du nimmst den Inhalt, nicht die exploding clock, und hältst die Schrift zusammen.',
            'Exploding Offer',
          ),
          ok(
            'Passt. Ich unterschreibe heute Abend.',
            'Inhaltlich nah am Profi, aber du belohnst die künstliche Uhr.',
          ),
          trap(
            'Ich unterschreibe, sage meinem jetzigen Chef aber erst in drei Wochen Bescheid.',
            'Unnötiger Beziehungsbruch hinter dir. Profis kündigen sauber, wenn der Vertrag steht.',
          ),
          hot(
            'Mittwoch 12 Uhr ist Erpressung. Entweder unbegrenzt oder ich bin raus.',
            'Überreaktion. Eine Nacht Bedenkzeit reicht meist; die Bombe entschärfen, nicht die Brücke sprengen.',
          ),
        ],
      },
      {
        speaker: 'Recruiterin',
        line: 'Morgen früh ist okay. Der Lead hat noch gefragt, ob Sie intern schon „Ja“ sagen, damit er das Team vorbereitet.',
        choices: [
          pro(
            'Ich will Ja sagen — nach der schriftlichen Fassung. Dem Team ein Ja vor dem Brief ist ein Ja, das ich nicht halten muss, aber er schon. Wie wäre: Team-Info nach meiner Mail morgen?',
            'Du schützt beide Seiten vor einem vorschnellen sozialen Anker.',
            'Kein Counterfeit Yes',
          ),
          ok(
            'Er kann vorsichtig vorsagen, dass es gut aussieht.',
            'Weiches Ja. Im Kopf des Teams bist du schon da.',
          ),
          trap(
            'Klar, sag Ja vom Team. Ich will mich nicht zieren.',
            'Gefälligkeit. Danach ist ein Nein ein öffentlicher Affront.',
          ),
          hot(
            'Wenn der Lead Druck macht, bevor der Vertrag da ist, sagt das viel über die Firma.',
            'Deutung, die du nicht brauchst. Ein Satz zu viel.',
          ),
        ],
      },
    ],
    closing:
      'Angebote sterben an Nebel (Bonus, Remote) und an Abwesenden (HR, Lead, Team). Der Profi macht den Tisch sichtbar, schreibt das Paket und lässt sich die Freude nicht als Frist verkaufen.',
  },
]
