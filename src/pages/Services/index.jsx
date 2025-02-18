import Title from "../../components/Title";
import style from './index.module.css';


const Services = () => {
  return (
    <div className={style.container}>
      <section className={style.haircut}>
        <Title title="CORTE" titleClassName="titleServices"/>        
      </section>
      
      <Title title="MECHAS" titleClassName="titleServices" />
      <Title title="LUZES" titleClassName="titleServices" />
      <Title title="ESCOVA" titleClassName="titleServices" />
      <Title title="COLORAÇÃO" titleClassName="titleServices" />
      <Title title="SELAGEM" titleClassName="titleServices" />
      <Title title="BOTOX" titleClassName="titleServices" />
      <Title title="TRATAMENTO" titleClassName="titleServices" />
      <Title title="PROGRESSIVA" titleClassName="titleServices" />
      <Title title="ALINHAMENTO CAPILAR" titleClassName="titleServices" />
    </div>
  )
}

export default Services