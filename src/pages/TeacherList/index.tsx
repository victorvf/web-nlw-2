import React from 'react';

import { Header, TeacherItem, Input, Select } from '../../components';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
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

          <Select
            name="week_day"
            label="Dia da semana"
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

          <Input type="time" name="time" label="Hora" />
        </form>
      </Header>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
