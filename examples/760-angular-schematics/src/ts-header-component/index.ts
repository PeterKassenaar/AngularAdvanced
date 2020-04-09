import {chain, externalSchematic, Rule, SchematicContext, Tree} from '@angular-devkit/schematics';

const licenseText = `
/**
 * author: Peter Kassenaar
 * email: info@kassenaar.com
 */
`;
export function tsHeaderComponent(_options: any): Rule {
  return chain([
      // Don’t forget to add @schematics/angular to your dependencies in your package.json!
    externalSchematic('@schematics/angular', 'component', _options),
    (tree: Tree, _context: SchematicContext) => {
      tree.getDir(_options.sourceDir)
          .visit(filePath => {
              console.log({filePath});
            if (!filePath.endsWith('.ts')) {
              return;
            }
            const content = tree.read(filePath);
            if (!content) {
              return;
            }

            // Prevent from writing license to files that already have one.
            if (content.indexOf(licenseText) == -1) {
              tree.overwrite(filePath, licenseText + content);
            }
          });
      return tree;
    },
  ])
}
