/* eslint-disable camelcase */
import React, { useState, useCallback } from 'react';

import warningIcon from '../../assets/images/icons/warning.svg';

import { Header, Input, Textarea, Select } from '../../components';

import './styles.css';

interface ScheduleItem {
  [key: string]: number | string;
}

const TeacherForm: React.FC = () => {
  const [scheduleItem, setScheduleItem] = useState<ScheduleItem[]>([
    { week_day: 0, from: '', to: '' },
  ]);

  const handleAddWeekDay = useCallback(() => {
    setScheduleItem((prevState) => [
      ...prevState,
      { week_day: 1, from: '', to: '' },
    ]);
  }, []);

  const handleDay = useCallback(
    (position: number, field: string, value: string) => {
      const newArray = scheduleItem.map((item, index) => {
        if (index === position) {
          return { ...item, [field]: value };
        }

        return item;
      });

      setScheduleItem(newArray);
    },
    [],
  );

  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Fisica', label: 'Fisica' },
              { value: 'Matematica', label: 'Matematica' },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula (em R$)" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={handleAddWeekDay}>
              + Novo horário
            </button>
          </legend>

          {scheduleItem.map((item, index) => (
            <div key={item.week_day} className="schedule-item">
              <Select
                name="week_day"
                label="Dia da semana"
                value={item.week_day}
                onChange={(e) => handleDay(index, 'week_day', e.target.value)}
                options={[
                  { value: '0', label: 'Segunda-feira' },
                  { value: '1', label: 'Terça-feira' },
                  { value: '2', label: 'Quarta-feira' },
                  { value: '3', label: 'Quinta-feira' },
                  { value: '4', label: 'Sexta-feira' },
                  { value: '5', label: 'Sábado' },
                  { value: '6', label: 'Domingo' },
                ]}
              />

              <Input
                name="from"
                label="Das"
                type="time"
                value={item.from}
                onChange={(e) => handleDay(index, 'from', e.target.value)}
              />
              <Input
                name="to"
                label="Até"
                type="time"
                value={item.to}
                onChange={(e) => handleDay(index, 'to', e.target.value)}
              />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Atenção" />
            Importante!
            <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
