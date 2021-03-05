let initialState = {
  product: [
    {
      id: 1,
      name: "Жалюзі",
      photo:
        "https://gros.ua/wp-content/uploads/2019/04/horizontal-zhaluziKh.jpg",
      count: "4",
      weight: "200g",
      color: "red",
      description: "Товар в чудовому стані",
    },
    {
      id: 2,
      name: "Ролокасети",
      photo:
        "https://stankor.com.ua/wp-content/uploads/2020/07/70afe8ed8760a21e2a4a7db09a7212df.jpg.pagespeed.ce._PBMGvSNKN.jpg",
      count: "8",
      weight: "500g",
      color: "blue",
      description: "Якісний німецький двигун",
    },
    {
      id: 3,
      name: "Карнізи",
      photo:
        "https://images.ua.prom.st/1824277262_w640_h640_karniz-mardom-derevo-metall.jpg",
      count: "6",
      weight: "300g",
      color: "green",
      description: "Товар в чудовому стані",
    },
    {
      id: 4,
      name: "Маркіза",
      photo:
        "https://markiza.of.ua/upload/works/7665/markiza-malaga/1920x1200/markiza-malaga.jpg",
      count: "6",
      weight: "200g",
      color: "green",
      description: "БУ",
    },
    {
      id: 5,
      name: "Римські шторки",
      photo:
        "https://sunny-tm.com/image/cache/catalog/new5/art1/rimskie-shtory-top-653.jpg",
      count: "6",
      weight: "150g",
      color: "green",
      description: "Товар в чудовому стані",
    },
    {
      id: 6,
      name: "Жалюзі",
      photo:
        "https://polves.com.ua/content/vertikalnye-zhaljuzi.jpg.pagespeed.ce.5TkQXiqR-w.jpg",
      count: "6",
      weight: "200g",
      color: "green",
      description: "Товар в чудовому стані",
    },
  ],
  Comment: [
    {
      id: 3,
      productId: 1,
      description: "some text here",
    },
    {
      id: 3,
      productId: 1,
      description: "some text here",
    },
  ],
};

const productReducer = (state = initialState, action) => {
  return state;
};

export default productReducer;
