const fs = require('fs');
const path = require('path');

const typeAliasToFolder = {
  a: 'atoms',
  m: 'molecules',
  o: 'organisms',
  t: 'templates',
};

const [, , typeAlias, componentName] = process.argv;

if (!typeAlias || !componentName) {
  console.error('❌ Uso correto: yarn g <a|m|o|t> <NomeDoComponente>');
  process.exit(1);
}

const folder = typeAliasToFolder[typeAlias];
if (!folder) {
  console.error('❌ Tipo inválido. Use: a (atom), m (molecule), o (organism), t (template)');
  process.exit(1);
}

const componentDir = path.resolve(`src/components/${folder}/${componentName}`);
if (fs.existsSync(componentDir)) {
  console.error('❌ Componente já existe!');
  process.exit(1);
}

fs.mkdirSync(componentDir, { recursive: true });

const indexTsxContent = `import React from 'react';
import { Container } from './styles';
import { ${componentName}Props } from './types';

const ${componentName}: React.FC<${componentName}Props> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default ${componentName};
`;

const stylesTsContent = `import styled from 'styled-components';

export const Container = styled.div\`
  /* TODO: Estilização do componente */
\`;
`;

const typesTsContent = `import { ReactNode } from 'react';

export interface ${componentName}Props {
  children?: ReactNode;
  // TODO: Defina outras props aqui
}
`;

fs.writeFileSync(path.join(componentDir, 'index.tsx'), indexTsxContent.trim(), 'utf-8');
fs.writeFileSync(path.join(componentDir, 'styles.ts'), stylesTsContent.trim(), 'utf-8');
fs.writeFileSync(path.join(componentDir, 'types.ts'), typesTsContent.trim(), 'utf-8');

console.log(`✅ Componente "${componentName}" criado em "src/components/${folder}"`);
