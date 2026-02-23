import './Mymain.css';

    const Mymain = () => (
      <main className="main">
        <h2>Главная область</h2>
        <p>Макет страницы на React + JSX (без состояния).</p>

        <div className="cards">
          <Card title="Карточка 1">Простой текст в карточке.</Card>
          <Card title="Карточка 2">Компонент можно переиспользовать.</Card>
          <Card title="Карточка 3">JSX упрощает структуру.</Card>
          <Card title="Карточка 4">Всё без useState.</Card>
        </div>
      </main>
    );
  
export default Mymain;
