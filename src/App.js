import './App.css';
import logo from './assets/logo.jpg';
import background from "./assets/bckgr.jpg";
import business from "./assets/business.jpg";
import bankrupt from "./assets/bankrupt.jpg";
import construction from "./assets/construction.jpg";
import realestate from "./assets/realestate.jpg";
import stuff from "./assets/stuff.jpg";
import deal from "./assets/deal.jpg";
import family from "./assets/family.jpg";
import debt from "./assets/debt.jpg";
import suit from "./assets/suit.jpg";
import services from "./assets/services.jpg";
import lawbackground from "./assets/lawbckgr.jpg";
//import Product from './Data';

function App() {
  return (
    <div className="App">
        <img src={background} alt="background" className="background"/>
        <div className="body">
          <div className="logo-section">
            <img src={logo} alt="logo" height="100px" width="150px" className="responsive-image"/>
            <p>Kalvers ir Svetickas</p>
          </div>
          <div className="info-block">
            <div className="info-block-text">
              <p style={{fontSize:38}}>
                ____________________________<br/><br/>  
                Advokatai Raimondas Kalverš ir<br/> Jaunius Svetickas teikia teisinę pagalbą<br/> 
                ____________________________
              </p>
              <br/><br/>
              <p >
                Turite teisinių klausimų? <br/>
                Turėdami daugiau nei 10 metų patirties mes jums atsakysime į<br/> rūpimus klausimus ir padėsime išspręsti teisines problemas.
              </p>
            </div>
          </div>
          <div className="paslaugos-block">
            <div className="grid-container-paslaugos">
              <div className="grid-item-paslaugos">
                <img src={business} alt="business" className="business" height="100%" width= "100%" object-fit="contain"/>
                <p className="grid-item-paslaugos-title">VERSLO ĮMONIŲ IR KOMERCINĖ TEISĖ</p>
                <p className="grid-item-paslaugos-text">
                  Tai viena iš pagrindinių kontoros veiklos sričių, apimanti platų teikiamų paslaugų, susijusių su verslo,
                   komerciniais santykiais, įmonių veikla, spektrą. Konsultuojame visais versle, ūkinėje-komercinėje veikloje
                    kylančiais teisiniais klausimais, rengiame būtinų teisinių dokumentų (sutarčių ir kt.) projektus, atliekame
                     pateiktų dokumentų teisinį įvertinimą, prireikus atstovaujame teismuose ir kitose ginčų nagrinėjimo
                      institucijose nagrinėjant kilusius ginčus tarp verslo kontrahentų ir patnerių, ar ginčuose su verslo
                       priežiūrą vykdančiomis valstybės ir savivaldos institucijomis. Taip pat teikiame visas būtinas teisinės
                        paslaugas steigiant, įsigijant, jungiant, atidalijant, pertvarkant, ar likviduojant įmones, įsigyjant, ar
                         perleidžiant akcijas (įmonių kapitalo dalis, pajus), keičiant įmonės valdymo struktūrą, steigimo dokumentus,
                          buveinės vietą, pavadinimą, valdymo organus, ar atskirus jų narius.
                </p>
              </div>
              <div className="grid-item-paslaugos">
                <img src={bankrupt} alt="bankrupt" className="bankrupt" height="100%" width= "100%" object-fit="contain"  />
                <p className="grid-item-paslaugos-title">BANKROTAS</p>
                <p className="grid-item-paslaugos-text">
                  Prireikus, patarsime visais teisiniais klausimais, kilusiais dėl įmonės nemokumo bei suteiksime visas būtinas
                   teisines paslaugas teikiant pareiškimą dėl įmonės bankroto, bankroto bylos iškėlimo ir nagrinėjimo procese.

                  Turime reikiamos patirties bei galime atstovauti bankroto bylos iškėlimo ir nagrinėjimo procese tiek pačią 
                  bankrutuojančią įmonę, tiek įmonės kreditorius, tiek bankrutuojančios įmonės administratorių.
                </p>
              </div>
              <div className="grid-item-paslaugos">
                <img src={construction} alt="construction" className="construction" height="100%" width= "100%" object-fit="contain"/>
                <p className="grid-item-paslaugos-title">STATYBŲ TEISĖ</p>
                <p className="grid-item-paslaugos-text">
                  
                  Statybų teisė – viena iš prioritetinių kontoros specializacijų. Esame sukaupę didelę patirtį teikiant platų
                   teisinių paslaugų spektrą statytojams, rangovams, projektuotojams, statybos techninės priežiūros subjektams,
                    pirkėjams tiek pačiame statybos procese, tiek nagrinėjant ginčus ir bylas, kylančias iš statybos teisinių santykių.
                     Konsultuojame visais būtinais pasirengimo statybai, projektavimo, statybos proceso, priežiūros, kokybės, atitikties,
                      garantijų, statinių naudojimo teisiniais klausimais, rengiame sutarčių ir kitų reikiamų teisinių dokumentų projektus,
                       pateikiame dokumentų teisinį įvertinimą, prireikus – atstovaujame ginčuose ir bylose, kylančiose iš statybos teisinių
                        santykių visus statybos proceso dalyvius, statinių naudotojus.
                </p>
              </div>
              <div className="grid-item-paslaugos">
                <img src={realestate} alt="realestate" className="realestate" height="100%" width= "100%" object-fit="contain"/>
                <p className="grid-item-paslaugos-title">NEKILNOJAMASIS TURTAS IR TERITORIJŲ PLANAVIMAS</p>
                <p className="grid-item-paslaugos-text">       
                  Konsultuojame ir teikiame visas būtinas teisines paslaugas žemės, statinių bei kitokio nekilnojamojo turto statuso, formavimo,
                   registravimo, sandorių (sutarčių), teritorijų planavimo bendraisiais ir procesiniais klausimais.

                  Prireikus, atstovaujame teisme ir kitose ginčų nagrinėjimo institucijose tokio pobūdžio bylose.
                </p>
              </div>
              <div className="grid-item-paslaugos">
                <img src={stuff} alt="stuff" className="stuff" height="100%" width= "100%" object-fit="contain"/>
                <p className="grid-item-paslaugos-title">NUOSAVYBĖS IR DAIKTINĖ TEISĖ</p>
                <p className="grid-item-paslaugos-text">
                  Konsultuojame ir teikiame visas būtinas teisines paslaugas nuosavybės, savininko teisių apsaugos ir gynimo, 
                  atskirų turtinių teisių į daiktą (valdymo, naudojimosi, disponavimo), turtinių teisių suvaržymo (servitutas,
                   uzufruktas, įkeitimas, hipoteka, areštas ir kt.) ir kitais nuosavybės bei daiktinės teisės klausimais.

                  Prireikus, atstovaujame teisme ir kitose ginčų nagrinėjimo institucijose tokio pobūdžio bylose.
                </p>
              </div>
              <div className="grid-item-paslaugos">
                <img src={deal} alt="deal" className="deal" height="100%" width= "100%" object-fit="contain"/>
                <p className="grid-item-paslaugos-title">SUTARČIŲ TEISĖ</p>
                <p className="grid-item-paslaugos-text">
                  Konsultuojame įvairių sutarčių (pirkimo-pardavimo, mainų, dovanojimo, nuomos, lizingo, rangos, paslaugų teikimo,
                   pervežimų, pasaugos, paskolos, jungtinės veiklos ir kt.) sudarymo, aiškinimo ir vykdymo klausimais,
                    bendraisiais sutarčių ir prievolių teisės klausimais. Rengiame sutarčių projektus, pateikiame sutarčių teisinį
                     įvertinimą. Atstovaujame bylose ir kituose teisiniuose procesuose, kylančiuose iš sutartinių teisinių santykių.
                </p>
              </div>
              <div className="grid-item-paslaugos">
                <img src={family} alt="family" className="family" height="100%" width= "100%" object-fit="contain"/>
                <p className="grid-item-paslaugos-title">ŠEIMOS TEISĖ</p>
                <p className="grid-item-paslaugos-text">
                  Konsultuojame sutuoktinių tarpusavio teisinių ir turtinių santykių, vaikų teisių apsaugos, išlaikymo,
                   įvaikinimo, globos ir rūpybos, santuokos nutraukimo, turto padalinimo bei visais kitais šeimos teisės
                    klausimais, rengiame būtinų teisinių dokumentų (vedybų sutarties, sutuoktinių susitarimo dėl santuokos
                     nutraukimo, pareiškimo teismui dėl santuokos nuraukimo vieno iš sutuoktinių prašymu, ieškinių dėl
                      išlaikymo priteisimo, turto padalinimo ir kt.) projektus, pateikiame dokumentų teisinį įvertinimą,
                       atstovaujame bylose, kylančiose iš šeimos teisinių bei turtinių santykių.
                </p>
              </div>
              <div className="grid-item-paslaugos">
                <img src={debt} alt="debt" className="debt" height="100%" width= "100%" object-fit="contain"/>
                <p className="grid-item-paslaugos-title">SKOLŲ IŠIEŠKOJIMAS</p>
                <p className="grid-item-paslaugos-text">
                  Konsultuojame skolų išieškojimo klausimais, kreditoriaus ir skolininko teisinių santykių, bendraisiais 
                  prievolinės teisės klausimais, pateikiame skolos išieškojimo teisinių galimybių įvertinimą, esant galimybei,
                  pasiūlome alternatyvius teisėtus būdus skolai išieškoti, surinkę informaciją iš viešų šaltinių
                  pateikiame skolininko turtinės padėties įvertinimą*. Atstovaujame derybose, bylose ir kituose teisiniuose procesuose dėl skolų išieškojimo.

 

                  *ši paslauga teikiama tik sudarius rašytinę teisinių paslaugų sutartį.
                </p>
              </div>
              <div className="grid-item-paslaugos">
                <img src={suit} alt="suit" className="suit" height="100%" width= "100%" object-fit="contain"/>
                <p className="grid-item-paslaugos-title">ATSTOVAVIMAS GINČŲ NAGRINĖJIME IR BYLOSE</p>
                <p className="grid-item-paslaugos-text">
                  Atstovaujame klientus civilinio, administracinio pobūdžio ginčuose ir bylose, kylančiose iš teisinių santykių,
                   kurių sferoje teikiame teisines paslaugas (žr. kitas nuorodas).

                  Be to, susitarus, taip pat atstovaujame klientus administracinių teisės pažeidimų, baudžiamosiose bylose. Rengiame visus
                   būtinus bylinėjimosi procese procesinius dokumentus (ieškinius, priešieškinius, atsiliepimus, dublikus, triplikus, skundus,
                    pareiškimus ir kt.) Šias teisines paslaugas teikiame visuose teismuose ir visose bylos nagrinėjimo instancijose: pirmos
                     instancijos teismuose (apylinkių, apygardų teismuose, apygardų administraciniuose teismuose), apeliacinės instancijos
                      teismuose (apygardų teismuose, Lietuvos apeliaciniame teisme, Lietuvos vyriausiame administraciniame teisme),
                       Lietuvos Aukščiausiame Teisme (kasacinė bylos nagrinėjimo instancija).

                  Teikiame teisines paslaugas ir rengiame būtinus dokumentus proceso atnaujinimo bylose procese, atstovaujame tokio pobūdžio bylose.

                  Visada pirmiausiai stengiamės išsiaiškinti kliento poreikius ir tikslus bei atrasti ir pasiūlyti klientui alternatyvius, pigesnius
                   bei greitesnius ginčų sprendimo būdus nei teisminis bylų nagrinėjimas. Be to, atsižvelgiant į ilgametę bylinėjimosi patirtį,
                    visada pirmiausiai pasiūlysime bandyti išspręsti visus ginčus ir bylas taikiai (jei tai įmanoma ir kliento interesai iš
                     esmės nenukentės) bei suteiksime visas būtinas teisines paslaugas bandant taikiai išspręsti/sureguliuoti kilusį ginčą.

                  Pagrindinis tikslas, kurio siekiame atstovaudami bylose bei kituose ginčų procesuose: didžiausia nauda klientui
                   kuo mažesnėmis kliento sąnaudomis.
                </p>
              </div>
              <div className="grid-item-paslaugos">
                <img src={services} alt="services" className="services" height="100%" width= "100%" object-fit="contain"/>
                <p className="grid-item-paslaugos-title">KITOS TEISINĖS PASLAUGOS</p>
                <p className="grid-item-paslaugos-text">                
                  ♦ Konsultuojame baudžiamosios teisės klausimais, giname bei atstovaujame baudžiamose bylose
                  ♦ Konsultuojame darbuotojus ir darbdavius darbo teisės klausimais, atstovaujame darbo ginčuose 
                  ir bylose, kylančiose iš darbo teisinių santykių♦ Konsultuojame draudėjus ir draudikus draudimo 
                  teisinių santykių klausimais, atstovaujame draudimo ginčuose ir bylose♦ Teikiame konsultacijas 
                  mokesčių klausimais, atstovaujame mokestiniuose ginčuose♦ Konsultuojame paveldėjimo klausimais, 
                  rengiame būtinus dokumentus, pateikiame dokumentų (testamentų, paveldėjimo teisės liudijimų ir kt.) 
                  teisinį įvertinimą, atstovaujame palikimo priėmimo (paveldėjimo) įforminimo procese, o taip pat (prireikus) – 
                  tokio pobūdžio bylose teisme♦ Konsultuojame vartotojų teisių apsaugos ir gynimo klausimais, atstovaujame tokio pobūdžio bylose
                </p>
              </div>
            </div>
          </div>
          <div className="apie-block">
            <img src={lawbackground} alt="lawbackground" className="lawbackground" height="100%" width= "100%"/>
            <p className="info">
              <h1>Raimondas Kalverš</h1> <br/>
            
              Lietuvos archyvų departamentas prie Lietuvos Respublikos Vyriausybės,<br/> teisininkas 1994 m. - 1995 m.<br/>
              <br/>

              Kauno miesto apylinkės prokuratūra, tardytojas, prokuroras 1995 m. - 1997 m.<br/>
              <br/>
              Specialiųjų tyrimų tarnyba, vyr. tardytojas 1997 m. - 2001 m.<br/>
              <br/>
              Advokato padėjėjas 2001-2004 m.<br/>
              <br/>
              Advokatas nuo 2004 m.<br/>
              <br/>
              Lietuvos arbitražo teismo arbitras 2014 m. - 2020 m.<br/>

              <br/>

              Specializacijos: statybų teisė, nekilnojamojo turto teisinis<br/> statusas ir sandoriai, teritorijų planavimas,<br/>
               verslas ir įmonių veikla, bankroto teisė, sutarčių teisė,<br/> teisminiai ginčai, kitos kontoros veiklos sritys<br/>

               <br/>
               <br/>
               <br/>
               

              <h1>Jaunius Svetickas</h1>
              Teisinė praktika nuo 1995 m.

              Advokatas nuo 2003 m.<br/>
              <br/>
              

              Specializacijos: verslas ir įmonių veikla, šeimos teisė, <br/>sutarčių teisė, teisminiai ginčai, kitos kontoros veiklos sritys
            </p>


            <p className="kontaktai">
              <h1>Kontaktai</h1>
              Advokatas Raimondas Kalverš<br/>
              tel. (+370 631) 09888<br/>
              el. p.: raimondas@akks.lt<br/>

              <br/>
              <br/>
              Advokatas Jaunius Svetickas<br/>
              tel. (+370 685) 45062<br/>
              el. p.: jaunius@akks.lt<br/>
            </p>
          </div>
        </div>
    </div>
  );
}

export default App;
