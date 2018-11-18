
/* SJABLOON
  "SLUG": {
    title: ``,
    intro: ``,
    voorbeeld: [
      ``,
      {
        fout: ``,
        goed: ``
      },
      `.`,
    ],
    hints: [
      `HTML`,
      `HTML`,
    ],
    uitleg: [
      {
        tekst: `HTML`,
        pijlen: [
          {
            links: `HTML`,
            rechts: `HTML`
          },
        ]
      },{
        tekst: `HTML`,
        pijlen: [
          {
            links: `HTML`,
            rechts: `HTML`
          },
        ]
      }
    ],
    referenties: [
      {
        url: ``,
        tekst: ``
      },
    ]
  },
*/


export default {
  "ICT-er-of-ICT'er": {
    datum: new Date(2018, 10, 19),
    title: `ICT-er of ICT’er, ZZP'contract of ZZP-contract`,
    intro: `Bij samentrekkingen met een afkorting zien we zowel een apostrof als een 
            verbindingsstreepje. Wanneer gebruiken we het één en wanneer het ander?`,
    voorbeeld: [
      `Menig `,
      {
        fout: `ICT-er`,
        goed: `ICT’er`
      },
      ` werkt onder een `,
      {
        fout: `zzp’contract`,
        goed: `zzp-contract`
      },
      `.`
    ],
    hints: [
      `Tussen een afkorting en een achtervoegsel komt altijd een apostrof: ’`,
      `Tussen een afkorting en een bestaand woord komt altijd een streepje: -`,
    ],
    uitleg: [
      {
        tekst: `
        <p>
          <strong>ICT</strong> is een afkorting en <strong>er</strong> is hier geen zelfstandig woord, maar een achtervoegsel.<br>
          Bekende achtervoegsels bij afkortingen zijn: <strong>er</strong>, <strong>tje</strong>, <strong>loos</strong>, 
          <strong>en</strong>.
        <p>
        `,
        pijlen: [
          { rechts: `zzp’er`},
          { rechts: `vwo’ers`},
          { rechts: `tv’tje`},
          { rechts: `pc’loos`},
          { rechts: `sms’en`},
        ]
      },{
        tekst: `
        <p>
          <strong>zzp</strong> is een afkorting en <strong>contract</strong> is een zelfstandig woord.
        </p>
        `,
        pijlen: [
          { rechts: `ICT-afdeling`},
          { rechts: `tv-gids`},
          { rechts: `pc-gebruik`},
          { rechts: `sms-bericht`},
        ]
      }
    ],
    referenties: [
      {
        url: `https://taalhulp123.nl/spellinghulp123`,
        tekst: `Spellinghulp123 Nederlands, kolom 13`
      },
    ]
  },

  "teveel-of-te-veel": {
    datum: new Date(2018, 10, 16),
    title: `teveel of te veel`,
    intro: `Dit wordt in sommige gevallen aan elkaar en in andere gevallen los geschreven. 
            Met een simpele tip voorkom je hier een fout.`,
    voorbeeld: [
      {
        fout: `Teveel`,
        goed: `Te veel`
      },
      ` slaap maakt je nog slaperiger.`,
    ],
    hints: [
      `Je schrijft <strong>teveel</strong> alleen aan elkaar als je er <strong>een</strong> voor kunt zetten.`,
    ],
    uitleg: [
      {
        tekst: `
        <p><strong>Te veel</strong> slaap maakt je nog slaperiger. <strong>te veel</strong> zijn hier twee woorden, 
        niet aan elkaar geschreven.</p>
        <ul>
          <li><strong>veel</strong> slaap: <strong>veel</strong> is een bijvoeglijk naamwoord en zegt iets over de slaap.</li>
          <li><strong>te veel</strong> slaap: <strong>te</strong> zegt iets over veel → een te grote dosis slaap.</li>
        </ul>
        `,
      },{
        tekst: `
        <p><strong>Een teveel</strong> aan slaap maakt je nog slaperiger.</p>
        <ul>
          <li><strong>teveel</strong> is hier een zelfstandig naamwoord. Hier komt dus geen spatie tussen te en veel.</li>
        </ul>
        `
      }
    ],
    referenties: [
      {
        url: `https://taalhulp123.nl/stijlhulp123`,
        tekst: `Stijlhulp123 Nederlands, p. 5`
      },
    ]
  },

  "persé-of-per-se": {
    datum: new Date(2018, 10, 13),
    title: `persé of per se`,
    intro: `Slechts één schrijfwijze is hier de juiste. Van belang is dat het een Latijnse uitdrukking is.
            Wat is de spellingsregel?`,
    voorbeeld: [
      `Zij wil dit jaar `,
      {
        fout: `persé`,
        goed: `per se`
      },
      ` naar Amerika.`,
    ],
    hints: [
      `<strong>per se</strong> is een Latijnse uitdrukking van twee woorden.`,
      `In het Latijn schrijf je <strong>nooit</strong> een accentteken.`,
    ],
    uitleg: [
      {
        tekst: `<p>De Latijnse uitdrukking blijft ongewijzigd in het Nederlands.</p>`,
        pijlen: [
          {
            links: `per se`,
            rechts: `betekenis: beslist, absoluut`
          },
        ]
      },
    ],
    referenties: [
      {
        url: `https://taalhulp123.nl/spellinghulp123`,
        tekst: `Spellinghulp123 Nederlands, kolom 12 `
      },
    ]
  },

  "gestresst-of-gestrest": {
    datum: new Date(2018, 10, 10),
    title: `gestresst of gestrest, gril of grill`,
    intro: `Hoe om te gaan met Engelse leenwoorden? Deze taaltip legt de verschillende regels uit voor 
            Engelse zelfstandige naamwoorden en werkwoorden.`,
    voorbeeld: [
      `Ben je `,
      {
        fout: `gestresst`,
        goed: `gestrest`
      },
      `vanwege het aangebrande eten op de `,
      {
        fout: `gril`,
        goed: `grill`
      },
      `?`,
    ],
    hints: [
      `Engelse leenwerkwoorden gaan als het Nederlandse regelmatige werkwoord.`,
      `<strong>kussen</strong>: ik kus - hij kust → <strong>stressen</strong>: ik stres - hij strest`,
    ],
    uitleg: [
      {
        tekst: `
        <h4>Engelse leenwerkwoorden</h4>
        <p>
          De verleden tijd en het voltooid deelwoord gaan altijd volgens de regel van ’t kofschip.
        <br>
          kuss<del>en</del>: de laatste letter van het hele werkwoord zonder -en is <strong>s</strong>. 
          De s staat in ’t kof<strong>s</strong>chip → stam <strong>+ te</strong>.
        </p>
        `,
        pijlen: [
          {
          links: `hij kus<strong>te</strong> - hij heeft gekus<strong>t</strong>`,
          rechts: `hij stres<strong>te</strong> - hij is gestre<strong>st</strong>`
          },
        ]
      },{
        tekst: `
          <h4>Engelse leenwoorden</h4>
          <p><strong>de stress</strong>: zelfstandig naamwoorden houden wel de dubbele medeklinker</p>
        `,
        pijlen: [
          {
            links: `de fitne<strong>ss</strong>`,
            rechts: `hij fitnest - hij heeft gefitnest`
          },{
            links: `de to<strong>ss</strong>`,
            rechts: `hij tost - hij heeft getost`
          },{
            links: `de gri<strong>ll</strong>`,
            rechts: `hij grilt - hij heeft gegrild`
          },{
            links: `de ye<strong>ll</strong><strong>`,
            rechts: `hij yelt - hij heeft geyeld`
          },
        ]
      },{
        tekst: `<p>Soms is de dubbele medeklinker nodig voor de juiste uitspraak van het werkwoord.</p>`,
        pijlen: [
          {
            links: `de app`,
            rechts: `hij appt`
          },{
            links: `de baseball`,
            rechts: `hij baseballt`
          },
        ]
      }
    ],
    referenties: [
      {
        url: `https://taalhulp123.nl/werkwoordenhulp123`,
        tekst: `Werkwoordenhulp123 Nederlands, p. 6-7 `
      },
    ]
  },

  "babietje-of-baby'tje": {
    datum: new Date(2018, 10, 7),
    title: `babietje of baby’tje, hobbies of hobby’s`,
    intro: `De juiste spelling van het meervoud of het verkleinwoord volgt uit de laatste letters van een woord.
            In beide gevallen geldt dezelfde regel.`,
    voorbeeld: [
      `Zij heeft sinds het `,
      {
        fout: `babietje`,
        goed: `baby'tje`
      },
      ` geen tijd meer voor `,
      {
        fout: `hobbies`,
        goed: `hobby's`
      },
      `.`
    ],
    hints: [
      `<strong>hobby</strong>, <strong>baby</strong> - woorden die eindigen op <strong>medeklinker + y</strong>`,
      `De regels voor het meervoud gelden ook voor het verkleinwoord.`
    ],
    uitleg: [
      {
        tekst: `
          <h4>Regel: een woord dat eindigt op medeklinker + y</h4>
          <p>Bij meervoud: de <strong>s</strong> komt na de apostrof:'</p>
        `,
        pijlen: [
          {
            links: `hob<strong>by</strong>`,
            rechts: `hobby<strong>'s</strong>`
          },{
            links: `ba<strong>by</strong>`,
            rechts: `baby<strong>'s</strong>`
          }
        ]
      },{
        tekst: `<p>Bij verkleinwoord: <strong>tje</strong> komt na de apostrof:’</p>`,
        pijlen: [
          {
            links: `hob<strong>by</strong>`,
            rechts: `hobby<strong>'tje</strong>`
          },{
            links: `ba<strong>by</strong>`,
            rechts: `baby<strong>'tje</strong>`
          }
        ]
      },{
        tekst: `<p><strong>y</strong> blijft staan</p>`,
        pijlen: [
          {
            links: `loll<strong>y</strong>`,
            rechts: `loll<strong>y</strong>'s`
          },
          {
            links: `loll<strong>y</strong>`,
            rechts: `loll<strong>y</strong>'tje`
          },
        ]
      }
    ],
    referenties: [
      {
        url: `https://taalhulp123.nl/spellinghulp123`,
        tekst: `Spellinghulp123 Nederlands, kolom 1 en 2`
      },
    ],
  },

  "cadeau's-of-cadeaus": {
    datum: new Date(2018, 10, 4),
    title: `cowboy’tje of cowboytje, cadeau’s of cadeaus`,
    intro: `Meervoudsvorm en verkleinwoord aan elkaar geschreven of met een apostrof? Van belang is hier 
            dat het woord eindigt op een combinatie van klinkers.`,
    voorbeeld: [
      `Het jarige `,
      {
        fout: `cowboy’tje`,
        goed: `cowboytje`
      },
      ` werd overladen met `,
      {
        fout: `cadeau's`,
        goed: `cadeaus`,
      },
      `.`
    ],
    hints: [
      `cowboy, cadeau - woorden die eindigen op een combinatie van klinkers`,
      `De regels voor het meervoud gelden hier ook voor het verkleinwoord.`,
    ],
    uitleg: [
      { 
        tekst: `
          <h4>Een woord eindigt op een combinatie van klinkers:</h4>
          <p>bij meervoud: de <strong>s</strong> zit eraan vast:</p>`,
        pijlen: [ 
          {
            links: `cadeau`,
            rechts: `cadeau<strong>s</strong>`
          }, {
            links: `cowboy`,
            rechts: `cowboy<strong>s</strong>`
          }, {
            links: `etui`,
            rechts: `etui<strong>s</strong>`
          }
        ]
      },{
        tekst: `<p>bij verkleinwoord: <strong>tje</strong> zit eraan vast:</p>`,
        pijlen: [ 
          {
            links: `cadeau`,
            rechts: `cadeau<strong>tje</strong>`
          }, {
            links: `cowboy`,
            rechts: `cowboy<strong>tje</strong>`
          }, {
            links: `etui`,
            rechts: `etui<strong>tje</strong>`
          }
        ]
      }
    ],
    referenties: [
      {
        url: `https://taalhulp123.nl/spellinghulp123`,
        tekst: `Spellinghulp123 Nederlands, kolom 1 en 2`
      },
    ],
  }
};