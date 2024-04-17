<script lang="ts">
  export let Hst: any;
  import Carousel from '$lib/components/Carousel.svelte';
  import TestComponent from './TestComponent.svelte';
  let movies = [
    {
      name: 'The Flash',
      imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      url: 'https://www.themoviedb.org/movie/298618-the-flash',
    },
    {
      name: 'Guardians of the Galaxy Vol. 3',
      imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
      url: 'https://www.themoviedb.org/movie/447365-guardians-of-the-galaxy-vol-3',
    },
    {
      name: 'Black Panther: Wakanda Forever',
      imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
      url: 'https://www.themoviedb.org/movie/505642-black-panther-wakanda-forever',
    },
    {
      name: 'Avengers: Infinity War',
      imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
      url: 'https://www.themoviedb.org/movie/299536-avengers-infinity-war',
    },
    {
      name: 'Spider-Man: No Way Home',
      imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      url: 'https://www.themoviedb.org/movie/634649-spider-man-no-way-home',
    },
    {
      name: 'The Batman',
      imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg',
      url: 'https://www.themoviedb.org/movie/414906-the-batman',
    },
    {
      name: 'Iron Man',
      imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/78lPtwv72eTNqFW9COBYI0dWDJa.jpg',
      url: 'https://www.themoviedb.org/movie/1726-iron-man',
    },
    {
      name: 'Venom: Let There Be Carnage',
      imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
      url: 'https://www.themoviedb.org/movie/580489-venom-let-there-be-carnage',
    },
    {
      name: 'Deadpool',
      imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3E53WEZJqP6aM84D8CckXx4pIHw.jpg',
      url: 'https://www.themoviedb.org/movie/293660-deadpool',
    },
  ];
  // contents.unshift(
  //   `<div class="flex flex-col snap-start max-w-[50%] bg-teal-800 overflow-scroll max-h-[100%] min-w-[50%] md:min-h-[25%] md:max-h-[25%]"><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div><div>asfdasfklajsdflsaasfdasfklajsdflsaasfdasfklajsdflsa</div></div>`
  // );
  let group = 2;
</script>

<Hst.Story>
  <!-- <div class="flex h-screen"> -->
  <svelte:fragment slot="controls">
    <Hst.Number
      bind:value={group}
      step="1"
      title="Count" />
  </svelte:fragment>
  <Carousel
    component={TestComponent}
    {group}
    items={movies}
    indicatorsStyle="-bottom-6 sm:bottom-2" />
  <!-- </div> -->
</Hst.Story>
