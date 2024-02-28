import { useState } from "react";

const slotReelIcons = [
  {
    id: 0,
    imagePath: "src/assets/apple.png"
  }, {
    id: 1,
    imagePath: "src/assets/casino.png"
  }, {
    id: 2,
    imagePath: "src/assets/cherry.png"
  }, {
    id: 3,
    imagePath: "src/assets/diamond.png"
  }, {
    id: 4,
    imagePath: "src/assets/lemon.png"
  }, {
    id: 5,
    imagePath: "src/assets/watermelon.png"
  }
];

const slotReelIconsStyle = {
    width: 100,
    paddingLeft: 10,
    paddingRight: 10,
    padding: 10,
    marginTop: 10
};

const Header = () => {
  return(
    <h1 style={{
      textAlign: "center",
      color: "white",
      fontWeight: "bold",
      fontSize: "50px",
      alignContent: "center",
      justifyContent: "center"
    }}>
      SLOTS
    </h1>
  )
}

const SlotsGame = () => {
  const [ balance,setBalance ] = useState(0)
  const [ deposit,setDeposit ] = useState(0)
  const [ depositPressed,setDepositPressed ] = useState(false)

  let rand1 = depositPressed ? Math.floor(Math.random() * (6-0) + 0) : 0
  let rand2 = depositPressed ? Math.floor(Math.random() * (6-0) + 0) : 2
  let rand3 = depositPressed ? Math.floor(Math.random() * (6-0) + 0) : 4

  function handleDepositEntry(e) {
    setDeposit(e.target.value)
  }

  function handleSpin() {
    if(balance < 20) {
      return
    } else {
      setDepositPressed(!depositPressed)
      setBalance(balance - 20)
      assignPoints()
    }
  }

  function assignPoints() {
    if(rand1 === rand2 === rand3 === 1) {
      setBalance(balance + 100)
    }
  }

  return(
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <Header />
      <label htmlFor="fname">Enter Curreny to deposit:</label>
      <input autoComplete="off" type="text" id="fname" name="fname" onChange={handleDepositEntry} style={{
        padding: 10,
        marginBottom: 10
      }}/>
      <button onClick={() => setBalance(balance + parseInt(deposit))}>
        Deposit
      </button>
      <h2>Balance: {balance}</h2>
      {balance < 20 && <p>Deposit {20 - balance} more to play</p>}
      {balance > 1 && 
        <div style={{
          display: "flex",
          flexDirection: "column"
          }}>
          <div>
            <img src={slotReelIcons[rand1].imagePath} style={slotReelIconsStyle} />
            <img src={slotReelIcons[rand2].imagePath} style={slotReelIconsStyle} />
            <img src={slotReelIcons[rand3].imagePath} style={slotReelIconsStyle} />
          </div>
          <button onClick={handleSpin}>
            SPIN
          </button>
        </div>
      }
    </div>
  )
}

const App = () => {
  return(
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <SlotsGame />
    </div>
  )
}

export default App