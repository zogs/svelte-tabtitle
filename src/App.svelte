<script>

  import TabTitle from './Component/TabTitle.svelte';

  let pattern = `
    <pattern id="pattern" width="60" height="10" patternTransform="rotate(145)" patternUnits="userSpaceOnUse">
         <rect width="100%" height="100%" fill="#1e7d8e"></rect>
         <line x1="15" x2="15" y2="10" style="stroke:#0c7386; stroke-width:30" />
    </pattern>
  `;

  let footerPattern = `
    <pattern id='footerPattern' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(2) rotate(20)'>
      <rect x='0' y='0' width='100%' height='100%' fill='hsla(189, 36%, 49%, 1)'/>
      <path d='M15 5h10v30H15zM35-5V5H5V-5zM35 35v10H5V35zM35-15h10v30H35zM55 15v10H25V15zM15 15v10h-30V15zM35 25h10v30H35zM-5 25H5v30H-5zM-5-15H5v30H-5z'  stroke-width='1.5' stroke='hsla(189, 65%, 34%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/>
    </pattern>
  `;
</script>

<main>
  <header>
    <TabTitle inversed borderColor="#63a5b1" borderWidth={4} padding={20} pattern={pattern}>
      <h1>The TabTitle Component</h1>
    </TabTitle>
  </header>

  <article>
    <TabTitle>
      <h2>It adapts to your content <img src="favicon.png" alt="icon" style="width:30px; height:30px; margin:0 0 0 10px;" /></h2>
    </TabTitle>
    <div>
    </div>
  </article>

  <article>
    <TabTitle backgroundColor="#4f9ba9" borderColor="#1e7d8e" borderWidth={2}><h2>Just give it colors</h2></TabTitle>
    <div>
    </div>
  </article>

  <article>
    <TabTitle roundTop={0} roundBottom={110} curveWidth={30} padding={20}><h2>And customize the round</h2></TabTitle>
    <div>
    </div>
  </article>

  <article>
    <TabTitle roundTop={0} roundBottom={0} curveWidth={10} padding={20}><h2>Or make it sharp</h2></TabTitle>
    <div>
    </div>
  </article>

  <article>
    <TabTitle depth={100}><h2>Make it full extruded</h2></TabTitle>
    <div>
    </div>
  </article>

  <article>
    <TabTitle depth={50}><h2>Or just by half</h2></TabTitle>
    <div>
    </div>
  </article>

  <article>
    <TabTitle align='left'><h2>Stick it to the left</h2></TabTitle>
    <div>
    </div>
  </article>

  <article>
    <TabTitle align="right"><h2>Or right</h2></TabTitle>
    <div>
    </div>
  </article>

  <article>
    <div>
    </div>
    <TabTitle inversed><h2>Or invert it</h2></TabTitle>
  </article>

  <article>
    <div>
    </div>
    <TabTitle inversed shiftX={-100}><h2>A little to the left</h2></TabTitle>
  </article>

  <footer>
    <TabTitle depth={50} pattern={footerPattern} patternId='footerPattern' borderColor="#1e7d8e" borderWidth={3}><h2 class="big">Oh and you can apply SVG pattern :)</h2></TabTitle>
  </footer>
</main>

<style>

  * {
    box-sizing: border-box;
  }
	main {
		position:relative;
    width:100%;
    height:100%;
    padding: 50px 0 150px 0;
    display:flex;
    justify-content: space-around;
    align-items: center;
    overflow: auto;
    flex-wrap: wrap;
	}

  header {
    position: absolute;
    top:0;
    width:100%;
  }

  footer {
    position:absolute;
    bottom: 0;
    width:100%;
  }

  article {
    position: relative;
    width: 100%;
    max-width: 700px;
    margin: 40px 40px;
    height: 100px;
  }

  article div {
    width:100%;
    height:100%;
    background:#e7e7e7;
    padding: 10px 30px;
  }

	h1 {
		color: #b0ccd1;
		text-transform: uppercase;
    white-space: nowrap;
		font-size: 1.2em;
		font-weight: 100;
    margin: 0;
    padding: 10px 20px 15px 20Px;
	}

  h2 {
    color: white;
    font-size:16px;
    padding: 6px 20px;
    margin:0;
    white-space: nowrap;
    display: flex;
    align-items: center;
    font-weight: 100;
  }
  h2.big {
    padding: 12px 40px;
    font-weight: 600;
  }

</style>