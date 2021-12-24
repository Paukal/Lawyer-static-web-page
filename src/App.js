import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import { ButtonScroll } from './button';

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
        <img src={background} alt="background" className="background"/>
        <div className="body">        
          <div className="logo-section" onClick={refreshPage}>
            <img src={logo} alt="logo" className="logo"/>
            <p className="logo-text hide-on-resize">
              <span style={{fontSize:"0.55em"}}>ADVOKATŲ KONTORA</span><br/> 
              KALVERŠ IR SVETICKAS
            </p>
          </div>
          <ButtonScroll className="button"/>
          <div className="info-block">
            <div className="info-block-text">
              <p style={{fontSize:"2.25em", wordSpacing: "0.3em", fontWeight:"bold"}}>
                ____________________________<br/><br/>  
                ADVOKATAI RAIMONDAS KALVERŠ IR <br/> JAUNIUS SVETICKAS TEIKIA <br/> TEISINES PASLAUGAS<br/> 
                ____________________________
              </p>

              <p className="hide-on-resize" style={{marginTop:"7em", marginBottom:"-4em"}}>
                Turite teisinių klausimų? <br/>
                Turėdami virš <b>20 metų</b> patirties mes Jums atsakysime į<br/> rūpimus klausimus ir padėsime išspręsti teisines problemas.
              </p>
            </div>
          </div>
          <div className="paslaugos-block">
            <div className="grid-container-paslaugos">
              <div className="grid-item-paslaugos">
                <img src={business} alt="business" className="business" height="100%" width= "100%" object-fit="contain"/>
                <p className="grid-item-paslaugos-title">VERSLO ĮMONIŲ IR KOMERCINĖ TEISĖ</p>
                <p className="grid-item-paslaugos-text">
                Konsultuojame verslo, ūkinės-komercinės veiklos
                    teisiniais klausimais, rengiame būtinų teisinių dokumentų (sutarčių ir kt.) projektus, atliekame
                     pateiktų dokumentų teisinį įvertinimą, prireikus atstovaujame teismuose ir kitose ginčų nagrinėjimo
                      institucijose. Taip pat teikiame visas būtinas teisinės
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
                    klausimais, rengiame būtinų teisinių dokumentų projektus, pateikiame dokumentų teisinį įvertinimą,
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
                  pateikiame skolininko turtinės padėties įvertinimą. Atstovaujame derybose, bylose ir kituose teisiniuose procesuose dėl skolų išieškojimo.
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
                    pareiškimus ir kt.).
                </p>
              </div>
              <div className="grid-item-paslaugos">
                <img src={services} alt="services" className="services" height="100%" width= "100%" object-fit="contain"/>
                <p className="grid-item-paslaugos-title">KITOS TEISINĖS PASLAUGOS</p>
                <p className="grid-item-paslaugos-text">                
                  ♦ Konsultuojame baudžiamosios teisės klausimais, giname bei atstovaujame baudžiamose bylose<br/>
                  ♦ Konsultuojame darbuotojus ir darbdavius darbo teisės klausimais, atstovaujame darbo ginčuose <br/>
                  ir bylose, kylančiose iš darbo teisinių santykių<br/>
                  ♦ Konsultuojame draudėjus ir draudikus draudimo 
                  teisinių santykių klausimais, atstovaujame draudimo ginčuose ir bylose<br/>
                  ♦ Teikiame konsultacijas 
                  mokesčių klausimais, atstovaujame mokestiniuose ginčuose
                </p>
              </div>
            </div>
          </div>
          <div className="apie-block">
            <img src={lawbackground} alt="lawbackground" className="lawbackground" height="100%" width= "100%"/>
            <div className="info hide-on-resize">
              <h2>Raimondas Kalverš</h2> <br/>
            
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
               

              <h2>Jaunius Svetickas</h2> <br/>
              Teisinė praktika nuo 1995 m.

              Advokatas nuo 2003 m.<br/>
              <br/>
              

              Specializacijos: verslas ir įmonių veikla, šeimos teisė, <br/>sutarčių teisė, teisminiai ginčai, kitos kontoros veiklos sritys
            </div>


            <div className="kontaktai">
              <h1>Kontaktai</h1>
              Advokatas Raimondas Kalverš<br/>
              tel. (+370 631) 09888<br/>
              el. p.: raimondas@akks.lt<br/>

              <br/>
              <br/>
              Advokatas Jaunius Svetickas<br/>
              tel. (+370 685) 45062<br/>
              el. p.: jaunius@akks.lt<br/>

              <br/>
              <br/>
              <b>Žalgirio g. 88-609,<br/>
              LT-09303 Vilnius</b>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
