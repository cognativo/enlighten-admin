<template>
  <div class="q-pa-sm">
    <div class="row">
      <div class="col-4">
        <q-select
          filled
          v-model="model.foro"
          :options="foros"
          option-value="code"
          option-label="foro"
          label="Foro"
          emit-value
        />
      </div>
      <div class="col-4">
        <q-select
          filled
          v-model="model.filter"
          option-value="id"
          :options="options"
          option-label="description"
          label="Pesquisa por"
          emit-value
        />
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <q-input filled v-model="model.valorConsulta" label="Filtro" />
      </div>
    </div>
    <div>
      <q-btn
        color="primary"
        text-color="white"
        glossy
        unelevated
        icon="search"
        label="Buscar"
        @click="searchProcesses"
      />
    </div>

    <q-table
      title="Processos"
      :data="pesquisas"
      :columns="columns"
      row-key="codigoPesquisa"
      selection="single"
      :selected.sync="selected"
    />
     <q-btn
        color="primary"
        text-color="white"
        glossy
        unelevated
        icon="search"
        label="Exportar XLS"
        @click="exportXLS"
      />
    </div>
</template>

<script>
import ForoServices from "@/api/ForoServices";
import PesquisaServices from "@/api/PesquisaServices";
import json2xls from 'json2xls';
import fs from 'fs'
import exportFromJSON from 'export-from-json'
import { log } from 'util';

export default {
  data() {
    return {
      model: {},
      foros: [],
      text: "",
      options: [
        {
          id: "NUMPROC",
          description: "Número do Processo"
        },
        {
          id: "NMPARTE",
          description: "Nome da Parte"
        },
        {
          id: "DOCPARTE",
          description: "Documento da parte"
        },
        {
          id: "NMADVOGADO",
          description: "Nome do Advogado"
        },
        {
          id: "NUMOAB",
          description: "OAB"
        }
      ],
      //Dados da Pesquisa
      pesquisas: [],

      //Tabela processos
      columns: [
        {
          name: "codigoPesquisa",
          align: "center",
          label: "Cod Pesquisa",
          field: "codigoPesquisa",
          sortable: true
        },
        {
          name: "processo",
          label: "Processo",
          field: "processo",
          sortable: true
        },
        { name: "assunto", label: "Assunto", field: "assunto", sortable: true }
      ],

      //Coleção selecionada
      selected: []
    };
  },

  async created() {
    await this.loadForos();
    await this.getPesquisas();
  },
  methods: {
    async loadForos() {
      var response = await ForoServices.getForos();
      this.foros = response.data;
    },
    async searchProcesses() {
      var response = await PesquisaServices.createPesquisa(this.model);
    },
    async getPesquisas() {
      var response = await PesquisaServices.getPesquisas();
      this.pesquisas = response.data;
    },
   async exportXLS(){
      var xls = json2xls(this.selected);
      fs.writeFileSync('data.xlsx', xls, 'binary');
      
    }
  }
};
</script>