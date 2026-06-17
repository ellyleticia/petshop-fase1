// ============================================================
// Pet Amigo - scripts próprios (funções temporais)
// Tudo roda apenas DEPOIS que o HTML termina de carregar.
// ============================================================
document.addEventListener('DOMContentLoaded', function () {

    // Elementos preenchidos dinamicamente (podem não existir em todas as páginas)
    var elSaudacao = document.getElementById('saudacao');
    var elRelogio = document.getElementById('relogio');
    var elAno = document.getElementById('ano');

    // Saudação conforme a hora do dia
    function obterSaudacao(hora) {
        if (hora >= 5 && hora < 12) {
            return 'Bom dia';
        } else if (hora >= 12 && hora < 18) {
            return 'Boa tarde';
        }
        return 'Boa noite';
    }

    // Atualiza saudação + relógio (data e hora atuais)
    function atualizarRelogio() {
        var agora = new Date();

        if (elSaudacao) {
            elSaudacao.textContent = obterSaudacao(agora.getHours()) + '! 🐾';
        }

        if (elRelogio) {
            var data = agora.toLocaleDateString('pt-BR');
            var hora = agora.toLocaleTimeString('pt-BR');
            elRelogio.textContent = data + ' • ' + hora;
        }
    }

    // Ano atual no rodapé (©) — preenchido uma única vez
    if (elAno) {
        elAno.textContent = new Date().getFullYear();
    }

    // Primeira atualização imediata e depois a cada 1 segundo
    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);

    // ========================================================
    // Formulário de cadastro (só roda na página cadastro.html)
    // ========================================================
    var formCadastro = document.getElementById('formCadastro');

    if (formCadastro) {
        var campoCpf = document.getElementById('cpf');
        var campoTelefone = document.getElementById('telefone');
        var msgCadastro = document.getElementById('mensagemCadastro');

        // Máscara de CPF -> 000.000.000-00
        function mascararCpf(valor) {
            valor = valor.replace(/\D/g, '').slice(0, 11);
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
            valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            return valor;
        }

        // Máscara de telefone -> (00) 00000-0000 (celular) ou (00) 0000-0000 (fixo)
        function mascararTelefone(valor) {
            valor = valor.replace(/\D/g, '').slice(0, 11);
            if (valor.length > 10) {
                valor = valor.replace(/(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
            } else if (valor.length > 6) {
                valor = valor.replace(/(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
            } else if (valor.length > 2) {
                valor = valor.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            } else if (valor.length > 0) {
                valor = valor.replace(/(\d{0,2})/, '($1');
            }
            return valor;
        }

        // Aplica as máscaras enquanto o usuário digita
        campoCpf.addEventListener('input', function () {
            campoCpf.value = mascararCpf(campoCpf.value);
        });

        campoTelefone.addEventListener('input', function () {
            campoTelefone.value = mascararTelefone(campoTelefone.value);
        });

        // Validação e envio
        formCadastro.addEventListener('submit', function (evento) {
            evento.preventDefault();

            // Validação nativa (required, type=email, min, etc.)
            if (!formCadastro.checkValidity()) {
                formCadastro.classList.add('was-validated');
                msgCadastro.className = 'alert alert-danger';
                msgCadastro.textContent =
                    'Por favor, preencha corretamente todos os campos obrigatórios.';
                msgCadastro.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return;
            }

            var nome = document.getElementById('nome').value.trim();

            // Mensagem de sucesso visível na própria página
            msgCadastro.className = 'alert alert-success';
            msgCadastro.textContent =
                'Cadastro realizado com sucesso! Obrigado, ' + nome + '. 🐾';
            msgCadastro.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Limpa o formulário
            formCadastro.reset();
            formCadastro.classList.remove('was-validated');
        });
    }

    // ========================================================
    // Formulário de agendamento (só roda na página agendamento.html)
    // ========================================================
    var formAgendamento = document.getElementById('formAgendamento');

    if (formAgendamento) {
        var resumoAgendamento = document.getElementById('resumoAgendamento');

        formAgendamento.addEventListener('submit', function (evento) {
            evento.preventDefault();

            // Validação nativa (nome, serviço e data são obrigatórios)
            if (!formAgendamento.checkValidity()) {
                formAgendamento.classList.add('was-validated');
                resumoAgendamento.className = 'alert alert-danger';
                resumoAgendamento.textContent =
                    'Por favor, preencha o nome, o serviço e a data do agendamento.';
                resumoAgendamento.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return;
            }

            // Coleta os dados (usa o texto visível do serviço, não o value)
            var nome = document.getElementById('nome').value.trim();
            var selectServico = document.getElementById('servico');
            var servico = selectServico.options[selectServico.selectedIndex].text;
            var dataValor = document.getElementById('data').value; // formato AAAA-MM-DD
            var observacoes = document.getElementById('observacoes').value.trim();

            // Converte a data para o formato brasileiro (DD/MM/AAAA)
            var partes = dataValor.split('-');
            var dataBR = partes[2] + '/' + partes[1] + '/' + partes[0];

            // Monta o resumo do agendamento na própria página
            var resumo =
                'Agendamento confirmado! 🐾\n' +
                'Cliente: ' + nome + '\n' +
                'Serviço: ' + servico + '\n' +
                'Data: ' + dataBR;
            if (observacoes) {
                resumo += '\nObservações: ' + observacoes;
            }

            resumoAgendamento.className = 'alert alert-success';
            resumoAgendamento.style.whiteSpace = 'pre-line'; // respeita as quebras de linha
            resumoAgendamento.textContent = resumo;
            resumoAgendamento.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Limpa o formulário
            formAgendamento.reset();
            formAgendamento.classList.remove('was-validated');
        });
    }

    console.log('Pet Amigo carregado.');
});
