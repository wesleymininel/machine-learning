
## Machine Learning - Insuficiência Cardíaca

Este projeto de Machine Learning Insuficiência Cardíaca faz parte do MVP do curso de Pós-Graduação em Engenharia de Software na disciplina de Qualidade de Software, Segurança e Sistemas Inteligentes.


## Descrição do Projeto

O dataset contém um conjunto de dados de 299 pacientes com insuficiência cardíaca coletados em 2015 mostra que a creatinina sérica e a fração de ejeção são suficientes para prever a sobrevivência de pacientes com insuficiência cardíaca a partir de registros médicos, e que usar esses dois recursos isoladamente pode levar a previsões mais precisas do que usar os recursos do conjunto de dados original em sua totalidade.

O objetivo é prever a sobrevivência de pacientes com insuficiência cardíaca.


## DataSet

https://archive.ics.uci.edu/dataset/519/heart+failure+clinical+records


## Notebook

https://drive.google.com/file/d/1Bn_l0uVc1ZjdisoVJwhRWsuRfN0kMN6R/view?usp=drive_link


## Ambiente

Esse projeto foi desenvolvido em ambiente Linux - Ubuntu 22.04.4 LTS (Jammy Jellyfish)


## Como Executar o Projeto

1. Criando o Ambiente ENV via Terminal no ambiente Linux:
   ```sh
   python3 -m venv env
   ```

2. Iniciando o Ambiente ENV via Terminal no ambiente Linux:
   ```sh
   source ./env/bin/activate
   ```

3. Clone o repositório do Projeto:
   ```sh
   git clone https://github.com/wesleymininel/machine-learning.git
   ```

4. Navegue até o diretório do Projeto:
   ```sh
   cd machine-learning/
   ```

5. Instale as dependências necessárias:
   ```sh
   pip install -r api/requirements.txt
   ```

6. Inicie o servidor Flask:
   ```sh
   flask --app api/app run --debug
   ```

   O backend estará disponível em `http://127.0.0.1:5000`.

### 2. Acessando do Frontend

1. Abra o arquivo `machine-learning/front/index.html` no seu navegador preferido com o flask rodando.


## Contribuição

Sinta-se à vontade para contribuir com este projeto. Você pode abrir issues ou enviar pull requests para melhorias e correções de bugs.
